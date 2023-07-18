import React, { useEffect, useState } from 'react'
import { IUserAuditToGet, IUserCampAudits, TextBlock } from '../../types/IAudits';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import CustomPaginationActionsTable from '../../components/materialTable/material-table';

export default function CampAudits() {

  const [campAudits, setCampAudits] = useState<IUserCampAudits[]>([]);
  const user = JSON.parse(localStorage.getItem("user") || "");

  const fetchUserCampAudits = async (id : Number) => {
    const result : IUserCampAudits[] = (await axios.get("/api/audits/user/" + user.id + "/camps")).data;
    setCampAudits(result)
  }

  useEffect(() =>{
    fetchUserCampAudits(user.id);
  }, [])

  return (
    <>
    <CustomPaginationActionsTable rows={campAudits}/>
    </>
    
  )

}
