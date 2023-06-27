import { TemplateAction, TemplateActionType, TemplateAll, TemplateItemGroup } from "../../types/template";

const initialState : TemplateAll = {
  template : []
}

export const templateReducer = (state = initialState, action: TemplateAction) : TemplateAll => {
  switch (action.type){
    case TemplateActionType.FETCH_TEMPLATE:
      return {...state, template: action.payload}
    case TemplateActionType.UPDATE_TEMPLATE_ITEM:
      return {...state}
    default:
      return state;
  }
}



