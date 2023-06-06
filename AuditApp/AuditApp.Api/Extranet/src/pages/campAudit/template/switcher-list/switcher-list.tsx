import "./switcher-list.css";
import MainSwitcher from "../main-switcher/main-switcher";

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
        <div className="switcher-list">
            {props.mainSwitches.map((obj) => {
                const SubArray = AssignSubSwitcherToMain(obj)
                return (<MainSwitcher mainSwitcher={obj}  subSwitches={SubArray} key={obj.id}    />) 
            })}     
        </div>
    );
}