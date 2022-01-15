import { SystemSetup } from "src/app/services/system/system-setup";
import { TranslateBase } from "./translate-base";

export class Translate {
  constructor(private translator: TranslateBase[])
  {

  }

  getString(key: string): string {
    let flag: string = SystemSetup.locale;

    if (SystemSetup.locale.length > 0) {
      flag = `-${flag}`
    }

    let result: string = "";

    this.translator.forEach(element => {
      let keyValue = element.messages[`${key}${flag}`];

      if (keyValue) {
        result = keyValue;
      }
    });

    if(result === "" || result === undefined) {
      result = key;
    }

    return result;
  }
}
