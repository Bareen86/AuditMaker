import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import SwitcherList from "./components/AuditPage/SideBar/SwitcherList/SwitcherList";
import {useEffect, useState} from 'react';
import AuditPage from "./components/AuditPage/AuditPage";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <AuditPage/>
            </div>
        </div>
    );
}

export default App;
