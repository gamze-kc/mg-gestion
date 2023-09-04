import { Module } from '@nestjs/common';
import { TypesTicketService } from './types_ticket.service';
import { TypesTicketController } from './types_ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from 'src/entities/ticket.entity';
import { TypeTicketEntity } from 'src/entities/type_ticket.entity';

@Module({
  imports : [TypeOrmModule.forFeature([TicketEntity, TypeTicketEntity])],
  controllers: [TypesTicketController],
  providers: [TypesTicketService],
  exports: [TypesTicketService]
})
export class TypesTicketModule {}
