import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicRoutes(props : any) {

  const  useAuth=()=>{
    const user =  localStorage.getItem("user")
    if (user){
      return true
    } else {
      return false
    }
    //  В данном случаем запрос на сервер и если норм, то возвращем true значение
  }
  const auth = useAuth()

  return auth? <Navigate to="/HotelAudits"/>:<Outlet/>
  
}