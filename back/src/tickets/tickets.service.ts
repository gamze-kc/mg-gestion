import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { TicketEntity } from 'src/entities/ticket.entity';
import { TicketEtatEnum } from 'src/enums/ticket-etat.enum';
import { cp } from 'fs';

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
      monticket.date_creation = new Date();
      monticket.objet = ticketData.objet;
      monticket.description = ticketData.description;
      monticket.categorie = ticketData.categorie;
      monticket.type = ticketData.type;
      monticket.piece_jointe = "";
      monticket.etat = TicketEtatEnum.NOUVEAU
      monticket.id_user_support = null;
      console.log(monticket);
      const newTicket = await this.ticketRepository.save({...monticket});
      
      return newTicket;
      
    } catch (error) {
      return error;
    }
  }
  
async getTicketParId(id: number) : Promise<TicketEntity>{
  try{
    
    return this.ticketRepository.findOneBy({id : id});
  }
  catch (error) {
    return error;
  }
}

async getTousLesTickets() : Promise<TicketEntity[]>{

  try{
    return this.ticketRepository.find();
  }
  catch(error)
  {
    return error;
  }
}


  findAll() {
    return `This action returns all tickets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
