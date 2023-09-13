import { HttpException, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageEntity } from 'src/entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {

  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>

  ) { }


  async create(messageData: CreateMessageDto): Promise<MessageEntity|Error> {
    try{

      let message = new MessageEntity();
      message.objet = messageData.objet;
      message.corps_message = messageData.corps_message;
      message.date_creation = new Date();
      console.log(message);
      const newMessage = await this.messageRepository.save({...message})
   
      return newMessage;

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

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
