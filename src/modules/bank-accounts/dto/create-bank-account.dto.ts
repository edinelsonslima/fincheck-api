import { BankAccount, BankAccountType } from '@prisma/client';
import { IsHexColor, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBankAccountDto
  implements OmitIdAndKeys<BankAccount, 'userId'>
{
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  type: BankAccountType;
}
