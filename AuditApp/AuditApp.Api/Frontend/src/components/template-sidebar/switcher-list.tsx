import "./switcher-list.css";
import { TemplateItemGroup } from "../../models/template-model";
import { Switch } from "@mui/material";

interface SwitchesProps {
    TemplateItemGroup: TemplateItemGroup[];
}

export default function SwitcherGroupList(props: SwitchesProps) {

    return (
        <div className="switcher-list">
            {props.TemplateItemGroup.map((temlpateItemGroup) =>
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