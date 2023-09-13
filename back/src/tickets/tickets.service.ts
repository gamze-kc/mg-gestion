import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { TicketEntity } from 'src/entities/ticket.entity';
import { EtatTicketEnum } from 'src/enums/etat-ticket.enum';
import { cp } from 'fs';
import { NiveauTicketEnum } from 'src/enums/niveau-ticket';

@Injectable()
export class TicketsService {

  constructor(
    @InjectRepository(TicketEntity)
    private ticketRepository: Repository<TicketEntity>,

    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

  ) { }

  async create(ticketData: CreateTicketDto): Promise<TicketEntity> {
    try {
      // Recherche de l'utilisateur par ID
      const user = await this.userRepository.findOneBy({ id: +ticketData.id_proprietaire });
      let monticket = new TicketEntity();

      monticket.id_proprietaire = user.id;
      monticket.objet = ticketData.objet;
      monticket.description = ticketData.description;
      monticket.id_categorie_ticket = ticketData.id_categorie;
      monticket.id_type_ticket = ticketData.id_type;
      monticket.piece_jointe = ticketData.piece_jointe;
      monticket.niveau = NiveauTicketEnum.NIVEAU_1;
      monticket.date_creation = new Date();
      monticket.etat = EtatTicketEnum.NOUVEAU
      monticket.id_user_support = null;
      
      const newTicket = await this.ticketRepository.save({ ...monticket });

      return newTicket;

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la création du ticket :  ' + error.message,
        500,
      );
    }
  }

  async getTicketParId(id: number): Promise<TicketEntity> {
    try {
      return await this.ticketRepository.findOne({where:{
        id,
      }, 
      relations: ['commentaires'],
      });
    }
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération du ticket et des commentaires :  ' + error.message,
        500,
      );  
    }
  }

  async getTousLesTickets(): Promise<TicketEntity[]> {

    try {
      return this.ticketRepository.find();
    }
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération de tous les tickets :  ' + error.message,
        500,
      );
    }
  }



}
