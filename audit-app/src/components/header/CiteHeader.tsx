import React from "react";
import "./header.css";

type Props = {};

export default function CiteHeader({}: Props) {
    return (
        <div className="header">
            <div className="NavList">
                <ul>
                    <li className="SiteAudit">Аудит отеля</li>
                    <li className="LagerAudit">Аудит лагеря</li>
                </ul>
            </div>
            <img className="AvatarImg" src="./AuditorAvatar.png"></img>
        </div>
    );
}