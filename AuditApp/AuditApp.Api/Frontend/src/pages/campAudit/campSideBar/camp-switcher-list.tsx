import "./camp-switcher-list.css";
import { Switch } from "@mui/material"; 
import React, { useEffect } from 'react'
import { fetchTemplate } from "../../../store/action-creators/template";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { fetchUsers } from "../../../store/action-creators/user";
import { useActions } from "../../../hooks/use-action";
import EditorJS from "@editorjs/editorjs";

interface SwithcherProps {
    editorRef : React.MutableRefObject<EditorJS | undefined>
}

export default function CampSwitcherGroupList({editorRef} : SwithcherProps) {

    const { template } = useTypedSelector(state => state.template)
    const  {fetchTemplate} = useActions()
    
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