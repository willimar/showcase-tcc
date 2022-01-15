export class MenuModel {
  public rootMenu!: MenuItemModel[];

  constructor(){
    this.rootMenu = [];
  }

  addMenuItem(classImage: string, actionRouter: string): MenuItemModel{
    let menuItem = new MenuItemModel();

    menuItem.classImage = classImage;
    menuItem.actionRouter = actionRouter;

    this.rootMenu.push(menuItem);

    return menuItem;
  }
}
export class MenuItemModel {
  public classImage!: string;
  public actionRouter!: string;
  public menuItems!: MenuItemModel[];

  constructor() {
    this.menuItems = [];
  }

  addMenuItem(classImage: string, actionRouter: string): MenuItemModel{
    let menuItem = new MenuItemModel();

    menuItem.classImage = classImage;
    menuItem.actionRouter = actionRouter;

    this.menuItems.push(menuItem);

    return menuItem;
  }
}
