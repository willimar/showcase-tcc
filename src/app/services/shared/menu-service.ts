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

    /* CADASTROS */

    let register = menuModel.addMenuItem('nav-icon fa fa-list-alt', 'register');

    let people = register.addMenuItem('nav-icon fa fa-people-arrows', 'people');
    people.addMenuItem('nav-icon fa fa-users', 'stakeholder');
    people.addMenuItem('nav-icon fa fa-handshake', 'team');    
    people.addMenuItem('nav-icon fa fa-list-alt', 'expense-type');
    people.addMenuItem('nav-icon fa fa-user-secret', 'person-group');
    people.addMenuItem('nav-icon fa fa-user-circle', 'segment');

    let product = register.addMenuItem('nav-icon fa fa-industry', 'products');
    product.addMenuItem('nav-icon fa fa-barcode', 'product');
    product.addMenuItem('nav-icon fa fa-puzzle-piece', 'products-type');
    product.addMenuItem('nav-icon fa fa-truck', 'inventory-center');

    let tasks = register.addMenuItem('nav-icon fa fa-tasks', 'tasks');
    tasks.addMenuItem('nav-icon fa fa-random', 'planos-manutencao');
    tasks.addMenuItem('nav-icon fa fa-tasks', 'task-type');
    tasks.addMenuItem('nav-icon fa fa-question-circle', 'questionnaires');
    tasks.addMenuItem('nav-icon fa fa-tags', 'tags');
    tasks.addMenuItem('nav-icon fa fa-balance-scale', 'justifications');

    let financial = register.addMenuItem('nav-icon fa fa-coins', 'financial');
    financial.addMenuItem('nav-icon fa fa-credit-card', 'payment-type');
    financial.addMenuItem('nav-icon fa fa-university', 'banks');
    financial.addMenuItem('nav-icon fa fa-flag', 'categories');

    /* MOVIMENTOS */

    let moviments = menuModel.addMenuItem('nav-icon fa fa-clock', 'moviments');

    let cash = moviments.addMenuItem('nav-icon fa fa-coins', 'cash');
    cash.addMenuItem('nav-icon fa fa-desktop', 'budget');
    cash.addMenuItem('nav-icon fa fa-inbox', 'receivement');
    cash.addMenuItem('nav-icon fa fa-briefcase', 'payments');
    cash.addMenuItem('nav-icon fa fa-list-alt', 'receipts');
    cash.addMenuItem('nav-icon fa fa-cash-register', 'cashier');

    let flow = moviments.addMenuItem('nav-icon fa fa-retweet', 'flow');
    flow.addMenuItem('nav-icon fa fa-truck ', 'inventory');
    flow.addMenuItem('nav-icon fa fa-tasks ', 'task');
    
    let reports = menuModel.addMenuItem('nav-icon fa fa-project-diagram', 'reports');

    let financialReport = reports.addMenuItem('nav-icon fa fa-cash-register', 'financial');
    financialReport.addMenuItem('nav-icon fa fa-columns', 'dashboard');
    financialReport.addMenuItem('nav-icon fa fa-retweet', 'cash-flow');
    financialReport.addMenuItem('nav-icon fa fa-arrow-down', 'cash-flow-in');
    financialReport.addMenuItem('nav-icon fa fa-arrow-up', 'cash-flow-out');    

    let flowReport = reports.addMenuItem('nav-icon fa fa-clock', 'moviments');
    flowReport.addMenuItem('nav-icon fa fa-columns', 'dashboard');
    flowReport.addMenuItem('nav-icon fa fa-tasks', 'task');

    let helps = menuModel.addMenuItem('nav-icon fas fa-question-circle', 'help');

    let system = helps.addMenuItem('nav-icon fa fa-laptop', 'system');
    system.addMenuItem('nav-icon far fa-address-card', 'about');

    return menuModel;
  }
}
