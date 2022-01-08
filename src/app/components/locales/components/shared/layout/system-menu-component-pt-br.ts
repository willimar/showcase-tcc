import { Locale } from "../../../locales";
import { TranslateBase } from "../../../translate-base";

export class SystemMenuPtBr extends TranslateBase{
  constructor() {
    super();

    this.locale = Locale.ptBR;
    this.messages = this.getMessages();
  }

  private getMessages(): { [id: string] : string; } {
    let result: { [id: string]: string; } = {
      [this.getKeyName(`register`)]: "Cadastros",
      [this.getKeyName(`people`)]: "Pessoas",
      [this.getKeyName(`person-type`)]: "Tipo...",
      [this.getKeyName(`person-group`)]: "Grupo...",
      [this.getKeyName(`person`)]: "Pessoa...",
      [this.getKeyName(`products`)]: "Produtos",
      [this.getKeyName(`product-feature`)]: "Características...",
      [this.getKeyName(`product-group`)]: "Grupo...",
      [this.getKeyName(`product-sub-group`)]: "Subgrupo...",
      [this.getKeyName(`product`)]: "Produto...",
      [this.getKeyName(`transactions`)]: "Transações",
      [this.getKeyName(`purchase-order`)]: "Pedido de compras...",
      [this.getKeyName(`sale-order`)]: "Pedido de venda...",
      [this.getKeyName(`product-check-in`)]: "Entrada de estoque...",
      [this.getKeyName(`product-check-out`)]: "Saída de estoque...",
      [this.getKeyName(`cash-flow`)]: "Fluxo de caixa...",
      [this.getKeyName(`reports`)]: "Relatórios",
      [this.getKeyName(`help`)]: "Ajuda",
      [this.getKeyName(`system`)]: "Sistema",
      [this.getKeyName(`about`)]: "Sobre...",
    };

    return result;
  }
}
