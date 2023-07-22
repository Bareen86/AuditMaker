import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from "./pages/layout/nabvar";
import HotelAudits from "./pages/hotel-audits/user-audits";
import CampAudits from "./pages/camp-audits/camp-audits";
import LoginPage from "./pages/login/login-page";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
import CampAuditRedactor from "./components/auditRedactor/camp-redactor/camp-audit-page";
import HotelAuditRedactor from "./components/auditRedactor/hotel-redactor/hotel-editor-page";
import Redactor from "./components/auditRedactor/add-audit-redactor/audit-page";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<PublicRoutes/>}>
                        <Route index path="/login"  element={<LoginPage/>}/>
                    </Route>
                    <Route path="/" element={<ProtectedRoutes/>}>
                        <Route path="/" element={<Navbar/>}>
                            <Route path="/" element={<Navigate replace to="/hotelaudits"/>}/>
                            <Route path="/hotelaudits" element={<HotelAudits/>}/>
                            <Route path="/campaudits" element={<CampAudits/>}/>
                            <Route path="/campaudits/edit/:id" element={<CampAuditRedactor/>}/>
                            <Route path="/hotelaudits/edit/:id" element={<HotelAuditRedactor/>}/>
                            <Route path="/hotelaudits/add" element={<Redactor/>}/>
                            <Route path="/campaudits/add" element={<Redactor/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<h1>Такой страницы не существует</h1>}></Route>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
