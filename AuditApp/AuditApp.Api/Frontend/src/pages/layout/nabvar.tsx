import { NavLink, Outlet } from "react-router-dom";
import "./layout.css"

export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="nav-list">
                    <ul>
                        <li className="first-li">
                            <NavLink className="nav-bar-link" reloadDocument={true} to="hotelaudits" style={({isActive}) => ({color : isActive ? "#296DCB" : ""})}>Аудиты Отеля</NavLink>
                        </li>
                        <li>
                            
                            <NavLink className="nav-bar-link" reloadDocument={true} to="campaudits" style={({isActive}) => ({color : isActive ? "#296DCB" : ""})}>Аудиты Лагеря</NavLink>
                        </li>
                    </ul>
                </div>
                <img className="avatar-img" src="./AuditorAvatar.png"></img>
            </div>
            <Outlet/>
        </>
    );
}
//style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}}
//style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}}