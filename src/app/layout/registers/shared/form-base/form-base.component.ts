import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Translate } from 'src/app/components/locales/translate';
import { BaseService } from 'src/app/services/shared/base-service';
import { IService } from 'src/app/services/shared/interfaces/iservice';
import { StatusService } from 'src/app/services/shared/status-service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: []
})
export class FormBaseComponent<TEntity> implements OnInit {


  public service!: BaseService<TEntity>;
  protected viewName: string = "";
  public translate!: Translate;
  public formGroupRules!: FormGroup;
  public formBuilder!: FormBuilder;

  constructor() { }

  ngOnInit(): void {
  }

  formVisible(): boolean {
    return this.service?.status === StatusService.edit || this.service?.status === StatusService.insert || this.service?.status === StatusService.error;
  }

  getHeight(): number {
    return window.innerHeight;
  }

}
