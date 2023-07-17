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
  id : string,
  title : string,
  description : string,
  order: number,
  isActive : boolean
}

export enum TemplateActionType {
  FETCH_TEMPLATE = "FETCH_TEMPLATE",
  UPDATE_TEMPLATE = "UPDATE_TEMPLATE"
}

interface FetchTemplateAction {
  type : TemplateActionType.FETCH_TEMPLATE,
  payload: TemplateItemGroup[]
}

interface UpdateTemplateAction {
  type: TemplateActionType.UPDATE_TEMPLATE,
  payload: TemplateItemGroup[]
}

export type TemplateAction = FetchTemplateAction | UpdateTemplateAction