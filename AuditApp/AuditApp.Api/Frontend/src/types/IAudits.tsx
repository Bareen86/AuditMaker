export interface IUserAuditToGet {
  id : number,
  title : string,
  location : string,
  textBlock : TextBlock
}

export interface IUserAudit {
  id : number,
  title : string,
  location : string,
  Url : string
  Date : Date
}

export interface TextBlock  {
  data: any[]
}

export  interface IUserCampAudits {
  id : number,
  title :  string,
  location : string,
  url  : string,
  modifiedOn : Date
}