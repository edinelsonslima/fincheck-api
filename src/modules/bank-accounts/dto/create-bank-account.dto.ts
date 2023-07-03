import { BankAccount, BankAccountType } from '@prisma/client';
import { IsEnum, IsHexColor, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;
}
