import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { Translate } from 'src/app/components/locales/translate';
import { IService } from 'src/app/services/shared/interfaces/iservice';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: []
})
export class InputBaseComponent implements OnInit {

  @Input() public caption!: string;
  @Input() public errorMessage!: string;
  @Input() public name!: string;
  @Input() public required!: boolean;

  @ContentChild(NgModel) model!: NgModel;
  @ContentChild(FormControlName) control!: FormControlName;

  public input: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;

    if (this.input === undefined) {
      throw new Error('Field ngModel or FormControlName not assigned.');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched) && this.required && this.input.value.length > 0;
  }

  hasError(): boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched) && this.required && this.input.value.length > 0;
  }

}
