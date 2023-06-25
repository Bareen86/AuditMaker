import "./side-bar.css";
import CiteSwitcherGroupList from "./switcher-list";
import EditorJS from "@editorjs/editorjs";

interface SwitchesProps {
    name: string;
    editorRef : React.MutableRefObject<EditorJS | undefined>
}

export default function CiteSideBar({editorRef, name}: SwitchesProps) { 

    return (
        <div className="side-bar">    
            <p className="side-bar-p">{name}</p> 
            <hr></hr>       
            <CiteSwitcherGroupList editorRef={editorRef}/>
        </div>  
    );
}