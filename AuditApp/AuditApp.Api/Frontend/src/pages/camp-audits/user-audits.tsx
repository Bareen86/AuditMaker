import React, { useEffect, useState } from 'react'
import { IUserAuditToGet, IUserCampAudits, TextBlock } from '../../types/IAudits';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Table from '../../components/table/table';

export default function CampAudits() {

  const [campAudits, setCampAudits] = useState<IUserCampAudits[]>([]);

  const user = JSON.parse(localStorage.getItem("user") || "");

  const fetchDefault = async (id : Number) => {
    const result : IUserCampAudits[] = (await axios.get("/api/audits/user/" + user.id + "/camps")).data;
    setCampAudits(result)
  }

  useEffect(() =>{
    fetchDefault(user.id);
    console.log(campAudits);
  }, [])

  return (
    <div>
      <Table data={campAudits} itemsPerPage={5}/>
    </div>
    
  )

}
