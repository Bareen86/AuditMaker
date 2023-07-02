import { TemplateAction, TemplateActionType, TemplateAll, TemplateItemGroup } from "../../types/template";

const initialState : TemplateAll = {
  template : [
    {
        id : 1,
        title : "Главная страница",
        order : 1,
        TemplateGroup : [
            {
                id : 1,
                title : "Главное меню - основной элемент  навигации по сайту",
                description : "Главное меню - основной элемент навигации по сайту. Оно должно быть максимально удобным, чтобы пользователь добрался до любого раздела сайта.",
                order: 1,
                isActive : false
            },
            {
                id : 2,
                title : "Логотип текста не оформлен текстом",
                description :
                "Рекомендуем оформить название гостиницы в логотипе или продублировать название рядом с логотипом. Сейчас название отеля в логотипе оформлено " +
                "картинкой. Поисковые системы не индексируют текст на изображении, это затрудняет поиск отеля по бизнес-запросу(названию отеля) в Google и Яндексе.",
                order: 2,
                isActive : false
            },
            {
                id : 3,
                title : "Тестовый текст номер 1",
                description : "Тестовый текст номер 1.1",
                order: 3,
                isActive : false
            }
        ]
    },
    {
        id : 2,
        title : "Страница номера и цены",
        order : 2,
        TemplateGroup : [
            {
                id : 1,
                title : "Названия номеров на английсом языке",
                description : "Укажите названия номеров на английском языке",
                order: 1,
                isActive : false
            },
            {
                id : 2,
                title : "Тестовый текст номер с Учётом последовательности номер 2.1",
                description : "Тестовый текст номер с Учётом последовательности номер 2.1",
                order: 2,
                isActive : false
            },
            {
                id : 3,
                title : "Тестовый текст номер с Учётом последовательности номер 2.2",
                description : "Тестовый текст номер с Учётом последовательности номер 2.2",
                order: 3,
                isActive : false
            }
        ],
    },
    {
        id : 3,
        title : "Последовательность текста шаблона под  номером 3",
        order : 3,
        TemplateGroup : [
            {
                id : 1,
                title : "Тестовый текст номер с Учётом последовательности номер 3.1",
                description : "Тестовый текст номер с Учётом последовательности номер 3.1",
                order: 1,
                isActive : false
            },
            {
                id : 2,
                title : "Тестовый текст номер с Учётом последовательности номер 3.2",
                description : "Тестовый текст номер с Учётом последовательности номер 3.2",
                order: 2,
                isActive : false
            },
            {
                id : 3,
                title : "Тестовый текст номер с Учётом последовательности номер 3.3",
                description : "Тестовый текст номер с Учётом последовательности номер 3.3",
                order: 3,
                isActive : false
            }
        ],
    }
  ]
}

export const templateReducer = (state = initialState, action: TemplateAction) : TemplateAll => {
  switch (action.type){
    case TemplateActionType.FETCH_TEMPLATE:
      return {...state, template: action.payload}
    case TemplateActionType.UPDATE_TEMPLATE:
      return {...state, template: action.payload}
    default:
      return state;
  }
}



