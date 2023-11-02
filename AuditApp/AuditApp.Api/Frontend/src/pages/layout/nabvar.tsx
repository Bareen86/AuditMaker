import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./layout.css";
import {
    Button,
    IconButton,
    Menu,
    MenuItem,
    Popover,
    Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

export default function Navbar() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate("/login");
    }

    const user = JSON.parse(localStorage.getItem("user") || "");

    return (
        <>
            <div className="header">
                <div className="nav-list">
                    <ul>
                        <li className="first-li">
                            <NavLink
                                className="nav-bar-link"
                                reloadDocument={true}
                                to="HotelAudits"
                                style={({ isActive }) => ({
                                    color: isActive ? "#296DCB" : "",
                                })}
                            >
                                Аудиты Отеля
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav-bar-link"
                                reloadDocument={true}
                                to="CampAudits"
                                style={({ isActive }) => ({
                                    color: isActive ? "#296DCB" : "",
                                })}
                            >
                                Аудиты Лагеря
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <IconButton
                    aria-label="more"
                    id="menu-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <PersonIcon fontSize="large" />
                </IconButton>
                <Popover    
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                    <Typography sx={{ p: 2 }}>
                        {user.name} {user.secondName}
                    </Typography>
                    <Button size="medium" onClick={handleLogout} variant="contained">
                        Выйти
                    </Button>
                </Popover>
            </div>
            <Outlet />
        </>
    );
}
