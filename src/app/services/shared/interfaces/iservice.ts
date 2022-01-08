import { FormGroup } from "@angular/forms";
import { PannelButtonsComponent } from "src/app/components/shared/controls/pannel-buttons/pannel-buttons.component";
import { Guid } from "src/app/models/types/guid";
import { ModelBase } from "src/app/models/types/model-base";
import { Status } from "src/app/models/types/status";
import { StatusService } from "../status-service";

export interface IService<TEntity> {
  formGroup: FormGroup[];
  entity: TEntity;
  controller: string;
  viewName: string;
  status: StatusService;

  getList(collection: ModelBase[], status: Status): ModelBase[];
  delete(value: TEntity, panel?: PannelButtonsComponent): boolean;
  save(value: TEntity, panel?: PannelButtonsComponent): boolean;
  setStatus(value: StatusService): void;
  openError(messageKey: string): void;
}
