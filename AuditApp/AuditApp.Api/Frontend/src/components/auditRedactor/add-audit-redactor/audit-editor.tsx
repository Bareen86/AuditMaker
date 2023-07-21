import "../redactor.css";
import { Button, Switch } from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { group } from "console";
import { isTemplateExpression } from "typescript";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-action";
import { TemplateItem, TemplateItemGroup } from "../../../types/template";
import { CampAuditData, IAudit } from "../../../types/IAudits";
const Header = require('@editorjs/header');
const FontSize = require("editorjs-inline-font-size-tool");
const FontFamily = require("editorjs-inline-font-family-tool");
const ImageTool = require('@editorjs/image')


interface CiteProps {
    editorRef : React.MutableRefObject<EditorJS | null>
}

enum ResponseStatus { Failure, Success };

export default function AuditEditor({editorRef} : CiteProps) {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user") || "");
    const auditData = JSON.parse(localStorage.getItem("auditData") || "");

    function initEditor(){
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                editorRef.current = editor;
            },
            autofocus: false,
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
                                    '/api/images/upload-image',
                                    formData,
                                    {
                                        headers: {
                                            "Content-Type": "multipart/form-data",
                                        },
                                        withCredentials: false,
                                    }
                                );
                                if(response.data.success === ResponseStatus.Success){
                                    return response.data;
                                }
                            }
                        }
                    }
                }
            },
        });
    }

    const { template } = useTypedSelector(state => state.template)

    const  { UpdateTemplateItemIsActiveField, ClearTemplate } = useActions();

    const componentRef = useRef(null);

    const handlePdfPrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "pdfTitle",
        // onAfterPrint:
    });

    function onInitAddTemplateToEditor() : void {

        const config : number = 1;
        const noIndex : undefined = undefined;
        const needToFocus : boolean = false;
        const needToReplace : boolean = false;
        template.map((templateGroup) =>
            templateGroup.TemplateGroup.map((item) => {
                if (item.isActive) {
                    editorRef.current?.blocks.insert("paragraph", {
                        text: item.description,
                    }, config, noIndex, needToFocus, needToReplace, item.id)
                }
            })
        );
    }

    function getCurrentBlockIndex(item: TemplateItem){
        const itemId = editorRef.current?.blocks.getById(item.id);
        //@ts-ignore
        return editorRef.current?.blocks.getBlockIndex(itemId?.id);
    }

    const backToAudits = () => {
        auditData.auditType === 0 ? navigate("/hotelaudits") : navigate("/campaudits");
    }

    const handleSaveAudit = async () => {
        const editorData = await editorRef?.current?.save();
        const auditEditorData = {
            blocks: editorData?.blocks
        };
        const result = {
            title : auditData.title,
            location : auditData.location,
            url : auditData.url,
            userId : user.id,
            auditType : auditData.auditType,
            data : auditEditorData,
        };
        const response = await axios.post("/api/audits", result );
        navigate(-1);
    }

    function findIndexWhenNextGroupActive (groupOrder: number, itemOrder: number, ifAnyCurrentItemsGroupActive : boolean) : number {
        let currentBlockIndex : number = 0;

        if (ifAnyCurrentItemsGroupActive) {
            //Расположение нашего итема среди других активных итемов в текущей группе
            const GroupActiveItemsArray : TemplateItem[] = template.filter((group) => group.order === groupOrder)[0].TemplateGroup.filter((templateItem) => templateItem.isActive);
            const moreOrderActiveItemInGroup : boolean = GroupActiveItemsArray.some(
                (templateItem) => templateItem.order > itemOrder
            );
            // присвоить более высокому активному итему
            if (moreOrderActiveItemInGroup) {
                // Получение первого активного итема
                const firstActiveItem : TemplateItem | undefined = GroupActiveItemsArray.find(
                    (templateItem) => templateItem.order > itemOrder
                );
                //@ts-ignore
                currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
            }
            // присвоить первое значение первого объекта из некст группы
            else {
                const nextFirstActiveTemplateItem : TemplateItemGroup | undefined = template.find((group) => group.TemplateGroup.some((item) => item.isActive === true) && group.order > groupOrder);
                const firstActiveItem : TemplateItem | undefined = nextFirstActiveTemplateItem?.TemplateGroup.find((item) => item.isActive);
                //@ts-ignore
                currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
            }
        }
        else{
            // присвоить первое значение первого объекта из некст группы
            // Поиск первой следующей группы с активными итемами и получением индекса первого активного итема
            const nextFirstActiveTemplateItem : TemplateItemGroup | undefined = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
            const firstActiveItem : TemplateItem | undefined = nextFirstActiveTemplateItem?.TemplateGroup.find(item => item.isActive)
            //@ts-ignore
            currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
        }
        

        return currentBlockIndex;
    }

    function findIndexWhenNextGroupNoneActive(groupOrder: number, itemOrder: number) : number{
        let currentBlockIndex : number = 0;
        //Расположение нашего итема среди других активных итемов в текущей группе
        const groupActiveItemsArray : TemplateItem[] = template.filter(group => group.order === groupOrder)[0].TemplateGroup.filter(templateItem => templateItem.isActive);
        const moreOrderActiveItemInGroup : boolean = groupActiveItemsArray.some(templateItem => templateItem.order > itemOrder)
        // присвоить более высокому активному итему
        if (moreOrderActiveItemInGroup){
        // Получение первого активного итема
            const firstActiveItem : TemplateItem | undefined = groupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
           //@ts-ignore
            currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
        }
        // присвоить последний индекс блока в редакторе
         else{
            //@ts-ignore
            currentBlockIndex = editorRef.current?.blocks.getBlocksCount();
        }
        return currentBlockIndex 
    }

    function  getPositionIndexOfTemplateItem(groupOrder: number, itemOrder: number) : number {
        
        let currentBlockIndex: number = 0;
        let checkIfAnyNextItemsGroupActive : boolean = false;
        let checkIfAnyCurrentItemsGroupActive : boolean = false;
        template.map((group) => {
            group.TemplateGroup.map((item) => {
                if (group.order > groupOrder && item.isActive){
                    checkIfAnyNextItemsGroupActive = true;
                }
                if (groupOrder === group.order && item.isActive){
                    checkIfAnyCurrentItemsGroupActive = true;
                }
            })
        })

        if (checkIfAnyNextItemsGroupActive){
            currentBlockIndex = findIndexWhenNextGroupActive(groupOrder, itemOrder, checkIfAnyCurrentItemsGroupActive)
        }
        else {
            currentBlockIndex = findIndexWhenNextGroupNoneActive(groupOrder, itemOrder)
        }
        return  currentBlockIndex;
    }

    function addTemplateItemToEditor(groupId:number, itemId: string, itemPosition: number){
        const config : number = 1;
        const needToFocus : boolean = true;
        const needToReplace : boolean = false;
        //@ts-ignore
        const position = editorRef.current?.blocks.getBlocksCount() - 1; // Получение текущего блока тектса(по массиву блоков)
        template.map((group) => {
            if (group.id === groupId) {
                group.TemplateGroup.map((item) => {
                    if (item.id === itemId && item.isActive ) {
                        editorRef.current?.blocks.insert("paragraph", {
                            text: item.description
                        },config, itemPosition, needToFocus, needToReplace, item.id)
                    }
                })
            }
        })
    }

    function updateTemplateField(template: TemplateItemGroup[], group:TemplateItemGroup, item:TemplateItem){
        // Добавление пукнта
        if (!item.isActive){
            UpdateTemplateItemIsActiveField(template, group.id, item.id);
            const itemPosition : number = getPositionIndexOfTemplateItem(group.order, item.order);
            addTemplateItemToEditor(group.id, item.id, itemPosition);
        }
        // Удаление пункта  
        else {
            UpdateTemplateItemIsActiveField(template, group.id, item.id);
            const currentBlockIndex = editorRef.current?.blocks.getBlockIndex(item.id);
            editorRef.current?.blocks.delete(currentBlockIndex)
        }
    }

    useEffect(() => {
        ClearTemplate(template)
        if (!editorRef.current){
            initEditor();
        }
    }, [])

    return (
        <>
            <div className="side-bar">
                <div className="switcher-list">
                    {template.map((temlpateItemGroup) => (
                        <div className="" key={temlpateItemGroup.id}>
                            <p>{temlpateItemGroup.title}</p>
                            {temlpateItemGroup.TemplateGroup.map(
                                (templateItem) => (
                                    <div className="template-item" key={templateItem.id}>
                                        <Switch onClick={() => updateTemplateField(template, temlpateItemGroup, templateItem)} checked={templateItem.isActive}/>
                                        <p>{templateItem.title}</p>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="textRedactor">
                <div className="editorWrapper">
                    <div ref={componentRef} id="editorjs"></div>
                </div>
                <div className="buttonsBlock">
                    <div className="backToAudits">
                        <Button variant="outlined" onClick={backToAudits}>Вернуться к аудитам</Button>
                    </div>
                    <div className="saveButtonsBlock">
                        <Button
                            className="savePdfButton"
                            onClick={() => {
                                editorRef.current?.toolbar.close();
                                handlePdfPrint();
                            }}
                            variant="contained"
                        >
                            Сохранить в PDF
                        </Button>
                        <Button variant="contained" onClick={handleSaveAudit}>Сохранить аудит</Button>
                    </div>
                </div>
            </div>
        </>
    );
}