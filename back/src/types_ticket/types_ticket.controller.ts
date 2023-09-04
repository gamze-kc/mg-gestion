import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesTicketService } from './types_ticket.service';
import { CreateTypesTicketDto } from './dto/create-types_ticket.dto';
import { UpdateTypesTicketDto } from './dto/update-types_ticket.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
          description: 'id de l\'utilisateur'
        }
      }
    }
  })
  @Post('new')
  create(@Body() createTypesTicketDto: CreateTypesTicketDto) {
    return this.typesTicketService.create(createTypesTicketDto);
  }

  @Get()
  findAll() {
    return this.typesTicketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesTicketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypesTicketDto: UpdateTypesTicketDto) {
    return this.typesTicketService.update(+id, updateTypesTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesTicketService.remove(+id);
  }
}
