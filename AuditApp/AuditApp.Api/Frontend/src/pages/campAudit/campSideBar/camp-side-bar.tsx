import SwitcherGroupList from "./camp-switcher-list";
import "./camp-side-bar.css";
import EditorJS from "@editorjs/editorjs";

interface SwitchesProps {
    name: string;
    editorRef : React.MutableRefObject<EditorJS | undefined>
}

export default function CampSideBar({editorRef, name}: SwitchesProps) { 
    
    return (
        <div className="side-bar">    
            <p className="side-bar-p">{name}</p> 
            <hr></hr>       
            <SwitcherGroupList editorRef={editorRef}/>
        </div>  
    );
}