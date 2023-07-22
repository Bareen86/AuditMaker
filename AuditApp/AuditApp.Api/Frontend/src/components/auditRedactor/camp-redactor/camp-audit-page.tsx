import { useRef } from "react";
import "../audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import CampAuditEditor from "./camp-editor";

export default function CampAuditRedactor() {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <CampAuditEditor editorRef={EditorRef} />
                <Outlet />
            </div>
        </>
    );
}