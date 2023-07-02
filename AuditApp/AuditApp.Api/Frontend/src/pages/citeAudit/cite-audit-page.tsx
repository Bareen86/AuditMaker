import { useRef } from "react";
import "./cite-audit-page.css";
import CiteSwitcherGroupList from "./citeSideBar/cite-switcher-list";
import EditorJS from "@editorjs/editorjs";

export default function CiteAuditPage() {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <div className="content-wrapper">
            <CiteSwitcherGroupList editorRef={EditorRef} />
        </div>
    );
}