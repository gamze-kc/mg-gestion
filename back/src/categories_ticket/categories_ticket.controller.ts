import { Controller, Get, Post, Body, Patch, Put, Param, Delete, HttpException } from '@nestjs/common';
import { CategoriesTicketService } from './categories_ticket.service';
import { CreateCategoriesTicketDto } from './dto/create-categories_ticket.dto';
import { UpdateCategoriesTicketDto } from './dto/update-categories_ticket.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { CategorieTicketEntity } from 'src/entities/categorie_ticket.entity';
import { UserRoleEnum } from 'src/enums/role-user.enum';

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
        },
        couleur: {
          type: 'string',
          example: 'blue',
          description: 'couleur de la nouvelle catégorie'
        },
        icone: {
          type: 'string',
          example: 'pi-circle-on',
          description: 'icone de la nouvelle catégorie'
        }
      }
    }
  })
  @Post('new')
  async create(@Body() createCategoriesTicketDto: CreateCategoriesTicketDto): Promise<CategorieTicketEntity | Error> {
    try {

      return await this.categoriesTicketService.create(createCategoriesTicketDto);

    } catch (error) {
       // Si l'erreur est une instance de HttpException, la renvoyer directement
       if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la création de la catégorie :  ' + error.message,
        500,
      );
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



  


  @ApiOperation({ summary: 'Api qui permet de récupérer une catégorie depuis son ID' })
  @ApiResponse({
    status: 201,
    description: 'Catégorie récupérée'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiParam({
    name: 'idCategorie',
    type : 'number',
    description: "L'ID de la categorie",
    example: 2
  })
  @Get("categorie/:idCategorie")
  getCategorie(
    @Param('idCategorie') idCategorie: number
  ): Promise<CategorieTicketEntity | Error> {
    try {
      console.log(idCategorie);
      return this.categoriesTicketService.getCategorie(idCategorie);
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
  updateActif(@Body() updateCategoriesTicketDto: UpdateCategoriesTicketDto) {
    try{
      return this.categoriesTicketService.update(updateCategoriesTicketDto);
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

      );
    }
  }

}

