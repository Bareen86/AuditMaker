import { useEffect, useState } from "react";
import SideBar from "../../components/template-sidebar/side-bar";
import TextRedactor from "../../components/text-redactor/text-redactor";
import "./camp-audit-page.css";
import { TemplateItem, TemplateItemGroup } from "../../models/template-model";

type Props = {};

export default function CampAuditPage({}: Props) {

    const [templateItemGroup, setTemplateItemGroup] = useState<TemplateItemGroup[]>([]);

    useEffect(() => {
        setTemplateItemGroup([
            {
                id : 1,
                title : "Главная страница",
                TemplateGroup : [
                    {
                        id : 1,
                        title : "Главное меню - основной элемент  навигации по сайту",
                        description : "Главное меню - основной элемент навигации по сайту. Оно должно быть максимально удобным, чтобы пользователь добрался до любого раздела сайта.",
                        order: 1,
                        isActive : false
                    },
                    {
                        id : 1,
                        title : "Логотип текста не оформлен текстом",
                        description :
                        "Рекомендуем оформить название гостиницы в логотопе или продублировать название рядом с логотипом. Сейчас название отеля в логотипе оформлено" +
                        "картинкой. Поисковые системы не индексируют текст на изображении, это затрудняет поиск отеля по бизнес-запросу(названию отеля) в Google и Яндексе.",
                        order: 2,
                        isActive : false
                    }
                ],
                order : 1,
            },
            {
                id : 2,
                title : "Страница номера и цены",
                TemplateGroup : [
                    {
                        id : 1,
                        title : "Названия номеров на английсом языке",
                        description : "Укажите названия номеров на английском языке",
                        order: 1,
                        isActive : false
                    }
                ],
                order : 2,
            }
        ])
    }, [])

    return (
        <>
            <div className="content-wrapper">
                <SideBar name="Аудит лагеря" TemplateItemGroup={templateItemGroup} />
                <TextRedactor />
            </div>
        </>
    );
}
