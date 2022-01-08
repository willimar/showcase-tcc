import { Guid } from "./guid";
import { Status } from "./status";

export class ModelBase{
  public id: Guid = new Guid(Guid.empty);
  public registerDate: Date | undefined;
  public lastChangeDate: Date | undefined;
  public status: Status | undefined;
}
