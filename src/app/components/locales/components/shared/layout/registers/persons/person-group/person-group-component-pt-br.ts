import { Locale } from "src/app/components/locales/locales";
import { TranslateBase } from "src/app/components/locales/translate-base";

export class PersonGroupPtBr extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.ptBR;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`tab-title`)]: 'Grupo de pessoa',
      [this.getKeyName(`person-group-form-tab`)]: 'Grupo de pessoa',
      [this.getKeyName(`name`)]: 'Nome',
      [this.getKeyName(`person-group-info-title`)]: 'Informações do grupo',
      [this.getKeyName(`name-error-message`)]: 'Nome do grupo de pessoa é obrigatório',
      [this.getKeyName(`name-message`)]: 'Informe o nome do grupo de pessoa...',
      [this.getKeyName(`person-group-form-permissions-tab`)]: 'Controle de acesso',
    };

    return result;
  }
}
