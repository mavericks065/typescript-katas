export class NegativeBankServiceStub implements BankService {
    isCustomerForbiddenToWithdraw(userId: number): boolean {
        return false;
    }
}