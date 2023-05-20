import React, { useRef, useState } from "react";
import ReactQuill, {Quill} from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextRedactor.css";
import { saveAs } from 'file-saver';
import { pdfExporter } from 'quill-to-pdf';

function TextRedactor() {
    const [content, setContent] = useState('');
    const quillRef = useRef<ReactQuill>(null);

    

    const exportAsPDF = async () => {
      const data:any = quillRef.current?.editor?.getContents(); // gets the Quill delta
      const pdfAsBlob = await pdfExporter.generatePdf(data); // converts to PDF
      saveAs(pdfAsBlob, "Audit.pdf"); // downloads from the browser
    };

    return (
        <div className="textRedactor">
            <CustomToolbar />
            <ReactQuill
                placeholder="Введите текст."
                ref={quillRef}
                value={content}
                onChange={setContent}
                modules={TextRedactor.modules}
                formats={TextRedactor.formats}
            />
            <button className="savePDF" onClick={exportAsPDF}>Сохранить в PDF</button>
        </div>
    );
}

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier new</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-header">
            <option value="1" selected></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option selected></option>
        </select>
    <select className="ql-size">
      <option value="extra-small" selected>13</option>
      <option value="small">14</option>
      <option value="medium" selected>
        18
      </option>
      <option value="large">20</option>
    </select>
    <select className="ql-align" />
    <button className="ql-image"></button>
  </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
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

TextRedactor.modules = {
  toolbar: {
    container: "#toolbar",
  }
};

TextRedactor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    'align'
];


export default TextRedactor;



