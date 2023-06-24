import { TemplateAction, TemplateActionType, TemplateAll, TemplateItemGroup } from "../../types/template";

const initialState : TemplateAll = {
  template : []
}

export const templateReducer = (state = initialState, action: TemplateAction) : TemplateAll => {
  switch (action.type){
    case TemplateActionType.FETCH_TEMPLATE:
      return {...state, template: action.payload}
    case TemplateActionType.FETCH_TEMPLATE_TO_REDACTOR:
      return {...state, template : action.payload}
    default:
      return state;
  }
}


