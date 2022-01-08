import { Locale } from "./locales";

export class TranslateBase {
  public messages: { [id: string] : string; } = {};

  protected locale: Locale = Locale.ptBR;

  protected getKeyName(key: string): string {
    return key + "-" + this.locale;
  }
}
