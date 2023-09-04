import { Module } from '@nestjs/common';
import { TypesTicketService } from './types_ticket.service';
import { TypesTicketController } from './types_ticket.controller';

@Module({
  controllers: [TypesTicketController],
  providers: [TypesTicketService],
})
export class TypesTicketModule {}
