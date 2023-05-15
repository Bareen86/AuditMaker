import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import "./MainSwitcher.css";
import SubSwitcher from "../SubSwitcher/SubSwitcher";

interface SwitchesProps {
    data: Data;
    subArray: Data[];
}

interface Data {
    id: number;
    title: string;
    isActive: boolean;
    description?: string;
   isSubSwitcher?: boolean;
    subSwitcherId?: number;
}

export default function MainSwitcher(props: SwitchesProps) {
    const [switch1, setSwitch1] = useState<boolean>(!props.data.isActive);

    function handleSwitch() {
        console.log(switch1);
        setSwitch1(!switch1);
    }

    return (
        <div className="mainItemWrap">
           <div className="mainItem">
                <Switch
                    onChange={handleSwitch}
                    defaultChecked={props.data.isActive}
                />
                <p>{props.data.title}</p>
           </div>
            <div className="subItem">
                {props.subArray.map((sub) => {
                    return <SubSwitcher subArray={sub} />;
                })}
            </div>
        </div>
    );
}