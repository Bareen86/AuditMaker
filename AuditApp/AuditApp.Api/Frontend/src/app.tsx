import "./app.css";
import CiteAuditPage from "./pages/citeAudit/cite-audit-page";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CampAuditPage from "./pages/campAudit/camp-audit-page";
import Layout from "./pages/layout/layout";
import UserList from "./components/user-list";
import TodoList from "./components/todo-list";
import TestPage from "./pages/testPage/test-page";


function App() {

    return (
        <div className="App">
            <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<CiteAuditPage/>}/>
                        <Route path="HotelAudit" element={<CiteAuditPage/>}/>
                        <Route path="CampAudit" element={<CampAuditPage/>}/>
                        <Route path="*" element={<h1>Resource not found</h1>}/>
                        <Route path="user" element={<UserList/>}/>
                        <Route path="todos" element={<TodoList/>}/>
                        <Route path="test"  element={<TestPage/>}/>
                    </Route>    
                </Routes>
            </BrowserRouter>
            </div>
        </div>
    );
}

export default App;