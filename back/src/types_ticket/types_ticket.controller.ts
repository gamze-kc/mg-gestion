import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpException } from '@nestjs/common';
import { TypesTicketService } from './types_ticket.service';
import { CreateTypesTicketDto } from './dto/create-types_ticket.dto';
import { UpdateTypesTicketDto } from './dto/update-types_ticket.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TypeTicketEntity } from 'src/entities/type_ticket.entity';

@ApiTags('APIs concernants la gestion des TYPES de Tickets')
@Controller('types-ticket')
export class TypesTicketController {
  constructor(private readonly typesTicketService: TypesTicketService) { }


  @ApiOperation({ summary: 'Api qui permet de créer un type de ticket' })
  @ApiResponse({
    status: 201,
    description: 'Type créé'
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
          example: 'Demande',
          description: 'libelle du nouveau type'
        }
      }
    }
  })
  @Post('new')
  create(@Body() createTypesTicketDto: CreateTypesTicketDto) {
    return this.typesTicketService.create(createTypesTicketDto);
  }



  @ApiOperation({ summary: 'Api retournant la liste des types de tickes' })
  @ApiResponse({
    status: 201,
    description: 'liste renvoyé avec succès'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @Get()
  getAllUsers() {
    return this.typesTicketService.getTousLesTypes();
  }


  @ApiOperation({ summary: 'Api qui permet de récupérer un types depuis son ID' })
  @ApiResponse({
    status: 201,
    description: 'Type récupéré'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiParam({
    name: 'idType',
    description: "L'ID du type",
    example: 2
  })
  @Get("type/:idType")
  getCategorie(
    @Param('idType') idType: number
  ): Promise<TypeTicketEntity | Error> {
    try {
      return this.typesTicketService.getType(idType);
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

  @ApiOperation({ summary: 'Api qui permet modifier le statut d\'un type (mettre en actif ou inactif)' })
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
  updateActif(@Body() updateTypesTicketDto: UpdateTypesTicketDto) {
    return this.typesTicketService.updateActif(updateTypesTicketDto);
  }


}
