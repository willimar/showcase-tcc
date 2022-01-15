import { Locale } from "../../../locales";
import { TranslateBase } from "../../../translate-base";

export class SystemMenuEnUs extends TranslateBase{
  constructor() {
    super();

    this.locale = Locale.enUs;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`goto-home`)]: "Go to home page",
      [this.getKeyName(`register`)]: "Cadastro",
      [this.getKeyName(`transaction`)]: "Transação",
      [this.getKeyName(`report`)]: "Relatório",
      [this.getKeyName(`help`)]: "Ajuda"
    };

    return result;
  }
}
