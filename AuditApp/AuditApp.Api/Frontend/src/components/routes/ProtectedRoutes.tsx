import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes(props : any) {

  const  useAuth=()=>{
    //  В данном случаем запрос на сервер и если норм, то возвращем true значение
    const user =  localStorage.getItem("user")
    if (user){
      return true
    } else {
      return false
    }
  }
  const auth = useAuth()

  return auth?<Outlet/>:  <Navigate to="login"/>
  
}
