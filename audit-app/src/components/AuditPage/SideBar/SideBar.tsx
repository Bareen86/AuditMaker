import React, { useEffect, useState } from "react";
import SwitcherList from "./SwitcherList/SwitcherList";
import "./SideBar.css";

interface SwitchesProps {
    mainSwitches: mainSwitcherData[];
    subSwitches: subSwitcherData[];
}

interface mainSwitcherData {
    id: number;
    title: string;
}

interface subSwitcherData {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
    mainSwitcherId: number;
}

export default function SideBar(props: SwitchesProps) { 

    return (
        <div className="sideBar">    
            <p className="SideBar__p">Аудит сайта</p> 
            <hr></hr>       
            <SwitcherList mainSwitches={props.mainSwitches} subSwitches={props.subSwitches}/>
        </div>  
    );
}