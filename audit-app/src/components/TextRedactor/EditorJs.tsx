import React, { useEffect, useRef } from 'react'
import EditorJS from "@editorjs/editorjs"
//@ts-ignore 
import Header from '@editorjs/header';
//@ts-ignore
import ImageTool from '@editorjs/image';
//@ts-ignore
import List from '@editorjs/list'; 
const FontSize = require('editorjs-inline-font-size-tool');
const FontFamily = require('editorjs-inline-font-family-tool');

export default function EditorJs() {

  const ejInstance = useRef<EditorJS>();

    const initEditor = () => {
        const editor = new EditorJS({
           holder: 'editorjs',
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
                  endpoints: {
                    byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                    byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                  }
                }
              }
          },
         });
       };
    
       useEffect(() => {
        initEditor();
        
      }, []);


  return (
    <div id="editorjs"></div>
  )
}