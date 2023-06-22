export interface TemplateItem{
  id : number,
  title : string,
  description : string,
  order: number,
  isActive : boolean
}

export interface TemplateItemGroup{
  id : number,
  title : string,
  TemplateGroup: TemplateItem[],
  order : number
}