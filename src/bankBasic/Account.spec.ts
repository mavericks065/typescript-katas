import {Account} from "./Account";


describe("When having an account", () => {
  it("should be able to get the current balance", () => {
    const account = new Account();
    const balance = account.getBalance()
    expect(balance).toBe(0);
  });
  it('should be able to do a deposit and increase the current balance by the deposit', function () {
    const account = new Account();
    account.deposit(100);
    const balance = account.getBalance()
    expect(balance).toBe(100);
  });
});