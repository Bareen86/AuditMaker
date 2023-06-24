export interface TemplateAll {
  template: TemplateItemGroup[]
}

export interface TemplateItemGroup{
  id : number,
  title : string,
  TemplateGroup: TemplateItem[],
  order : number
}

export interface TemplateItem{
  id : number,
  title : string,
  description : string,
  order: number,
  isActive : boolean
}

export enum TemplateActionType {
  FETCH_TEMPLATE = "FETCH_TEMPLATE",
  FETCH_TEMPLATE_TO_REDACTOR = "FETCH_TEMPLATE_TO_REDACTOR"
}

interface FetchTemplateAction {
  type : TemplateActionType.FETCH_TEMPLATE,
  payload: TemplateItemGroup[]
  
}

interface SetTemplateItemState {
  type: TemplateActionType.FETCH_TEMPLATE_TO_REDACTOR,
  payload: TemplateItemGroup[]
}

export type TemplateAction = FetchTemplateAction | SetTemplateItemState