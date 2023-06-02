import React, { useEffect, useRef, useState } from "react";
import "./textRedactor.css";
import { useActionData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import EditorJS from "@editorjs/editorjs";
import Button from '@mui/material/Button';
//@ts-ignore
import Header from "@editorjs/header";
//@ts-ignore
import ImageTool from "@editorjs/image";
//@ts-ignore
import List from "@editorjs/list";
const FontSize = require("editorjs-inline-font-size-tool");
const FontFamily = require("editorjs-inline-font-family-tool");

function TextRedactor() {
    const ejInstance = useRef<EditorJS>();
    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            onChange: async () => {
                let content = await editor.saver.save();

                console.log(content);
            },
            tools: {
                header: Header,
                fontSize: FontSize,
                fontFamily: FontFamily,
                image: {
                    class: ImageTool,
                    config: {
                        byUrl: 'http://localhost:3000/', // Your endpoint that provides uploading by Url
                    }
                }
            },
        });
    };

    useEffect(() => {
        initEditor();
    }, []);

    const componentRef = useRef(null);
    
    const handlePdfPrint = useReactToPrint({
            content: () => componentRef.current,
            documentTitle: "pdfTitle",
        });

    return (
        <div className="textRedactor">
            <div className="editorWrapper">
                <div ref={componentRef} id="editorjs"></div>
            </div>
            <div className="buttonsBlock">
                <div className="backToAudits">
                    <Button variant="outlined">Вернуться к аудитам</Button> 
                </div>  
                <div className="saveButtonsBlock">
                    <Button className="savePdfButton" onClick={() => {
                        ejInstance.current?.toolbar.close()
                        handlePdfPrint();
                    }} variant="contained">
                        Сохранить в PDF
                    </Button>
                    <Button variant="contained">
                        Сохранить аудит
                    </Button>
                    
                </div>
            </div>
        </div>
    );
}
export default TextRedactor;
