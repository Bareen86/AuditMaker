import Switch from "@mui/material/Switch";
import "./sub-switcher.css";

interface SwitchesProps {
  subSwitcherData: Data;
}

interface Data {
  id: number;
    title: string;
    isActive: boolean;
    description?:string;
    isSubSwitcher?:boolean;
   subSwitcherId?: number;
}

export default function SubSwitcher(props: SwitchesProps) {

  return (
    <div className='sub-items'>
      <Switch defaultChecked={props.subSwitcherData.isActive} />
      <p>{props.subSwitcherData.title}</p>
    </div>
  )
}