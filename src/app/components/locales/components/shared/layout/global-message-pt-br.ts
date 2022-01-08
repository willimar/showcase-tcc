import { Locale } from "../../../locales";
import { TranslateBase } from "../../../translate-base";

export class GlobalMessagePtBr extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.ptBR;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`global-required-field-message`)]: "Verifique os campos obrigatórios",
      [this.getKeyName(`global-save-success`)]: "Dados enviados ao servidor",
      [this.getKeyName(`global-save-error`)]: "Falha ao enviar dados",
      [this.getKeyName(`global-save-routed-false`)]: "Rota desconhecida",
      [this.getKeyName(`record-error-no-records`)]: "Registro não selecionado",
      [this.getKeyName(`register-date-label`)]: "Data de cadastro",
      [this.getKeyName(`last-chage-date-label`)]: "Última modificação",
    };

    return result;
  }
}
