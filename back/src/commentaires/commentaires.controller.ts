import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { CommentairesService } from './commentaires.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentaireEntity } from 'src/entities/commentaire.entity';

@ApiTags('APIs concernants la gestion des Commentaires')
@Controller('commentaires')
export class CommentairesController {
  constructor(private readonly commentairesService: CommentairesService) {}

  
  @ApiOperation({ summary: 'Api qui permet de poster un commentaire' })
  @ApiResponse({
    status: 201,
    description: 'commentaire créé'
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
        texte: {
          type: 'string',
          example: 'Voici le texte que jenvoie ldldlmsjfdsijf,',
          description: 'corps du message'
        },
        id_ticket: {
          type: 'number',
          example: '1',
          description: 'id du ticket sou lequel on poste le commentaire'
        }
       
      }
    }
  })
  @Post()
  async create(@Body() createCommentaireDto: CreateCommentaireDto) : Promise<CommentaireEntity | Error>{

    try{
      
      return this.commentairesService.create(createCommentaireDto);


    }catch(error)
    {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
    }

    // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
    throw new HttpException(
        'Erreur lors de la création du message : ' + error.message,
        500,
    );
    }
 
  }

  @ApiOperation({ summary: 'Api qui permet de supprimer un commentaire' })
  @ApiResponse({
    status: 201,
    description: 'commentaire supprimé'
  })
  @ApiResponse({
    status: 400,
    description: 'Requète incorrecte'
  })
  @ApiParam({
    name : 'idCommentaire',
    description : 'Id du ticket',
    example : 1
  })
  @Delete(':id')
  remove(@Param('idCommentaire') id: number) {
    return this.commentairesService.remove(id);
  }
}
