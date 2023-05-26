import React, { useEffect, useRef, useState } from "react";
import "./textRedactor.css";
import 'react-quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import { useActionData } from "react-router-dom";
import EditorJs from "./EditorJs";


function TextRedactor() {
  const { quill, quillRef } = useQuill();
 
  React.useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML);
        console.log(quill.getContents());
      });
    }
  }, [quill]);

  

    

    return (
        <>
            <EditorJs/>
            <div style={{ width: 500, height: 300 }}>
                <div ref={quillRef} />
            </div>
        </>
    );
}
export default TextRedactor;
