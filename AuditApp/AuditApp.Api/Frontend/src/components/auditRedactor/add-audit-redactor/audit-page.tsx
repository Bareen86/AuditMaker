import { useRef } from "react";
import "../audit-page.css";
import EditorJS from "@editorjs/editorjs";
import { Outlet } from "react-router-dom";
import BasicRedactor from "./audit-editor";

export default function Redactor() {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <BasicRedactor editorRef={EditorRef} />
                <Outlet />
            </div>
        </>
    );
}