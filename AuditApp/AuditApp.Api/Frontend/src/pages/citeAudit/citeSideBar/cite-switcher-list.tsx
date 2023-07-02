import "./cite-switcher-list.css";
import { Button, Switch } from "@mui/material";
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { useActions } from "../../../hooks/use-action";
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { TemplateItemGroup } from "../../../types/template";
import { group } from "console";
import { isTemplateExpression } from "typescript";
const Header = require('@editorjs/header');
const FontSize = require("editorjs-inline-font-size-tool");
const FontFamily = require("editorjs-inline-font-family-tool");
const ImageTool = require('@editorjs/image')

interface CiteProps {
    editorRef : React.MutableRefObject<EditorJS | null>
}

export default forwardRef(function CiteSwitcherGroupList({editorRef} : CiteProps, ref:any) {
    
    function initEditor(){
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                editorRef.current = editor;
                AddTemplateToEditor()
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
                                if(response.data.success === 1){
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

    function AddTemplateToEditor() {
        template.map((templateGroup) =>
            templateGroup.TemplateGroup.map((item) => {
                if (item.isActive) {
                    editorRef.current?.blocks.insert("paragraph", {
                        text: item.description,
                    })
                    console.log(templateGroup.id, item.id);
                }
            })
        );
    }

    async function findActiveItem(groupOrder: number, itemOrder: number) {
                // let currentBlockIndex = 0
                // const GroupActiveItemsArray = template.filter(group => group.order === groupOrder)[0].TemplateGroup.filter(templateItem => templateItem.isActive);
                // const moreOrderActiveItemInGroup = GroupActiveItemsArray.some(templateItem => templateItem.order > itemOrder)
                // const firstItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
                // // присвоить более высокому активному итему
                // if (moreOrderActiveItemInGroup){
                // // Получение первого активного итема
                //     const firstItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
                //     console.log(firstItem)
                //     //@ts-ignore
                //     const itemId = await getBlockIdByContent(firstItem?.description);
                //     console.log(itemId)
                //     //@ts-ignore
                //     currentBlockIndex = editorRef.current?.blocks.getBlockIndex(itemId);
                // }
                // // присвоить первое значение первого объекта из некст группы
                //  else{
                //     const nextFirstActiveTemplateItem = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
                //     const firstActiveItem = nextFirstActiveTemplateItem?.TemplateGroup.find(item => item.isActive)
                //     //@ts-ignore
                //     const itemId = await getBlockIdByContent(firstItem?.description);
                //     console.log(itemId)
                //     //@ts-ignore    
                //     currentBlockIndex = editorRef.current?.blocks.getBlockIndex(itemId);
                // }
                let checkIfAnyNextItemsGroupActive: boolean = false;
                let checkIfAnyCurrentItemsGroupActive: boolean = false;
                template.map((group) => {
                    group.TemplateGroup.map((item) => {
                        if (group.order > groupOrder && item.isActive) {
                            checkIfAnyNextItemsGroupActive = true;
                        }
                        if (groupOrder === group.order && item.isActive) {
                            checkIfAnyCurrentItemsGroupActive = true;
                        }
                    });
                });
                console.log(checkIfAnyNextItemsGroupActive);
                console.log(checkIfAnyCurrentItemsGroupActive)   
      }

    async function  GetPositionIndexOfTemplateItem(groupOrder: number, itemOrder: number,  templateItemDescription: string) {
        
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
                    const firstItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
                    //@ts-ignore
                    const itemId = await getBlockIdByContent(firstItem?.description);
                    //@ts-ignore
                    currentBlockIndex = editorRef.current?.blocks.getBlockIndex(itemId);
                }
                // присвоить первое значение первого объекта из некст группы
                 else{
                    const nextFirstActiveTemplateItem = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
                    const firstActiveItem = nextFirstActiveTemplateItem?.TemplateGroup.find(item => item.isActive)
                    //@ts-ignore
                    const itemId = await getBlockIdByContent(firstActiveItem?.description);
                    //@ts-ignore
                    currentBlockIndex = editorRef.current?.blocks.getBlockIndex(itemId);
                }   
            }
            // и текущая группа не активна
            else{
                // присвоить первое значение первого объекта из некст группы
                // Поиск первой следующей группы с активными итемами и получением индекса первого активного итема
                const nextFirstActiveTemplateItem = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
                const firstActiveItem = nextFirstActiveTemplateItem?.TemplateGroup.find(item => item.isActive)
                //@ts-ignore
                const itemId = await getBlockIdByContent(firstActiveItem?.description);
                //@ts-ignore
                currentBlockIndex = editorRef.current?.blocks.getBlockIndex(itemId);
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
                const firstItem = GroupActiveItemsArray.find(templateItem => templateItem.order > itemOrder)
                //@ts-ignore
                const itemId = await getBlockIdByContent(firstItem?.description);
                //@ts-ignore
                currentBlockIndex = editorRef.current?.blocks.getBlockIndex(itemId);
            }
            // присвоить первое значение первого объекта из некст группы
             else{
                const nextFirstActiveTemplateItem = template.find(group => group.TemplateGroup.some(item => item.isActive === true) && group.order > groupOrder)
                const firstActiveItem = nextFirstActiveTemplateItem?.TemplateGroup.find(item => item.isActive)
                //@ts-ignore
                const itemId = await getBlockIdByContent(firstActiveItem?.description);
                //@ts-ignore
                currentBlockIndex = editorRef.current?.blocks.getBlocksCount() - 1;
            } 
        }
        return  currentBlockIndex;
    }

    function AddTemplateItemToEditor(groupId:number, itemId:number, itemPosition: number){
        //@ts-ignore
        const position = editorRef.current?.blocks.getBlocksCount() - 1; // Получение текущего блока тектса(по массиву блоков)
        template.map((group) => {
            if (group.id === groupId) {
                group.TemplateGroup.map((item) => {
                    if (item.id === itemId && item.isActive ) {
                        editorRef.current?.blocks.insert("paragraph", {
                            text: item.description
                        },3, itemPosition)
                    }
                })
            }
        })
    }

    async function UpdateTemplateField(template: TemplateItemGroup[], groupId:number, itemId:number, groupOrder : number, itemOrder : number, templateItemDescription: string, templateItemIsActive: boolean){
        UpdateTemplateItemIsActiveField(template, groupId, itemId);
        const itemPosition = await GetPositionIndexOfTemplateItem(groupOrder, itemOrder, templateItemDescription);
        AddTemplateItemToEditor(groupId, itemId, itemPosition);
        
    }

    async function BlockList(){
        const data = await getBlockIdByContent("Тестовый текст номер с Учётом последовательности номер 2.2");
        console.log(data)
        console.log("получение последнего индекса")
        //@ts-ignore
        const position = editorRef.current?.blocks.getBlocksCount() - 1; // Получение текущего блока тектса(по массиву блоков)
        console.log(position)
        //@ts-ignore
        const currentBlockIndex = editorRef.current?.blocks.getBlockIndex(data);
        console.log(currentBlockIndex)

        editorRef.current?.blocks.insert("paragraph", {
            text: "egor"
        },3, 4)
    }

    async function getBlockIdByContent(content: string) {
        //@ts-ignore
        let editorData = await editorRef.current.saver.save();
        for (let i = 0; i < editorData.blocks.length; i++) {
          const block = editorData.blocks[i];
          if (block.data.text.includes(content)) {
            return block.id;
          }
        }
        return -1;
      }
      
    useEffect(() => {
        if (!editorRef.current){
            initEditor();
        }
        AddTemplateToEditor()
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
                                        <Switch onClick={() => UpdateTemplateField(template, temlpateItemGroup.id, templateItem.id, temlpateItemGroup.order, templateItem.order, templateItem.description, templateItem.isActive)} checked={templateItem.isActive}/>
                                        <p>{templateItem.title}</p>
                                    </div>
                                )
                            )}
                        </div>
                    ))}
                    <button onClick={() => findActiveItem(1, 1)}>
                        Get BlockArrayLength
                    </button>
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