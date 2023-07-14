import { IAudit } from "../types/IAudits";
import AxiosDefault from "./AxiosDefault";

export class AuditService {
  async getUserAudits(id : number) : Promise<IAudit[]> {
    return (await AxiosDefault.get("users/audits/" + id)).data
  }
}