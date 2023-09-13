import { Module } from '@nestjs/common';
import { CommentairesService } from './commentaires.service';
import { CommentairesController } from './commentaires.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketEntity } from 'src/entities/ticket.entity';
import { UserEntity } from 'src/entities/user.entity';
import { CommentaireEntity } from 'src/entities/commentaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommentaireEntity, UserEntity,TicketEntity])],
  controllers: [CommentairesController],
  providers: [CommentairesService],
  exports: [CommentairesService]
})
export class CommentairesModule {}
