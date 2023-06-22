import { NavLink, Outlet } from "react-router-dom";
import "./layout.css"

export default function Layout() {
    return (
        <>
            <div className="header">
                <div className="nav-list">
                    <ul>
                        <li className="first-li">
                            <NavLink className="nav-bar-link" style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/HotelAudit">Аудит Отеля</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-bar-link" style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/CampAudit">Аудит Лагеря</NavLink>
                        </li>
                    </ul>
                </div>
                <img className="avatar-img" src="./AuditorAvatar.png"></img>
            </div>
            <Outlet/>
        </>
    );
}
