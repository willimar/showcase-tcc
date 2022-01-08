import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GlobalMessageEnUs } from 'src/app/components/locales/components/shared/layout/global-message-en-us';
import { GlobalMessagePtBr } from 'src/app/components/locales/components/shared/layout/global-message-pt-br';
import { PersonGroupEnUs } from 'src/app/components/locales/components/shared/layout/registers/persons/person-group/person-group-component-en-us';
import { PersonGroupPtBr } from 'src/app/components/locales/components/shared/layout/registers/persons/person-group/person-group-component-pt-br';
import { Translate } from 'src/app/components/locales/translate';
import { PersonGroupModel } from 'src/app/models/registers/persons/person-group-model';
import { Guid } from 'src/app/models/types/guid';
import { PersonGroupService } from 'src/app/services/registers/persons/person-group-service';
import { FormBaseComponent } from '../../shared/form-base/form-base.component';

@Component({
  selector: 'app-person-group',
  templateUrl: './person-group.component.html',
  styleUrls: []
})
export class PersonGroupComponent extends FormBaseComponent<PersonGroupModel> implements OnInit {

  private mokValuesView(){
    this.service.entity.name = 'Administrators';
    this.service.entity.id = Guid.newGuid();
    this.service.entity.lastChangeDate = new Date();
    this.service.entity.registerDate = new Date();
  }

  constructor(public service: PersonGroupService, form: FormBuilder) {
    super();
    this.formBuilder = form;
    this.viewName = 'person-type';

    this.translate = new Translate([
      new GlobalMessagePtBr(),
      new GlobalMessageEnUs(),
      new PersonGroupPtBr(),
      new PersonGroupEnUs(),
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
