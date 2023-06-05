import SwitcherList from "./switcher-list/switcher-list";
import "./side-bar.css";

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
        <div className="side-bar">    
            <p className="side-bar-p">Аудит сайта</p> 
            <hr></hr>       
            <SwitcherList mainSwitches={props.mainSwitches} subSwitches={props.subSwitches}/>
        </div>  
    );
}