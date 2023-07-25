import { useRef } from "react";
import "../audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import AuditEditor from "./audit-editor";

export default function AuditRedactor() {

    return (
        <>
            <div className="content-wrapper">
                <AuditEditor/>
                <Outlet />
            </div>
        </>
    );
}