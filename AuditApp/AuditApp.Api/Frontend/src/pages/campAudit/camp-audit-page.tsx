import { useEffect, useState } from "react";
import TextRedactor from "../../components/text-redactor/text-redactor";
import "./camp-audit-page.css";
import CampSideBar from "./campSideBar/camp-side-bar";

type Props = {};

export default function CampAuditPage({}: Props) {

    return (
        <>
            <div className="content-wrapper">
                <CampSideBar name="Аудит лагеря"/>
                <TextRedactor />
            </div>
        </>
    );
}
