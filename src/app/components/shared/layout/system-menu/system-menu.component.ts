import { Component, Input, OnInit } from '@angular/core';
import { SystemMenuEnUs } from 'src/app/components/locales/components/shared/layout/system-menu-component-en-us';
import { SystemMenuPtBr } from 'src/app/components/locales/components/shared/layout/system-menu-component-pt-br';
import { Translate } from 'src/app/components/locales/translate';
import { MenuItemModel } from 'src/app/models/shared/menu-model';
import { MenuSerice } from 'src/app/services/shared/menu-service';
import { AbstractComponent } from '../abstract-component';

@Component({
  selector: 'app-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: []
})
export class SystemMenuComponent extends AbstractComponent implements OnInit {

  rootMenu!: MenuItemModel[];

  @Input() systemName: string = 'Showcase'

  constructor(private menuSerice: MenuSerice) {
    super();

    this.translate = new Translate([
      new SystemMenuEnUs(),
      new SystemMenuPtBr()
    ]);

    let menuModel = this.menuSerice.getMenu();

    this.rootMenu = menuModel.rootMenu;
  }

  ngOnInit(): void {
  }

}
