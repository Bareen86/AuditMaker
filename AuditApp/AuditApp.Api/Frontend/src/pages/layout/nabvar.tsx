import { NavLink, Outlet } from "react-router-dom";
import "./layout.css"

export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="nav-list">
                    <ul>
                        <li className="first-li">
                            <NavLink className="nav-bar-link" reloadDocument={true} style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="HotelRedactor">Аудит Отеля</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-bar-link" reloadDocument={true} style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/CampRedactor">Аудит Лагеря</NavLink>
                        </li>
                    </ul>
                </div>
                <img className="avatar-img" src="./AuditorAvatar.png"></img>
            </div>
            <Outlet/>
        </>
    );
}
