import { Locale } from "src/app/components/locales/locales";
import { TranslateBase } from "src/app/components/locales/translate-base";

export class PersonTypeEnUs extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.enUs;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`tab-title`)]: "Person type",
      [this.getKeyName(`person-type-form-tab`)]: 'Person type',
      [this.getKeyName(`name`)]: 'Name',
      [this.getKeyName(`person-type-info-title`)]: 'Person type\'s information',
      [this.getKeyName(`name-error-message`)]: 'Types\'s name is required',
      [this.getKeyName(`name-message`)]: 'Person types\'s name...',
    };

    return result;
  }
}
