import SwitcherGroupList from "./switcher-list";
import "./side-bar.css";
import { TemplateItemGroup } from "../../models/template-model";

interface SwitchesProps {
    TemplateItemGroup: TemplateItemGroup[];
    name: string;
}

export default function SideBar(props: SwitchesProps) { 

    return (
        <div className="side-bar">    
            <p className="side-bar-p">{props.name}</p> 
            <hr></hr>       
            <SwitcherGroupList TemplateItemGroup={props.TemplateItemGroup}/>
        </div>  
    );
}