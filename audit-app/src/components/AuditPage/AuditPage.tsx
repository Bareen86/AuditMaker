import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import SideBar from "./SideBar/SideBar";
import TextRedactor from "../TextRedactor/TextRedactor";
import "./AuditPage.css";

type Props = {};

export default function AuditPage({}: Props) {
    const [mainSwitches, setMainSwitches] = useState<
        {
            id: number;
            title: string;
        }[]
    >([]);

    const [subSwitches, setSubSwitches] = useState<
        {
            id: number;
            title: string;
            description: string;
            isActive: boolean;
            mainSwitcherId: number;
        }[]
    >([]);

    useEffect(() => {
      setMainSwitches([
            {
                id: 1,
                title: "Главная страница",
            },
            {
                id: 2,
                title: "Страница номера и цены",
            },
        ]);
    }, []);

    useEffect(() => {
      setSubSwitches([
            {
                id: 2,
                title: "Главное меню - основной элемент  навигации по сайту",
                description:
                    "Главное меню - основной элемент навигации по сайту. Оно должно быть максимально удобным, чтобы пользователь добрался до любого раздела сайта.",
                isActive: false,
                mainSwitcherId: 1,
            },
            {
                id: 3,
                title: "Логотип текста не оформлен текстом",
                description:
                    "Рекомендуем оформить название гостиницы в логотопе или продублировать название рядом с логотипом. Сейчас название отеля в логотипе оформлено" +
                    "картинкой. Поисковые системы не индексируют текст на изображении, это затрудняет поиск отеля по бизнес-запросу(названию отеля) в Google и Яндексе.",
                isActive: false,
                mainSwitcherId: 1,
            },
            {
                id: 5,
                title: "Названия номеров на английсом языке",
                description: "Укажите названия номеров на английском языке",
                isActive: false,
                mainSwitcherId: 2,
            },
        ]);
    }, []);

    return (
        <>
            <Header />
            <div className="contentWrapper">
                <SideBar mainSwitches={mainSwitches} subSwitches={subSwitches} />
                <TextRedactor />
            </div>
        </>
    );
}
