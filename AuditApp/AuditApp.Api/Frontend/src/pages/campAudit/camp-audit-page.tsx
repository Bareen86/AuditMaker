import { useEffect, useRef, useState } from "react";
import TextRedactor from "../../components/text-redactor/text-redactor";
import "./camp-audit-page.css";
import CampSideBar from "./campSideBar/camp-side-bar";
import EditorJS from "@editorjs/editorjs";

type Props = {};

export default function CampAuditPage({}: Props) {

    const EditorRef = useRef<EditorJS>(null);

    return (
        <>
            <div className="content-wrapper">
                <CampSideBar editorRef={EditorRef} name="Аудит лагеря"/>
                <TextRedactor editorRef={EditorRef} />
            </div>
        </>
    );
}
