import React, { useState } from "react";
import ReactQuill, {Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextRedactor.css";

function TextRedactor() {
    const [value, setValue] = useState("");

    return <ReactQuill
    value={value}
    placeholder="Введите текст."
    modules={TextRedactor.modules}
    formats={TextRedactor.formats}
    />;
}

const fontStyles = {
  roboto: {
    fontFamily: 'Roboto, sans-serif',
  },
  arial: {
    fontFamily: 'Arial, sans-serif',
  },
};

TextRedactor.modules = {
  toolbar: [
    [{header: [1,2,3,4,5,6], font: []}],
    [{ font: [] }],
    [{size: ["medium", "small", "large"]}],
    ["bold", "italic", "underline", "strike", "blockquote",],
    [{list: "ordered"}, {list: "bullet"}],
    ["link", "image"],
    ["clean"],
    ["code-block"]
  ]
};

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);




TextRedactor.formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "code-block",
  "font",
  ...Object.keys(fontStyles),
];





export default TextRedactor;
