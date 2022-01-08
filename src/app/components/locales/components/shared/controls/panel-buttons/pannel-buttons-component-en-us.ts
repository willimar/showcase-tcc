import { Locale } from "src/app/components/locales/locales";
import { TranslateBase } from "src/app/components/locales/translate-base";

export class PannelButtonEnUs extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.ptBR;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`new`)]: "New",
      [this.getKeyName(`edit`)]: "Edit",
      [this.getKeyName(`save`)]: "Save",
      [this.getKeyName(`cancel`)]: "Cancel",
      [this.getKeyName(`delete`)]: "Delete",
      [this.getKeyName(`search`)]: "Search",
    };

    return result;
  }
}
