import { useDispatch } from "react-redux";
import { TemplateAction, TemplateActionType, TemplateItemGroup } from "../../types/template";
import {Dispatch}  from "redux";

function setTemplateItemIsActiveFiled(template: TemplateItemGroup[],groupId: number, itemId: string) : TemplateItemGroup[]  {
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

function setTemplateItemUnactiveFiled(template: TemplateItemGroup[]) : TemplateItemGroup[]  {
  template.map(group => {
    group.TemplateGroup.map(item => {
      item.isActive = false;
      return item;
    });
    return group;
  });
  return template
}


export function UpdateTemplateItemIsActiveField(template: TemplateItemGroup[],groupId: number, itemId: string) : TemplateAction {
    const updatedTemplate = setTemplateItemIsActiveFiled(template, groupId,  itemId)
    return {type : TemplateActionType.UPDATE_TEMPLATE, payload: updatedTemplate}
}
        
export function fetchTemplate()  {
  return async (dispatch: Dispatch<TemplateAction>) => {
    dispatch({type: TemplateActionType.FETCH_TEMPLATE, payload: []})
  }
}

export function ClearTemplate(template: TemplateItemGroup[]) {
  const clearedTemplate = setTemplateItemUnactiveFiled(template);
  return {type : TemplateActionType.UPDATE_TEMPLATE, payload: clearedTemplate}
}