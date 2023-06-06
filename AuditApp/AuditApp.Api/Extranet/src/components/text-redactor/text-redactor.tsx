import React, { useEffect, useRef} from "react";
import "./text-redactor.css";
import { useReactToPrint } from "react-to-print";
import EditorJS from "@editorjs/editorjs";
import Button from '@mui/material/Button';
import axios from "axios";
const Header = require('@editorjs/header');
const FontSize = require("editorjs-inline-font-size-tool");
const FontFamily = require("editorjs-inline-font-family-tool");
const ImageTool = require('@editorjs/image')

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
                    config  :{
                        uploader : {
                            async uploadByFile(file:any){
                                const formData = new FormData();
                                formData.append("file", file);
                                const response = await axios.post(
                                    'http://localhost:5175/api/Image/UploadImage',
                                    formData,
                                    {
                                        headers: {
                                            "Content-Type": "multipart/form-data",
                                        },
                                        withCredentials: false,
                                    }
                                );

                                if(response.data.success === 1){
                                    return response.data;
                                }
                            },
                            // async uploadByUrl(url:any){
                            //     const response = await axios.post(
                            //         'http://localhost:5001/api/image/createByUrl',
                            //         {
                            //             url,
                            //         }
                            //     );

                            //     if(response.data.success === 1){
                            //         return response.data;
                            //     }
                            // },
                        }
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
