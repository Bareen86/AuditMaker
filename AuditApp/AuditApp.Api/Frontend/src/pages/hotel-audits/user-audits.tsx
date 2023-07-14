import React, { useState } from 'react'
import { AuditService } from '../../services/AuditService'
import { IAudit, TextBlock } from '../../types/IAudits';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

export default function HotelAudits() {

  const [event, setEvent] = useState<IAudit[]>([{
    id : 2,
    location : "russin",
    title : "egor",
    textBlock : {
      data : []
    }
  }]);

  const fetchDefault = async (id : Number) => {
    const result = (await axios.get("/api/audits/users/" + id)).data;
    setEvent(result)
    console.log(await result)
    console.log(event)
  }

  console.log("userpage")

  return (
    <div>
      <button onClick={() => fetchDefault(2)}>Click on me</button>
      <Outlet />
    </div>
    
  )
}
