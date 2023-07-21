import { useRef } from "react";
import "../audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import AuditEditor from "../add-audit-redactor/audit-editor";

export default function CampAuditRedactor() {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <AuditEditor editorRef={EditorRef} />
                <Outlet />
            </div>
        </>
    );
}