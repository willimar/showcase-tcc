import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MenuItemModel, MenuModel } from "src/app/models/shared/menu-model";
import { BaseService } from "./base-service";

@Injectable({
  providedIn: 'root'
})
export class MenuSerice extends BaseService<MenuModel> {
  constructor(){
    super();
    this.entity = new MenuModel();
    this.controller = 'menu';
    this.viewName = 'menu';
  }

  public getMenu(): MenuModel {
    let menuModel = new MenuModel();

    let register = menuModel.addMenuItem('nav-icon fa fa-list-alt', 'register');

    let people = register.addMenuItem('nav-icon fa fa-users', 'people');
    people.addMenuItem('nav-icon fa fa-address-card', 'user');
    people.addMenuItem('nav-icon fa fa-address-card', 'stakeholder');

    let process = register.addMenuItem('nav-icon fa fa-users', 'process');
    process.addMenuItem('nav-icon fa fa-address-card', 'process-flow');
    
    let reports = menuModel.addMenuItem('nav-icon fa fa-project-diagram', 'reports');

    let processoReport = reports.addMenuItem('nav-icon fa fa-users', 'process');
    processoReport.addMenuItem('nav-icon fa fa-address-card', 'process-analitic');
    processoReport.addMenuItem('nav-icon fa fa-address-card', 'process-sintetic');

    let helps = menuModel.addMenuItem('nav-icon fas fa-question-circle', 'help');

    let system = helps.addMenuItem('nav-icon fa fa-laptop', 'system');

    system.addMenuItem('nav-icon far fa-address-card', 'about');

    return menuModel;
  }
}
