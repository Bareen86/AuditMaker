import { useDispatch } from "react-redux";
import { TemplateAction, TemplateActionType, TemplateItemGroup } from "../../types/template";
import {Dispatch}  from "redux";

  function setTemplateItemIsActiveFiled(template: TemplateItemGroup[],groupId: number, itemId: number) : TemplateItemGroup[]  {
    const updatedTemplate = template.map((group) => {
        if (group.id === groupId) {
          group.TemplateGroup = group.TemplateGroup.map((item) => {
                if (item.id === itemId) {
                    return { ...item, isActive: !item.isActive };
                }
                return item;
            });
        }
        return group;
    });
    return updatedTemplate;
  }


export function UpdateTemplateItemIsActiveField(template: TemplateItemGroup[],itemId: number, groupId: number) : TemplateAction {
    const updatedTemplate = setTemplateItemIsActiveFiled(template, itemId, groupId)
    return {type : TemplateActionType.UPDATE_TEMPLATE, payload: updatedTemplate}
}
        
export function fetchTemplate()  {
  return async (dispatch: Dispatch<TemplateAction>) => {
    dispatch({type: TemplateActionType.FETCH_TEMPLATE, payload: []})
  }
}