import { Component, Input, OnInit, Output } from '@angular/core';
import { Translate } from 'src/app/components/locales/translate';
import { Guid } from 'src/app/models/types/guid';
import { IService } from 'src/app/services/shared/interfaces/iservice';
import { StatusService } from 'src/app/services/shared/status-service';
import { EventEmitter } from '@angular/core';
import { PannelButtonEnUs } from 'src/app/components/locales/components/shared/controls/panel-buttons/pannel-buttons-component-en-us';
import { PannelButtonPtBr } from 'src/app/components/locales/components/shared/controls/panel-buttons/pannel-buttons-component-pt-br';

@Component({
  selector: 'app-pannel-buttons',
  templateUrl: './pannel-buttons.component.html',
  styleUrls: []
})
export class PannelButtonsComponent implements OnInit {

  translate: Translate = new Translate([
    new PannelButtonEnUs(),
    new PannelButtonPtBr()
  ]);

  public status: StatusService = StatusService.browse;

  @Input() service!: IService<any>;

  @Output() onSave = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onInsert = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onSearch = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onDeleteExecute(value: any): void {
    if (this.service?.entity.id.toString() === Guid.empty){
      this.service?.openError('record-error-no-records');
    } else {
      this.onDelete.emit(value);
      let resultSave = this.service?.delete(this.service.entity, this);
      this.service.entity.id = new Guid(Guid.empty);

      if(resultSave) {
        console.log(this.service?.status);
        if (this.service?.status != StatusService.error) {
          this.changeStatus(StatusService.browse);
        }
      }
    }
  }

  onCancelExecute(value: any): void {
    this.onCancel.emit(value);
    this.service.entity.id = new Guid(Guid.empty);
    this.changeStatus(StatusService.browse);
  }

  onInsertExecute(value: any): void {
    this.onInsert.emit(value);

    if (this.service?.entity.hasOwnProperty('id')) {
      this.service.entity.id = Guid.newGuid();
    }

    this.changeStatus(StatusService.insert);
  }

  onEditExecute(value: any): void {
    if (this.service?.entity.id.toString() === Guid.empty){
      this.service?.openError('record-error-no-records');
    } else {
      this.onEdit.emit(value);
      this.changeStatus(StatusService.edit);
    }
  }

  onSearchExecute(value: any): void {
    this.onSearch.emit(value);
    this.changeStatus(StatusService.browse);
  }

  onSaveExecute(value: any): void {
    this.onSave.emit(value);
    let resultSave = this.service?.save(this.service.entity, this);

    if(resultSave) {
      console.log(this.service?.status);
      if (this.service?.status != StatusService.error) {
        this.changeStatus(StatusService.browse);
      }
    }
  }

  changeStatus(value: StatusService) {
    this.status = value;
    this.service?.setStatus(value);
  }

  getStatus(): StatusService {
    if (this.service?.status == StatusService.saving || this.service.status == StatusService.error) {
      return StatusService.error
    } else {
      return this.status;
    }
  }
}
