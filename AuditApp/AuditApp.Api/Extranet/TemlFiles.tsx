// export default function SwitcherGroupList(props: SwitchesProps) {

//     return (
//         <div className="switcher-list">
//             {props.mainSwitches.map((obj) => {
//                 const SubArray = AssignSubSwitcherToMain(obj)
//                 return (<MainSwitcher mainSwitcher={obj}  subSwitches={SubArray} key={obj.id}    />) 
//             })}     
//         </div>
//     );
// }

// export default function MainSwitcher(props: SwitchesProps) {

//     return (
//         <div className="main-item-wrap">
//             <p>{props.mainSwitcher.title}</p>
//             <div className="sub-item">
//                 {props.subSwitches.map((sub) => {
//                     return <SubSwitcher  key={sub.id} subSwitcherData={sub} />;
//                 })}
//             </div>
//         </div>
//     );
// }

// export default function SubSwitcher(props: SwitchesProps) {

//     return (
//       <div className='sub-items'>
//         <Switch defaultChecked={props.subSwitcherData.isActive} />
//         <p>{props.subSwitcherData.title}</p>
//       </div>
//     )
//   }

