import { useDispatch } from "react-redux";
import { TemplateAction, TemplateActionType } from "../../types/template";
import {Dispatch}  from "redux";


// export function UpdateTemplateItemIsActiveField() : TemplateAction {
//     return {type : TemplateActionType.UPDATE_TEMPLATE_ITEM, payload: {}}
// }
        
export function fetchTemplate()  {
  return async (dispatch: Dispatch<TemplateAction>) => {
    dispatch({type: TemplateActionType.FETCH_TEMPLATE, payload: [
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
                  id : 2,
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
    ]})
  }
}