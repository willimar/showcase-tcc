import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Translate } from 'src/app/components/locales/translate';
import { PersonGroupModel } from 'src/app/models/registers/persons/person-group-model';
import { BaseService } from 'src/app/services/shared/base-service';

@Component({
  selector: 'app-person-group-form',
  templateUrl: './person-group-form.component.html',
  styleUrls: []
})
export class PersonGroupFormComponent implements OnInit {
  @Input() translate!: Translate;
  @Input() service!: BaseService<PersonGroupModel>;
  @Input() formBuilder!: FormBuilder;
  @Input() formGroupRules!: FormGroup;

  selectedCar: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.buildFormRules();
  }

  private buildFormRules(){

    let name = this.formBuilder.control('', [Validators.required, Validators.minLength(5)]);
    let accessLevel = this.formBuilder.control('', [Validators.required]);

    this.formGroupRules.addControl("name", name);
    this.formGroupRules.addControl("access-level", accessLevel);

    this.service.formGroup.push(this.formGroupRules);
  }

}
