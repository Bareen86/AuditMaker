import React from 'react'
import Switch from "@mui/material/Switch";
import "./subSwitcher.css";

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
    <div className='subItems'>
      <Switch defaultChecked={props.subSwitcherData.isActive} />
      <p>{props.subSwitcherData.title}</p>
    </div>
  )
}