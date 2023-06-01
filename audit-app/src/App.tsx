import React from "react";
import "./App.css";
import CiteAuditPage from "./pages/citeAudit/CiteAuditPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/layout/Layout";
import CampAuditPage from "./pages/campAudit/CampAuditPage";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="CiteAudit" element={<CiteAuditPage/>}/>
                        <Route path="CampAudit" element={<CampAuditPage/>}/>
                        <Route path="*" element={<h1>Resource not found</h1>}/>
                    </Route>    
                </Routes>
            </BrowserRouter>
            </div>
            
        </div>
    );
}

export default App;


{/* <div className="wrapper">
                <AuditPage/>
            </div> */}