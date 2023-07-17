import React, { useEffect, useState } from 'react'
import { IAudit, IUserCampAudits, TextBlock } from '../../types/IAudits';
import axios from 'axios';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { DateToStringFormat } from '../../helpers/data-to-string';
import Table from '../../components/table/table';

export default function HotelAudits() {

  const navigate = useNavigate()

  function  handleLogout(){
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <>
    <h1>Camp  Audits page</h1>
    <button  onClick={handleLogout}>Logout button</button>
    </>
  )
}


// export default function HotelAudits() {

//     const [event, setEvent] = useState<IUserCampAudits[]>([])
  
//     const user = JSON.parse(localStorage.getItem("user") || "");
  
//     const fetchDefault = async () => {
//       localStorage.getItem("user")
//       const result : IUserCampAudits[] = (await axios.get("/api/audits/user/" + user.id + "/camps")).data;
//       setEvent(result)
//       console.log(result)
//     }
  
//     return (
//       <>
//       <h1>Camp  Audits page</h1>
//       <Table data={user} itemsPerPage={10}></Table>
//       </>
      
//     )
//   }