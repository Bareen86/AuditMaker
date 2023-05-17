import React, { useEffect, useState } from "react";
import "./SwitherList.css";
import MainSwitcher from "../MainSwitcher/MainSwitcher";

interface SwitchesProps {
    mainSwitches: mainSwitcherData[];
    subSwitches: subSwitcherData[];
}

interface mainSwitcherData {
    id: number;
    title: string;
}

interface subSwitcherData {
    id: number;
    title: string;
    description: string;
    isActive: boolean;
    mainSwitcherId: number;
}

export default function SwitcherList(props: SwitchesProps) {

    function AssignSubSwitcherToMain(item: mainSwitcherData){
        return props.subSwitches.filter((obj) => {
            return item.id === obj.mainSwitcherId
        })
    }

    return (
        <div className="SwitcherList">
            {props.mainSwitches.map((obj) => {
                const SubArray = AssignSubSwitcherToMain(obj)
                return (<MainSwitcher mainSwitcher={obj}  subSwitches={SubArray} key={obj.id}    />) 
            })}     
        </div>
    );
}

//     function AssignSubSwitcherToMain(item: Data) {
//          return data.filter((obj) => {
//          return item.id === obj.subSwitcherId
//    })}


//    {data.map((obj) => {
//     const SubArray = AssignSubSwitcherToMain(obj)
//    return ( !obj.isSubSwitcher && <MainSwitcher data={obj}  subArray={SubArray} key={obj.id}    />) 
//     })}