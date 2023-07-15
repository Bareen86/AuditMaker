import React, { useEffect, useState } from 'react'
import { IAudit, IUserCampAudits, TextBlock } from '../../types/IAudits';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { DateToStringFormat } from '../../helpers/data-to-string';

export default function HotelAudits() {

  const [event, setEvent] = useState<IUserCampAudits[]>([])

  const fetchDefault = async (id : Number) => {
    const result : IUserCampAudits[] = (await axios.get("/api/audits/user/" + id + "/camps")).data;
    setEvent(result)
    console.log(result)
  }

  return (

    <div>
      <button onClick={() => fetchDefault(1)}>Click on me</button>
      {
        event.map((audit) => {
          return (
            <div key={audit.id}>
              <p>{audit.title}</p>
              <p>{audit.location}</p>
              <p>{audit.url}</p>
              <p>{DateToStringFormat(audit.modifiedOn)}</p>
            </div>
          )
        })
      }
      <Outlet />
    </div>
    
  )
}
