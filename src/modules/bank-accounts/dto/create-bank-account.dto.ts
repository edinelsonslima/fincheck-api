import { BankAccount, BankAccountType } from '@prisma/client';

export class CreateBankAccountDto implements OmitId<BankAccount> {
  id: string;

  userId: string;

  initialBalance: number;
  name: string;
  color: string;
  type: BankAccountType;
}
