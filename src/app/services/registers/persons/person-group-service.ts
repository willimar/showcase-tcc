import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PersonGroupModel } from "src/app/models/registers/persons/person-group-model";
import { PersonTypeModel } from "src/app/models/registers/persons/person-type-model";
import { BaseService } from "../../shared/base-service";

@Injectable({
  providedIn: 'root'
})
export class PersonGroupService extends BaseService<PersonGroupModel> {
  constructor(public http: HttpClient){
    super();
    this.entity = new PersonGroupModel();
    this.controller = 'registers';
    this.viewName = 'person-group';
  }
}
