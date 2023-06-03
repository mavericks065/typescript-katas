export class Transaction {
  private amount: number;
  private date: number;

  constructor(amount: number, date: number) {
    this.amount = amount;
    this.date = date;
  }
  getAmount(): number {
    return this.amount;
  }
}

export class Account {
  private transactions: Transaction[] = [];

  getBalance(): number {
    if (this.transactions.length === 0) {
      return 0;
    }
    return this.transactions
      .map(transaction => transaction.getAmount())
      .reduceRight((x, y) => x + y);
  }

  deposit(depositAmt: number) {
    this.transactions.push(new Transaction(depositAmt, Date.now()))
  }

  withdraw(withdrawnAmt: number) {
    this.transactions.push(new Transaction(-withdrawnAmt, Date.now()))
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }
}
