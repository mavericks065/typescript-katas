export class Account {
  private amount: number = 0;

  getBalance(): number {
    return this.amount;
  }
  deposit(depositAmt: number) {
    this.amount += depositAmt;
  }
  withdraw(withdrawnAmt: number) {
    this.amount -= withdrawnAmt;
  }
}
