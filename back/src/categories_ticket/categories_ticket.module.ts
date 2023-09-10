import { Module } from '@nestjs/common';
import { CategoriesTicketService } from './categories_ticket.service';
import { CategoriesTicketController } from './categories_ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieTicketEntity } from 'src/entities/categorie_ticket.entity';
import { TicketEntity } from 'src/entities/ticket.entity';

@Module({
  imports : [TypeOrmModule.forFeature([TicketEntity, CategorieTicketEntity])],
  controllers: [CategoriesTicketController],
  providers: [CategoriesTicketService],
})
export class CategoriesTicketModule {}
