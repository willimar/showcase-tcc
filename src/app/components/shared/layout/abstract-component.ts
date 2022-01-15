import { Translate } from "../../locales/translate";

export class AbstractComponent{

  protected translate: Translate = new Translate([]);

  public getLabel(keyName: string): string{
    return this.translate.getString(keyName);
  }
}
