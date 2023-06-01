import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css"

export default function Layout() {
    return (
        <>
            <div className="header">
                <div className="NavList">
                    <ul>
                        <li className="first_li">
                            <NavLink className="nav-bar-link" style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/CiteAudit">Аудит Сайта</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-bar-link" style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/CampAudit">Аудит Лагеря</NavLink>
                        </li>
                    </ul>
                </div>
                <img className="AvatarImg" src="./AuditorAvatar.png"></img>
            </div>
            <Outlet/>
        </>
    );
}
