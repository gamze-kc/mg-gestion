import { Controller, Get, Post, Body, Patch, Put, Param, Delete, HttpException } from '@nestjs/common';
import { CategoriesTicketService } from './categories_ticket.service';
import { CreateCategoriesTicketDto } from './dto/create-categories_ticket.dto';
import { UpdateCategoriesTicketDto } from './dto/update-categories_ticket.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CategorieTicketEntity } from 'src/entities/categorie_ticket.entity';

@ApiTags('APIs concernants la gestion des CATEGORIES de Tickets')
@Controller('categories-ticket')
export class CategoriesTicketController {
  constructor(private readonly categoriesTicketService: CategoriesTicketService) { }

  @ApiOperation({ summary: 'Api qui permet de créer une categorie ' })
  @ApiResponse({
    status: 201,
    description: 'Catégorie créé'
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
  async create(@Body() createCategoriesTicketDto: CreateCategoriesTicketDto): Promise<CategorieTicketEntity | Error> {
    try {

      return await this.categoriesTicketService.create(createCategoriesTicketDto);

    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
    }
  }

  @ApiOperation({ summary: 'Api qui permet de récupérer la liste des catégories' })
  @ApiResponse({
    status: 201,
    description: 'Catégories récupérées'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @Get()
  getAllCategories() {
    return this.categoriesTicketService.getAllCategories();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriesTicketDto: UpdateCategoriesTicketDto) {
    return this.categoriesTicketService.update(+id, updateCategoriesTicketDto);
  }

}
