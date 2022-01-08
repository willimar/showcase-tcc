import { Locale } from "src/app/components/locales/locales";
import { TranslateBase } from "src/app/components/locales/translate-base";

export class PersonTypePtBr extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.ptBR;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`tab-title`)]: 'Tipo de pessoa',
      [this.getKeyName(`person-type-form-tab`)]: 'Tipo de pessoa',
      [this.getKeyName(`name`)]: 'Nome',
      [this.getKeyName(`person-type-info-title`)]: 'Informações do tipo',
      [this.getKeyName(`name-error-message`)]: 'Nome do tipo de pessoa é obrigatório',
      [this.getKeyName(`name-message`)]: 'Informe o nome do tipo de pessoa...',
    };

    return result;
  }
}
