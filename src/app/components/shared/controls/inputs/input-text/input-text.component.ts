import { Component, OnInit } from '@angular/core';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['input-text.component.css']
})
export class InputTextComponent extends InputBaseComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
