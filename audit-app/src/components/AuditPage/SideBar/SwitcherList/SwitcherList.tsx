import React, { useEffect, useState } from "react";
import "./SwitherList.css";
import MainSwitcher from "../MainSwitcher/MainSwitcher";

interface SwitchesProps {
    data: Data[];
}

interface Data {
    id: number;
    title: string;
    isActive: boolean;
    description?:string;
    isSubSwitcher?:boolean;
    subSwitcherId?: number;
}

export default function SwitcherList({ data }: SwitchesProps) {

    function AssignSubSwitcherToMain(item: Data) {
         return data.filter((obj) => {
         return item.id === obj.subSwitcherId
   })}

    return (
        <div className="SwitcherList">
            {data.map((obj) => {
                const SubArray = AssignSubSwitcherToMain(obj)
               return ( !obj.isSubSwitcher && <MainSwitcher data={obj}  subArray={SubArray} key={obj.id}    />) 
            })}
        </div>
    );
}