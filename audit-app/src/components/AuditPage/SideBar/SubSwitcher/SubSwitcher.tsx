import React from 'react'
import Switch from "@mui/material/Switch";
import "./SubSwitcher.css";

interface SwitchesProps {
  subArray: Data
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
      <Switch defaultChecked={props.subArray.isActive} />
      <p>{props.subArray.title}</p>
    </div>
  )
}