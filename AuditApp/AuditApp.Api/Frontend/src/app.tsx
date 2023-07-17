import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TodoList from "./components/todo-list";
import Navbar from "./pages/layout/nabvar";
import AuditReactor from "./pages/auditRedactor/cite-audit-page";
import HotelAudits from "./pages/hotel-audits/user-audits";
import CampAudits from "./pages/camp-audits/user-audits";
import LoginPage from "./pages/login/login-page";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";

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
                        </Route>
                    </Route>
                    <Route path="*" element={<h1>Такой страницы не существует</h1>}></Route>
                    <Route path="/asd" element={<AuditReactor title="Аудит отеля"/>}></Route>
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
