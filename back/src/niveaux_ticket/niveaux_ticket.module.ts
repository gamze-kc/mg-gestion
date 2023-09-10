import { Module } from '@nestjs/common';
import { NiveauxTicketService } from './niveaux_ticket.service';
import { NiveauxTicketController } from './niveaux_ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NiveauTicketEntity } from 'src/entities/niveau_ticket.entity';
import { TicketEntity } from 'src/entities/ticket.entity';

@Module({
  imports : [TypeOrmModule.forFeature([TicketEntity, NiveauTicketEntity])],
  controllers: [NiveauxTicketController],
  providers: [NiveauxTicketService],
  exports: [NiveauxTicketService]
})
export class NiveauxTicketModule {}
