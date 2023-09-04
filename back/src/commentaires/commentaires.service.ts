import { Injectable } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentaireEntity } from 'src/entities/commentaire.entity';

@Injectable()
export class CommentairesService {


  constructor(
    @InjectRepository(UserEntity)
    private userRepostory : Repository<UserEntity>,

    
    @InjectRepository(CommentaireEntity)
    private commentaireRepository : Repository<CommentaireEntity>,
  ){}

  async create( commentaireData : CreateCommentaireDto) : Promise<CommentaireEntity> {

    try
    {
      const user = await this.userRepostory.findOneBy({id : +commentaireData.id_proprietaire});
      
        let commentaire = new CommentaireEntity(); 
        commentaire.date = new Date()
        commentaire.texte = commentaireData.texte;
        commentaire.piece_jointe = commentaireData.piece_jointe;
        commentaire.id_ticket = commentaireData.id_ticket;
        commentaire.id_proprietaire = commentaireData.id_proprietaire;
        console.log(commentaire);
        const newCommentaire = await this.commentaireRepository.save({...commentaire});
    
        return newCommentaire;
      
      } 
    catch (error) {
      return error;
    }
 

  }

  async remove(id: number) {
    try
    {
      const commentaire = await this.commentaireRepository.findOneBy({id : id});
      
        return await this.commentaireRepository.remove(commentaire);
      
      } 
    catch (error) {
      return error;
    }
  }
}
