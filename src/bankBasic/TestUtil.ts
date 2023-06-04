export class NegativeBankServiceStub implements BankService {
    isCustomerForbiddenToWithdraw(userId: number): boolean {
        return false;
    }
}
export class PositiveBankServiceStub implements BankService {
    isCustomerForbiddenToWithdraw(userId: number): boolean {
        return true;
    }
}