import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import "./mainSwitcher.css";
import SubSwitcher from "../SubSwitcher/SubSwitcher";

interface SwitchesProps {
    mainSwitcher: mainSwitcherData;
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

export default function MainSwitcher(props: SwitchesProps) {

    return (
        <div className="mainItemWrap">
            <p>{props.mainSwitcher.title}</p>
            <div className="subItem">
                {props.subSwitches.map((sub) => {
                    return <SubSwitcher  key={sub.id} subSwitcherData={sub} />;
                })}
            </div>
        </div>
    );
}

    // const [activeSwitch, setActiveSwitch] = useState<boolean>(!props.data.isActive);