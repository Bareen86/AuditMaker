export interface IAudit {
  id : number,
  title : string,
  location : string,
  textBlock : TextBlock
}

export interface TextBlock  {
  data: any[]
}

export  interface IUserCampAudits {
  id : number,
  title :  string,
  location : string
  url  : string
  modifiedOn : Date
}