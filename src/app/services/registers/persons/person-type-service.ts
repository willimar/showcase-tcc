import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PersonTypeModel } from "src/app/models/registers/persons/person-type-model";
import { BaseService } from "../../shared/base-service";

@Injectable({
  providedIn: 'root'
})
export class PersonTypeService extends BaseService<PersonTypeModel> {
  constructor(public http: HttpClient){
    super();
    this.entity = new PersonTypeModel();
    this.controller = 'registers';
    this.viewName = 'person-type';
  }
}
