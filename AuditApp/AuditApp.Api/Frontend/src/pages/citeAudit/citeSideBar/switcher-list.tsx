import "./switcher-list.css";
import { Switch } from "@mui/material";
import React, { useEffect, useRef } from 'react'
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { fetchTemplate } from "../../../store/action-creators/template";
import { useActions } from "../../../hooks/use-action";
import EditorJS from "@editorjs/editorjs";

interface SwithcherProps {
    editorRef : React.MutableRefObject<EditorJS | undefined>
}

export default function CiteSwitcherGroupList({editorRef}: SwithcherProps) {
    
    const { template } = useTypedSelector(state => state.template)

    const  {fetchTemplate} = useActions();
    function AddTextToEditor () {
        console.log(editorRef.current);
        editorRef.current?.blocks.insert("paragraph", {text : "egor"})
    }
    
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
            <button onClick={AddTextToEditor}>Click me plssssssssssssssssss</button>   
        </div>
        
    );
}