import {Account, Transaction} from "./Account";

describe("When having an account", () => {
  it("should be able to get the current balance", () => {
    const account = new Account();
    const balance = account.getBalance()
    expect(balance).toBe(0);
  });
  it('should be able to do a deposit and increase the current balance by the deposit', () => {
    const account = new Account();
    account.deposit(100);
    const balance = account.getBalance()
    expect(balance).toBe(100);
  });
  it('should be able to withdraw and decrease the balance of the account', () => {
    const account = new Account();
    account.deposit(100);
    account.withdraw(10);
    const balance = account.getBalance();
    expect(balance).toBe(90);
  });
  it('should be able to return the list of transactions', () => {
    const expectedTransactions = [
      new Transaction(100, new Date('2023-05-05T12:23:43.450').valueOf()),
      new Transaction(-10, new Date('2023-05-06T12:32:43.450').valueOf()),
    ];
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() =>
      new Date('2023-05-05T12:23:43.450').valueOf()
    ).mockImplementationOnce(() =>
      new Date('2023-05-06T12:32:43.450').valueOf()
    );

    const account = new Account();
    account.deposit(100);
    account.withdraw(10);

    const transactions: Transaction[] = account.getTransactions();

    expect(transactions).toEqual(expectedTransactions)
  });
});
