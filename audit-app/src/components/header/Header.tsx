import React from "react";
import "./Header.css";

type Props = {};

export default function Header({}: Props) {
    return (
        <div className="header">
            <div className="NavList">
                <ul>
                    <li className="SiteAudit">Аудит сайта</li>
                    <li className="LagerAudit">Аудит лагеря</li>
                </ul>
            </div>
            <img className="AvatarImg" src="./AuditorAvatar.png"></img>
        </div>
    );
}