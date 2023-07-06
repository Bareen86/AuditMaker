import "./app.css";
import CiteAuditPage from "./pages/citeAudit/cite-audit-page";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CampAuditPage from "./pages/campAudit/camp-audit-page";
import TodoList from "./components/todo-list";
import Navbar from "./pages/layout/nabvar";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route index element={<CiteAuditPage/>}/>
                        <Route path="HotelAudit" element={<CiteAuditPage/>}/>
                        <Route path="CampAudit" element={<CampAuditPage/>}/>
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