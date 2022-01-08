import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MenuItemModel, MenuModel } from "src/app/models/shared/menu-model";
import { BaseService } from "./base-service";

@Injectable({
  providedIn: 'root'
})
export class MenuSerice extends BaseService<MenuModel> {
  constructor(public http: HttpClient){
    super();
    this.entity = new MenuModel();
    this.controller = 'menu';
    this.viewName = 'menu';
  }

  public getMenu(): MenuModel {
    let menuModel = new MenuModel();

    let register = menuModel.addMenuItem('nav-icon fa fa-list-alt', 'register');

    let people = register.addMenuItem('nav-icon fa fa-users', 'people');
    people.addMenuItem('nav-icon fa fa-address-card', 'person-type');
    people.addMenuItem('nav-icon fa fa-flag', 'person-group');
    people.addMenuItem('nav-icon fas fa-user-friends', 'person');

    let product = register.addMenuItem('nav-icon fa fa-microchip', 'products');
    product.addMenuItem('nav-icon fa fa-cubes', 'product-feature');
    product.addMenuItem('nav-icon fa fa-object-group', 'product-group');
    product.addMenuItem('nav-icon fa fa-object-group', 'product-sub-group');
    product.addMenuItem('nav-icon fa fa-archive', 'product');

    let transactions = register.addMenuItem('nav-icon fa fa-sitemap', 'transactions');
    transactions.addMenuItem('nav-icon fa fa-store-alt', 'purchase-order');
    transactions.addMenuItem('nav-icon fa fa-shopping-cart', 'sale-order');
    transactions.addMenuItem('nav-icon fa fa-truck-loading', 'product-check-in');
    transactions.addMenuItem('nav-icon fa fa-luggage-cart', 'product-check-out');
    transactions.addMenuItem('nav-icon fa fa-cash-register', 'cash-flow');

    let reports = menuModel.addMenuItem('nav-icon fa fa-project-diagram', 'reports');

    let helps = menuModel.addMenuItem('nav-icon fas fa-question-circle', 'help');

    let system = helps.addMenuItem('nav-icon fa fa-laptop', 'system');

    system.addMenuItem('nav-icon far fa-address-card', 'about');

    return menuModel;
  }
}
