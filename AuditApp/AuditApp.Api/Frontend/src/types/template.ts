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
  UPDATE_TEMPLATE_ITEM = "UPDATE_TEMPLATE_ITEM"
}

interface FetchTemplateAction {
  type : TemplateActionType.FETCH_TEMPLATE,
  payload: TemplateItemGroup[]
  
}

interface UpdateTemplateItemAction {
  type: TemplateActionType.UPDATE_TEMPLATE_ITEM,
  payload: TemplateItem
}

export type TemplateAction = FetchTemplateAction | UpdateTemplateItemAction