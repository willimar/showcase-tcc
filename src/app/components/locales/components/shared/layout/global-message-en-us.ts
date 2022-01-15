import { Locale } from "../../../locales";
import { TranslateBase } from "../../../translate-base";

export class GlobalMessageEnUs extends TranslateBase {
  constructor() {
    super();

    this.locale = Locale.enUs;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`global-required-field-message`)]: "Check the required fields",
      [this.getKeyName(`global-save-success`)]: "Data sent to server",
      [this.getKeyName(`global-save-error`)]: "Fail saving data",
      [this.getKeyName(`global-save-routed-false`)]: "Unknown route",
      [this.getKeyName(`record-error-no-records`)]: "None record selected",
      [this.getKeyName(`register-date-label`)]: "Register date",
      [this.getKeyName(`last-chage-date-label`)]: "Latest change",
    };

    return result;
  }
}
