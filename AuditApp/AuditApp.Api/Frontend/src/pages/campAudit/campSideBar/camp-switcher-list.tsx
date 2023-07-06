import "./camp-switcher-list.css";
import { Switch } from "@mui/material"; 
import React, { useEffect } from 'react'
import { fetchTemplate } from "../../../store/action-creators/template";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-action";
import EditorJS from "@editorjs/editorjs";

interface SwithcherProps {
    editorRef : React.MutableRefObject<EditorJS | null>
}

export default function CampSwitcherGroupList({editorRef} : SwithcherProps) {

    const { template } = useTypedSelector(state => state.template)
    
    useEffect(() => {
        fetchTemplate();
    }, [])

    return (
        <div className="switcher-list">
            {template.map((temlpateItemGroup) =>
                <div className="" key={temlpateItemGroup.id}>
                    <p>{temlpateItemGroup.title}</p>
                    {
                        temlpateItemGroup.TemplateGroup.map((templateItem) =>
                        <div className="template-item" key={templateItem.id}>
                            <Switch defaultChecked={templateItem.isActive} />
                            <p>{templateItem.title}</p>  
                        </div> 
                    )}
                </div>
            )}   
        </div>
    );
}