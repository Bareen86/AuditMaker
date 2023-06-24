import "./switcher-list.css";
import { Switch } from "@mui/material";
import React, { useEffect } from 'react'
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { fetchTemplate } from "../../../store/action-creators/template";
import { useActions } from "../../../hooks/use-action";

export default function CiteSwitcherGroupList() {
    
    const { template } = useTypedSelector(state => state.template)
    const {users} = useTypedSelector(state => state.user)
    const  {fetchTemplate} = useActions();
    
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