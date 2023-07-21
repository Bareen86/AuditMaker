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

export  interface IAudit {
  id : number,
  title : string,
  location : string,
  textBlocks :  AuditBlockData
}

interface AuditBlockData {
  blocks : any[]
}

export interface CampAuditData {
  title: string;
  location: string;
  url: string;
  userId : number;
  auditType: number;
  data : any[]
}

export interface editCampAuditData {
  title: string;
  location : string;
  url: string;
}

export interface createCampAuditData {
    title: string;
    location: string;
    url: string;
    auditType: number;
}