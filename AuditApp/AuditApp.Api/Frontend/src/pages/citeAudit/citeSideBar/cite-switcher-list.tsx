import "./cite-switcher-list.css";
import { Button, Switch } from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-action";
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { TemplateItem, TemplateItemGroup } from "../../../types/template";
import { group } from "console";
import { isTemplateExpression } from "typescript";
const Header = require('@editorjs/header');
const FontSize = require("editorjs-inline-font-size-tool");
const FontFamily = require("editorjs-inline-font-family-tool");
const ImageTool = require('@editorjs/image')

interface CiteProps {
    editorRef : React.MutableRefObject<EditorJS | null>
}

enum ResponseStatus { Failure, Success };

export default forwardRef(function CiteSwitcherGroupList({editorRef} : CiteProps, ref:any) {
    
    function initEditor(){
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                editorRef.current = editor;
                onInitAddTemplateToEditor()
            },
            autofocus: false,
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

    const  { UpdateTemplateItemIsActiveField } = useActions();

    const componentRef = useRef(null);

    const handlePdfPrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "pdfTitle",
        onAfterPrint: printSaveData
    });

    function printSaveData(){
        console.log(editorRef.current)
    }

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
        const itemId = getId(item);
        //@ts-ignore
        return editorRef.current?.blocks.getBlockIndex(itemId);
    }

    function getId(item: TemplateItem) : string | undefined {
        const itemId = editorRef.current?.blocks.getById(item.id);
        return itemId?.id;
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

        //Некст группа активна
        if (checkIfAnyNextItemsGroupActive){
            // и текущая  группа активна
            if (checkIfAnyCurrentItemsGroupActive){
                //Расположение нашего итема среди других активных итемов в текущей группе
                const GroupActiveItemsArray = template.filter(group => group.order === groupOrder)[0].TemplateGroup.filter(templateItem => templateItem.isActive);
                const moreOrderActiveItemInGroup = GroupActiveItemsArray.some(templateItem => templateItem.order > itemOrder)
                // присвоить более высокому активному итему
                if (moreOrderActiveItemInGroup){
                // Получение первого активного итема
                    const firstActiveItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
                    //@ts-ignore
                    currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
                }
                // присвоить первое значение первого объекта из некст группы
                 else{
                    const nextFirstActiveTemplateItem = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
                    const firstActiveItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
                    //@ts-ignore
                    currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
                }   
            }
            // и текущая группа не активна
            else{
                // присвоить первое значение первого объекта из некст группы
                // Поиск первой следующей группы с активными итемами и получением индекса первого активного итема
                const nextFirstActiveTemplateItem = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
                const firstActiveItem = nextFirstActiveTemplateItem?.TemplateGroup.find(item => item.isActive)
                //@ts-ignore
                currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
            }
        }

        //Некст группа не активна
        else {
            //Расположение нашего итема среди других активных итемов в текущей группе
            const GroupActiveItemsArray = template.filter(group => group.order === groupOrder)[0].TemplateGroup.filter(templateItem => templateItem.isActive);
            const moreOrderActiveItemInGroup = GroupActiveItemsArray.some(templateItem => templateItem.order > itemOrder)
            // присвоить более высокому активному итему
            if (moreOrderActiveItemInGroup){
            // Получение первого активного итема
                const firstActiveItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
               //@ts-ignore
                currentBlockIndex = getCurrentBlockIndex(firstActiveItem);
            }
            // присвоить последний индекс блока в редакторе
             else{
                //@ts-ignore
                currentBlockIndex = editorRef.current?.blocks.getBlocksCount();
            } 
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
            const itemPosition = getPositionIndexOfTemplateItem(group.order, item.order);
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
        if (!editorRef.current){
            initEditor();
        }
    }, [])

    return (
        <>
            <div className="side-bar">
                <p className="side-bar-p">Аудит отеля</p>
                <hr></hr>
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
                        <Button variant="outlined">Вернуться к аудитам</Button>
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
                        <Button variant="contained">Сохранить аудит</Button>
                    </div>
                </div>
            </div>
        </>
    );
})