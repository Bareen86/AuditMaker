import "./side-bar.css";
import CiteSwitcherGroupList from "./switcher-list";

interface SwitchesProps {
    name: string;
}

export default function CiteSideBar(props: SwitchesProps) { 

    return (
        <div className="side-bar">    
            <p className="side-bar-p">{props.name}</p> 
            <hr></hr>       
            <CiteSwitcherGroupList/>
        </div>  
    );
}