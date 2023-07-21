import { useRef } from "react";
import "../audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import HotelAuditEditor from "./hotel-editor";

export default function HotelAuditRedactor() {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <HotelAuditEditor editorRef={EditorRef} />
                <Outlet />
            </div>
        </>
    );
}