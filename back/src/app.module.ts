import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserEntity } from './entities/user.entity';
import { TicketEntity } from './entities/ticket.entity';
import { TicketsModule } from './tickets/tickets.module';
import { CommentairesModule } from './commentaires/commentaires.module';
import { CommentaireEntity } from './entities/commentaire.entity';
import { TypesTicketModule } from './types_ticket/types_ticket.module';
import { TypeTicketEntity } from './entities/type_ticket.entity';
import { CategoriesTicketModule } from './categories_ticket/categories_ticket.module';
import { CategorieTicketEntity } from './entities/categorie_ticket.entity';
import { NiveauxTicketModule } from './niveaux_ticket/niveaux_ticket.module';
import { NiveauTicketEntity } from './entities/niveau_ticket.entity';
import { MessagesModule } from './messages/messages.module';
import { MessageEntity } from './entities/message.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'mggestion',
      entities: [UserEntity, TicketEntity, CommentaireEntity, TypeTicketEntity, CategorieTicketEntity, NiveauTicketEntity, MessageEntity],
      synchronize: true,
    }),
    UsersModule,
    TicketsModule,
    CommentairesModule,
    TypesTicketModule,
    CategoriesTicketModule,
    NiveauxTicketModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
