import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Guid } from "src/app/models/types/guid";
import { ModelBase } from "src/app/models/types/model-base";
import { Status } from "src/app/models/types/status";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IService } from "./interfaces/iservice";
import { StatusService } from "./status-service";
import Swal from 'sweetalert2'
import { Translate } from "src/app/components/locales/translate";
import { GlobalMessagePtBr } from "src/app/components/locales/components/shared/layout/global-message-pt-br";
import { GlobalMessageEnUs } from "src/app/components/locales/components/shared/layout/global-message-en-us";
import { SystemSetup } from "../system/system-setup";
import { RootObject } from "src/app/models/types/root-object";
import { Observable } from "rxjs";
import { PannelButtonsComponent } from "src/app/components/shared/controls/pannel-buttons/pannel-buttons.component";

@Injectable({
  providedIn: 'root'
})
export class BaseService<TEntity> implements IService<TEntity> {
  public errorMessages!: any[];
  public messages!: any[];
  public formGroup!: FormGroup[];
  public entity!: TEntity;
  public controller!: string;
  public status: StatusService = StatusService.reading;
  public translator!: Translate;
  public viewName!: string;

  protected toast: any;
  protected http!: HttpClient;

  constructor(){
    this.translator = new Translate(
      [new GlobalMessagePtBr(), new GlobalMessageEnUs()]
    );

    this.toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: SystemSetup.popupTimer
    });
  }

  public getList(collection: ModelBase[], status: Status): ModelBase[] {
    throw new Error("Method not implemented.");
  }

  public openError(messageKey: string): void{
    this.toast.fire({
      icon: 'error',
      title: this.translator.getString(messageKey),
      timerProgressBar: true,
      timer: SystemSetup.popupTimer
    });
  }

  public setStatus(value: StatusService): void {
    this.status = value;
  }

  public delete(value: TEntity, panel?: PannelButtonsComponent): boolean {
    return this.execute(value, 'delete', panel);
  }

  public save(value: TEntity, panel?: PannelButtonsComponent): boolean {
    return this.execute(value, 'save', panel);
  }

  private execute(value: TEntity, action: string, panel?: PannelButtonsComponent): boolean {
    let hasError = false;

    this.formGroup.forEach(item => {
      if(item.invalid) {
        hasError = true;
      }
    });

    if(!hasError){
      this.errorMessages = [];
      this.messages = [];

      let result : boolean = false;

      this.submit(value, action)
        .subscribe(
          (data: any[]) => result = this.saveResponse(data, panel),
          (error: any) => result = this.exceptionResolve(error)
          );

      return result;
    }
    else{
      this.toast.fire({
        icon: 'warning',
        title: this.translator.getString('global-required-field-message'),
        timerProgressBar: true,
        timer: SystemSetup.popupTimer
      });

      return false;
    }
  }

  private submit(value: any, action: string): Observable<any> {

    const headers: { [key: string]: string; } = {
      'Content-Type':  'application/json',
      'Authorization': `Basic ${SystemSetup.brokerUser}`,
      'SystemSource': SystemSetup.systemSource,
      'Sec-Fetch-Mode': `cors`,
      'Sec-Fetch-Site': `same-origin`,
      'x-vhost': ``,
    }

    const httpOptions = { headers: new HttpHeaders(headers) };

    let rootObject = new RootObject();

    rootObject.payload = JSON.stringify(value);
    rootObject.routing_key = action;
    rootObject.name = this.viewName;
    rootObject.headers = headers;
    rootObject.properties.headers = headers;

    let url = `${SystemSetup.brokerUrl}/api/exchanges/%2F/${this.controller}/publish`;

    return this.http.post(url, JSON.stringify(rootObject), httpOptions);
  }

  private saveResponse(data: any, panel?: PannelButtonsComponent): boolean {
    const result: any[] = [];

    if (data.routed === true){
      this.toast.fire({
        icon: 'success',
        title: this.translator.getString('global-save-success'),
        timerProgressBar: true,
        timer: SystemSetup.popupTimer
      });

      this.status = StatusService.browse;

      if(panel !== undefined){
        panel.status = StatusService.browse;
      }

      return true;
    }
    else {
      this.toast.fire({
        icon: 'error',
        title: this.translator.getString('global-save-routed-false'),
        timerProgressBar: true,
        timer: SystemSetup.popupTimer
      });

      return false;
    }
  }

  private exceptionResolve(e: any): boolean {
    this.toast.fire({
      icon: 'error',
      title: this.translator.getString('global-save-error'),
      timerProgressBar: true,
      timer: SystemSetup.popupTimer
    });

    return false;
  }
}
