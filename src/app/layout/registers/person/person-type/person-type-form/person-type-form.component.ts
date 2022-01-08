import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Translate } from 'src/app/components/locales/translate';
import { PersonTypeService } from 'src/app/services/registers/persons/person-type-service';
import { BaseService } from 'src/app/services/shared/base-service';

@Component({
  selector: 'app-person-type-form',
  templateUrl: './person-type-form.component.html',
  styleUrls: []
})
export class PersonTypeFormComponent implements OnInit {

  @Input() translate!: Translate;
  @Input() service!: BaseService<any>;
  @Input() formBuilder!: FormBuilder;
  @Input() formGroupRules!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.buildFormRules();
  }

  private buildFormRules(){

    let name = this.formBuilder.control('', [Validators.required, Validators.minLength(5)]);

    this.formGroupRules.addControl(
      "name", name
      );


    this.service.formGroup.push(this.formGroupRules);
  }

  static equalTo(): {[key: string]: boolean} {
    let result: {[key: string]: boolean};

    result = {'name': true};

    return result;
  }

}
