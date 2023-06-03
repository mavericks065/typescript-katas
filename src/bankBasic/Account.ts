export class Account {
  private amount: number = 0;

  getBalance(): number {
    return this.amount;
  }
  deposit(amount: number) {
    this.amount += amount;
  }
}
