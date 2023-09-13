import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { TicketEntity } from 'src/entities/ticket.entity';
import { NiveauTicketEnum } from 'src/enums/niveau-ticket';

@ApiTags('APIs concernants la gestion des tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) { }



  @ApiOperation({ summary: 'Api qui permet de créer un ticket' })
  @ApiResponse({
    status: 201,
    description: 'Ticket créé'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiBody({
    schema: {
      properties: {
        id_proprietaire: {
          type: 'number',
          example: '1',
          description: 'id de l\'utilisateur'
        },
        objet: {
          type: 'string',
          example: 'Demande d\'un nouvel écran ',
          description: 'objet du ticket'
        },
        description: {
          type: 'string',
          example: 'Mon ecran actuelle a quelques soucis, donc j\'aimerai savoir s\'il est possible d\'en avoir un nouveau',
          description: 'description de la demande'
        },
        id_categorie: {
          type: 'number',
          example: 1,
          description: 'catégorie du ticket'
        },
        id_type: {
          type: 'number',
          example: 1,
          description: 'type du ticket '
        },
        piece_jointe: {
          type: 'string',
          example: 'inserer_exemple_piece_jointe',
          description: 'piece jointe rattaché au ticket'
        } 
      }
    }
  })

  @Post('new')
  async create(@Body() createTicketDto: CreateTicketDto): Promise<TicketEntity | Error> {

    try {

      //console.log(createTicketDto);
      const newTicket = await this.ticketsService.create(createTicketDto);

      //console.log(newTicket);
      return newTicket;

    }
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la création du ticket : ' + error.message,
        500,
      );
    }
  }


  @ApiOperation({ summary: 'Api qui permet de retourner tous les tickets' })
  @ApiResponse({
    status: 201,
    description: 'Tickets retournés'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @Get()
  async getTousLesTickets(
  ) : Promise<TicketEntity[]| Error> {
    try
    {
      return this.ticketsService.getTousLesTickets();
    }
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }
    }

  }

  
  @ApiOperation({ summary: 'Api qui permet de retourner tous les tickets avec les commentaires, du user connecté' })
  @ApiResponse({
    status: 201,
    description: 'Tickets retournés'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiParam({
    name : 'idUser',
    description : 'Id de l\'utilisateur connecté',
    example : 1
  })
  @Get('user/:id')
  async getTousLesTicketsUser(
    @Param('idUser') idUser : number
  ) : Promise<TicketEntity[]| Error> {
    try
    {
      return this.ticketsService.getTousLesTicketsUser(idUser);
    }
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }
    }

  }





  @ApiOperation({ summary: 'Api qui permet d\'avoir les details d\'un ticket depuis son id et les commentaires qui va avec' })
  @ApiResponse({
    status: 201,
    description: 'Ticket retourné '
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiParam({
   
    name : 'idTicket',
    description : 'Id du ticket',
    example : 1
  })

  @Get(':id')
  async getTicketParId(
    @Param('idTicket') idTicket : number 
  ) : Promise<TicketEntity| Error> {
   {
    try {
      const ticket = await this.ticketsService.getTicketParId(idTicket)
      return ticket;

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  



  



/*
  @Get('/tickets')
  getTousLesTickets() {
    return this.ticketsService.findAll();
  }

  @Get('/tickets/user/:id')
  getTicketsUser() {
    return this.ticketsService.findAll();
  }








  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(+id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(+id);*/
  }
}


