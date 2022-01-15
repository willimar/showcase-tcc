import { Component, Input, OnInit } from '@angular/core';
import { Translate } from 'src/app/components/locales/translate';
import { PersonTypeService } from 'src/app/services/registers/persons/person-type-service';
import { BaseService } from 'src/app/services/shared/base-service';

@Component({
  selector: 'app-person-type-view',
  templateUrl: './person-type-view.component.html',
  styleUrls: []
})
export class PersonTypeViewComponent implements OnInit {

  @Input() translate!: Translate;
  @Input() service!: BaseService<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
