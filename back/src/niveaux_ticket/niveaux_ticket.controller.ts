import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, Put } from '@nestjs/common';
import { NiveauxTicketService } from './niveaux_ticket.service';
import { CreateNiveauxTicketDto } from './dto/create-niveaux_ticket.dto';
import { UpdateNiveauxTicketDto } from './dto/update-niveaux_ticket.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NiveauTicketEntity } from 'src/entities/niveau_ticket.entity';

@ApiTags('APIs concernants la gestion des NIVEAUX de Tickets')

@Controller('niveau-ticket')
export class NiveauxTicketController {
  constructor(private readonly niveauxTicketService: NiveauxTicketService) { }

  @ApiOperation({ summary: 'Api qui permet de créer un niveau' })
  @ApiResponse({
    status: 201,
    description: 'Niveau créé'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiBody({
    schema: {
      properties: {
        libelle: {
          type: 'string',
          example: 'Niveau 1',
          description: 'libelle de la nouvelle catégorie'
        }
      }
    }
  })
  @Post('new')
  async create(@Body() createNiveauxTicketDto: CreateNiveauxTicketDto) {

    try {
      return await this.niveauxTicketService.create(createNiveauxTicketDto);

    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }

  }

  @ApiOperation({ summary: 'Api qui permet de récupérer la liste des niveaux' })
  @ApiResponse({
    status: 201,
    description: 'Catégories récupérées'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @Get()
  async getAllNiveaux() {
    try {

      return this.niveauxTicketService.getAllNiveaux();
    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récuperation de la catégorie ' + error.message,
        500,
      );
    }
  }



  @ApiOperation({ summary: 'Api qui permet de récupérer un niveau depuis son ID' })
  @ApiResponse({
    status: 201,
    description: 'Niveau récupéré'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiParam({
    name: 'idNiveau',
    description: "L'ID du niveau",
    example: 1
  })
  @Get('niveau/:idNiveau')
  async findOne(@Param('idNiveau') idNiveau: number): Promise<NiveauTicketEntity|Error>{
    try{

      return this.niveauxTicketService.getNiveau(idNiveau);
    }catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récuperation du niveau ' + error.message,
        500,
      );
    }

  }

 
  @ApiOperation({ summary: 'Api qui permet modifier le statut d\'un niveau (mettre en actif ou inactif)' })
  @ApiResponse({
    status: 201,
    description: 'Satut modifié'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiBody({
    schema: {
      properties: {
        id: {
          type: 'number',
          example: 1,
          description: 'id du type à modifier'
        },
        actif: {
          type: 'string',
          example: 'INACTIF',
          description: 'nouveau statut à assigner au type'
        }
      }
    }
  })
  @Put('update_statut')
  async updateActif(@Body() updateNiveauTicketDto: UpdateNiveauxTicketDto) {
    try{
      return this.niveauxTicketService.updateActif(updateNiveauTicketDto);
    }catch(error)
    {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récuperation de la catégorie ' + error.message,
        500,

      )
    }
  }
}
