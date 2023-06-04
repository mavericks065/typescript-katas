interface BankService {
    isCustomerForbiddenToWithdraw(userId: number): boolean;
}