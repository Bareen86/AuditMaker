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

interface RedactorText {
    editorRef : React.MutableRefObject<EditorJS | null>,
}

function TextRedactor({editorRef}: RedactorText) {
    

    return (
        <></>
    );
}
export default TextRedactor;
