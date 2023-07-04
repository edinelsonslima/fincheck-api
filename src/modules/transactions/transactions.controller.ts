import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TransactionType } from '@prisma/client';
import { ActiveUserId } from 'src/shared/decorators/active-user-id';
import { OptionalParseEnumPipe } from 'src/shared/pipes/optional-parse-enum-pipe';
import { OptionalParseUUIDPipe } from 'src/shared/pipes/optional-parse-uuid-pipe';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsService } from './services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(
    @ActiveUserId() userId: string,
    @Body() createTransactionDto: CreateTransactionDto,
  ) {
    return this.transactionsService.create(userId, createTransactionDto);
  }

  @Get()
  async findAllByUserId(
    @ActiveUserId() userId: string,
    @Query('year', ParseIntPipe) year: number,
    @Query('month', ParseIntPipe) month: number,
    @Query('bankAccountId', OptionalParseUUIDPipe) bankAccountId?: string,
    @Query('type', new OptionalParseEnumPipe(TransactionType))
    type?: TransactionType,
  ) {
    return this.transactionsService.findAllByUserId(userId, {
      type,
      year,
      month,
      bankAccountId,
    });
  }

  @Put(':transactionId')
  update(
    @ActiveUserId() userId: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
    @Param('transactionId', ParseUUIDPipe) transactionId: string,
  ) {
    return this.transactionsService.update(
      userId,
      transactionId,
      updateTransactionDto,
    );
  }

  @Delete(':transactionId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @ActiveUserId() userId: string,
    @Param('transactionId', ParseUUIDPipe) transactionId: string,
  ) {
    return this.transactionsService.remove(userId, transactionId);
  }
}
