import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import SideBar from './SideBar/SideBar';
import TextRedactor from '../TextRedactor/TextRedactor';
import './AuditPage.css'

type Props = {}

export default function AuditPage({}: Props) {

  return (
    <>
      <Header/>
      <div className='contentWrapper'>
        <SideBar/>
        <TextRedactor/>
      </div>
      
    </>
    
  )
}