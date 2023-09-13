import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('APIs concernants la gestion des messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}


  
  @ApiOperation({ summary: 'Api qui permet de créer un message' })
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
        objet: {
          type: 'string',
          example: 'Information sur le materiel',
          description: 'objet du message'
        },
        corps_message: {
          type: 'string',
          example: 'Exemple de message concernant le materiel du personnel',
          description: 'corps du message '
        }
      }
    }
  })
  @Post('new')
  create(@Body() createMessageDto: CreateMessageDto) {
    try{
      return this.messagesService.create(createMessageDto);

    }catch(error){
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

  @Get('message')
  findDernierMessage() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}
