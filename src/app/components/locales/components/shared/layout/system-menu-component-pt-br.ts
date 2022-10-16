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
      [this.getKeyName(`stakeholder`)]: "Stakeholder...",
      [this.getKeyName(`team`)]: "Equipe...",
      [this.getKeyName(`expense-type`)]: "Tipo de despesa...",
      [this.getKeyName(`person-group`)]: "Grupo de pessoa...",
      [this.getKeyName(`segment`)]: "Segmento...",

      [this.getKeyName(`products`)]: "Produtos",
      [this.getKeyName(`product`)]: "Produto...",
      [this.getKeyName(`products-type`)]: "Tipo de produto...",
      [this.getKeyName(`inventory-center`)]: "Centro de estoque...",

      [this.getKeyName(`tasks`)]: "Tarefas",
      [this.getKeyName(`planos-manutencao`)]: "Plano de ação...",
      [this.getKeyName(`task-type`)]: "Tipo de tarefa...",
      [this.getKeyName(`questionnaires`)]: "Questionário...",
      [this.getKeyName(`tags`)]: "Plavara chave...",
      [this.getKeyName(`justifications`)]: "Justificativas...",

      [this.getKeyName(`financial`)]: "Financeiros",
      [this.getKeyName(`payment-type`)]: "Tipo de pagamento...",
      [this.getKeyName(`banks`)]: "Banco...",
      [this.getKeyName(`categories`)]: "Centro de custo...",

      [this.getKeyName(`moviments`)]: "Transações",
      [this.getKeyName(`cash`)]: "Financeira",
      [this.getKeyName(`budget`)]: "Orçamento...",
      [this.getKeyName(`receivement`)]: "Conta a receber...",
      [this.getKeyName(`payments`)]: "Conta a pagar...",
      [this.getKeyName(`receipts`)]: "Faturar...",
      [this.getKeyName(`cashier`)]: "Caixa...",
      [this.getKeyName(`flow`)]: "Fluxo",
      [this.getKeyName(`inventory`)]: "Estoque...",
      [this.getKeyName(`task`)]: "Tarefa...",
      
      [this.getKeyName(`reports`)]: "Relatórios",
      [this.getKeyName(`dashboard`)]: "Dashboard...",
      [this.getKeyName(`cash-flow`)]: "Fluxo de caixa...",
      [this.getKeyName(`cash-flow-in`)]: "Recebimentos...",
      [this.getKeyName(`cash-flow-out`)]: "Pagamentos...",

      [this.getKeyName(`help`)]: "Ajuda",
      [this.getKeyName(`system`)]: "Sistema",
      [this.getKeyName(`about`)]: "Sobre...",

      [this.getKeyName(`header-menu`)]: "SHOWCASE - MENU",      
    };

    return result;
  }
}

