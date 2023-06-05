import "./main-switcher.css";
import SubSwitcher from "../sub-switcher/sub-switcher";

interface SwitchesProps {
    mainSwitcher: mainSwitcherData;
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

export default function MainSwitcher(props: SwitchesProps) {

    return (
        <div className="main-item-wrap">
            <p>{props.mainSwitcher.title}</p>
            <div className="sub-item">
                {props.subSwitches.map((sub) => {
                    return <SubSwitcher  key={sub.id} subSwitcherData={sub} />;
                })}
            </div>
        </div>
    );
}

    // const [activeSwitch, setActiveSwitch] = useState<boolean>(!props.data.isActive);