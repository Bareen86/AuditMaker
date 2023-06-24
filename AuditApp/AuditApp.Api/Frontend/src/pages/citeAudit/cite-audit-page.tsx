import { useEffect, useState } from "react";
import TextRedactor from "../../components/text-redactor/text-redactor";
import "./cite-audit-page.css";
import { TemplateItemGroup } from "../../types/template";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import CiteSideBar from "./citeSideBar/side-bar";


type Props = {};

export default function CiteAuditPage({}: Props) {
    
    const { template } = useTypedSelector(state => state.template)

    return (
        <>
            <div className="content-wrapper">
                <CiteSideBar name="Аудит сайта" />
                <TextRedactor />
            </div>
        </>
    );
}
