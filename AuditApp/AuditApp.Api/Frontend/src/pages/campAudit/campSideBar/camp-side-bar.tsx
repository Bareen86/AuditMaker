import SwitcherGroupList from "./camp-switcher-list";
import "./camp-side-bar.css";

interface SwitchesProps {
    name: string;
}

export default function CampSideBar(props: SwitchesProps) { 

    return (
        <div className="side-bar">    
            <p className="side-bar-p">{props.name}</p> 
            <hr></hr>       
            <SwitcherGroupList/>
        </div>  
    );
}