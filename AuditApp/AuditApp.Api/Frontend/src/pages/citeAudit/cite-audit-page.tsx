import { useEffect, useRef, useState } from "react";
import TextRedactor from "../../components/text-redactor/text-redactor";
import "./cite-audit-page.css";
import { TemplateItemGroup } from "../../types/template";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import CiteSideBar from "./citeSideBar/side-bar";
import EditorJS from "@editorjs/editorjs";


type Props = {};

export default function CiteAuditPage({}: Props) {
    
    const  EditorRef = useRef<EditorJS>();  

    return (
        <>
            <div className="content-wrapper">
                <CiteSideBar editorRef={EditorRef} name="Аудит сайта" />
                <TextRedactor editorRef={EditorRef} />
            </div>
        </>
    );
}
