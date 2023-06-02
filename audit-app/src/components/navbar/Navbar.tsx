import React from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <nav>
            <NavLink className="nav-bar-link" style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/CiteAudit">Аудит Сайта</NavLink>
            <NavLink className="nav-bar-link" style={({isActive}) => {return {color: isActive? "#296DCB" :  ""}}} to="/CampAudit">Аудит Лагеря</NavLink>
        </nav>
    );
}