import { Global, Module } from '@nestjs/common';
import { BankAccountsRepository } from '../repositories/bank-accounts.repositories';
import { CategoriesRepository } from '../repositories/categories.repositories';
import { UsersRepository } from '../repositories/users.repositories';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountsRepository],
})
export class DatabaseModule {}
