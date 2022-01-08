import { Locale } from "src/app/components/locales/locales";

export class SystemSetup {
  public static authToken: string;
  public static brokerUser: string = 'Z3Vlc3Q6Z3Vlc3Q=';
  public static brokerUrl: string = 'http://localhost:8080';
  public static popupTimer: number = 5000;
  public static locale: Locale = Locale.ptBR;
  public static systemSource: string = 'ShowCase';
}
