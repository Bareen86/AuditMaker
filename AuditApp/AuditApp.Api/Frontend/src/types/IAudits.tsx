export interface IAudit {
  id : number,
  title : string,
  location : string,
  textBlock : TextBlock
}

export interface TextBlock  {
  data: any[]
}