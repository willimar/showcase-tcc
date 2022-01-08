import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PannelButtonEnUs } from 'src/app/components/locales/components/shared/controls/panel-buttons/pannel-buttons-component-en-us';
import { PannelButtonPtBr } from 'src/app/components/locales/components/shared/controls/panel-buttons/pannel-buttons-component-pt-br';
import { GlobalMessageEnUs } from 'src/app/components/locales/components/shared/layout/global-message-en-us';
import { GlobalMessagePtBr } from 'src/app/components/locales/components/shared/layout/global-message-pt-br';
import { PersonTypeEnUs } from 'src/app/components/locales/components/shared/layout/registers/persons/person-type/person-type-component-en-us';
import { PersonTypePtBr } from 'src/app/components/locales/components/shared/layout/registers/persons/person-type/person-type-component-pt-br';
import { Translate } from 'src/app/components/locales/translate';
import { PersonTypeModel } from 'src/app/models/registers/persons/person-type-model';
import { Guid } from 'src/app/models/types/guid';
import { PersonTypeService } from 'src/app/services/registers/persons/person-type-service';
import { FormBaseComponent } from '../../shared/form-base/form-base.component';

@Component({
  selector: 'app-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: []
})
export class PersonTypeComponent extends FormBaseComponent<PersonTypeModel> implements OnInit {

  private mokValuesView(){
    this.service.entity.name = 'Pessoa jurídica';
    this.service.entity.id = Guid.newGuid();
    this.service.entity.lastChangeDate = new Date();
    this.service.entity.registerDate = new Date();
  }

  constructor(public service: PersonTypeService, form: FormBuilder)
  {
    super();
    this.formBuilder = form;
    this.viewName = 'person-type';

    this.translate = new Translate([
      new PersonTypePtBr(),
      new PersonTypeEnUs(),
      new GlobalMessagePtBr(),
      new GlobalMessageEnUs(),
    ]);

    // Fake data
    this.mokValuesView();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({});

    this.service.formGroup = [];
    this.service.formGroup.push(this.formGroupRules);
  }

  onInsert(value: any): void{

  }

  onSearch(value: any): void {

  }

}
