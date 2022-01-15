import { Locale } from "src/app/components/locales/locales";
import { TranslateBase } from "src/app/components/locales/translate-base";

export class PannelButtonPtBr extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.ptBR;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`new`)]: "Novo",
      [this.getKeyName(`edit`)]: "Editar",
      [this.getKeyName(`save`)]: "Salvar",
      [this.getKeyName(`cancel`)]: "Cancelar",
      [this.getKeyName(`delete`)]: "Excluir",
      [this.getKeyName(`search`)]: "Localizar",
    };

    return result;
  }
}
