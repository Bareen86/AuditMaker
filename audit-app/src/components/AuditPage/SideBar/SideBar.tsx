import React, { useEffect, useState } from "react";
import SwitcherList from "./SwitcherList/SwitcherList";
import "./SideBar.css";

type Props = {};

export default function SideBar({}: Props) {

    const [switches, setSwitches] = useState<
        {
           id: number;
            title: string;
            description?: string;
            isActive: boolean;
            isSubSwitcher: boolean;
            subSwitcherId?: number;
        }[]
    >([]);

    useEffect(() => {
        setSwitches([
            {
                id: 1, title: "Главная страница", isActive: false,
                isSubSwitcher: false,
            },
            {
               id: 2,
                title: "Главное меню - основной элемент  навигации по сайту",
                description:
                    "Главное меню - основной элемент навигации по сайту. Оно должно быть максимально удобным, чтобы пользователь добрался до любого раздела сайта.",
                isActive: false, isSubSwitcher: true, subSwitcherId: 1
            },
            {
                id: 3, title: "Логотип текста не оформлен текстом",
                description:
                    "Рекомендуем оформить название гостиницы в логотопе или продублировать название рядом с логотипом. Сейчас название отеля в логотипе оформлено" +
                    "картинкой. Поисковые системы не индексируют текст на изображении, это затрудняет поиск отеля по бизнес-запросу(названию отеля) в Google и Яндексе.",
                isActive: false, isSubSwitcher: true, subSwitcherId: 1
            },
            {
              id: 4, title: "Страница номера и цены", isActive: false,
              isSubSwitcher: false,
            },
            {
              id: 5, title: "Названия номеров на английсом языке",
              description:
                  "Укажите названия номеров на английском языке",
              isActive: false, isSubSwitcher: true, subSwitcherId: 4
            },
            
        ]);
    }, []);

    return (
        <div className="sideBar">    
            <p className="SideBar__p">Аудит сайта</p> 
            <hr></hr>       
            <SwitcherList data={switches} />
        </div>  
    );
}