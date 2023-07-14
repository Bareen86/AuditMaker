import "./app.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from "./components/todo-list";
import Navbar from "./pages/layout/nabvar";
import AuditReactor from "./pages/auditRedactor/cite-audit-page";
import HotelAudits from "./pages/hotel-audits/user-audits";
import CampAudits from "./pages/camp-audits/user-audits";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route index element={<HotelAudits/>}/>
                        <Route path="HotelAudits" element={<HotelAudits/>}/>
                        <Route path="CampAudits" element={<CampAudits/>}/>
                        <Route path="HotelRedactor" element={<AuditReactor title="Аудит Отеля"/>}/>
                        <Route path="CampRedactor" element={<AuditReactor title="Аудит Лашеря"/>}/>
                        <Route path="*" element={<h1>Resource not found</h1>}/>
                        <Route path="todos" element={<TodoList/>}/>
                    </Route>    
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;