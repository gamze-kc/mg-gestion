import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TypesTicketService } from './types_ticket.service';
import { CreateTypesTicketDto } from './dto/create-types_ticket.dto';
import { UpdateTypesTicketDto } from './dto/update-types_ticket.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('APIs concernants la gestion des TYPE de Tickets')
@Controller('types-ticket')
export class TypesTicketController {
  constructor(private readonly typesTicketService: TypesTicketService) { }


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
        libelle: {
          type: 'string',
          example: 'Materiel',
          description: 'libelle de la nouvelle catégorie'
        }
      }
    }
  })
  @Post('new')
  create(@Body() createTypesTicketDto: CreateTypesTicketDto) {
    return this.typesTicketService.create(createTypesTicketDto);
  }

  @ApiOperation({ summary: 'Api qui permet modifier le statut d\'une catégorie (mettre en actif ou inactif)' })
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
          description: 'id de la catégorie à modifier'
        },
        actif: {
          type: 'string',
          example: 'INACTIF',
          description: 'nouveau statut à assigner à la catégorie'
        }
      }
    }
  })
  @Put('update_statut')
  updateActif( @Body() updateTypesTicketDto: UpdateTypesTicketDto) {
    return this.typesTicketService.updateActif(updateTypesTicketDto);
  }


}
