import { HttpException, Injectable } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentaireEntity } from 'src/entities/commentaire.entity';
import { TicketEntity } from 'src/entities/ticket.entity';

@Injectable()
export class CommentairesService {


  constructor(
    @InjectRepository(UserEntity)
    private userRepostory : Repository<UserEntity>,

    @InjectRepository(CommentaireEntity)
    private commentaireRepository : Repository<CommentaireEntity>,

    
    @InjectRepository(TicketEntity)
    private ticketRepository : Repository<TicketEntity>,
  ){}

  async create( commentaireData : CreateCommentaireDto) : Promise<CommentaireEntity> {

    try
    {
      const user = await this.userRepostory.findOneBy({id : +commentaireData.id_proprietaire});
      const ticket = await this.ticketRepository.findOneBy({id : commentaireData.id_ticket});
      
        let commentaire = new CommentaireEntity(); 
        commentaire.date = new Date()
        commentaire.texte = commentaireData.texte;
        commentaire.piece_jointe = commentaireData.piece_jointe;
        commentaire.ticket = ticket;
        commentaire.id_proprietaire = commentaireData.id_proprietaire;
        console.log(commentaire);
        const newCommentaire = await this.commentaireRepository.save({...commentaire});
    
        return newCommentaire;
      
      } 
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la création du commentaire :  ' + error.message,
        500,
      );
    }
 

  }

  async remove(id: number) {
    try
    {
      const commentaire = await this.commentaireRepository.findOneBy({id : id});
      
        return await this.commentaireRepository.remove(commentaire);
      
      } 
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la suppression du commentaire :  ' + error.message,
        500,
      );
    }
  }
}
