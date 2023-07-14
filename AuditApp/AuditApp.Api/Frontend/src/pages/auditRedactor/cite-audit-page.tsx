import { useRef } from "react";
import "./cite-audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import CiteSwitcherGroupList from "./cite-switcher-list";

interface props {
    title: string;
}

export default function AuditReactor({title} : props) {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <CiteSwitcherGroupList title={title} editorRef={EditorRef} />
                <Outlet />
            </div>
        </>
    );
}