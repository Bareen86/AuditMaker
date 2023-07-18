import { useRef } from "react";
import "./camp-audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import CampAuditEditor from "./camp-switcher-list";

interface props {
    title: string;
}

export default function CampAuditRedactor({title} : props) {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <CampAuditEditor title={title} editorRef={EditorRef} />
                <Outlet />
            </div>
        </>
    );
}