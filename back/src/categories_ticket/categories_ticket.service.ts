import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoriesTicketDto } from './dto/create-categories_ticket.dto';
import { UpdateCategoriesTicketDto } from './dto/update-categories_ticket.dto';
import { CategorieTicketEntity } from 'src/entities/categorie_ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActifEnum } from 'src/enums/actif.enum';

@Injectable()
export class CategoriesTicketService {

  constructor(
    @InjectRepository(CategorieTicketEntity)
    private categorieTicketRpository: Repository<CategorieTicketEntity>
  ){}

  async create(categorieData: CreateCategoriesTicketDto) :Promise<CategorieTicketEntity>{
  
    try{
     
      
      let categorie = new CategorieTicketEntity();
      categorie.libelle = categorieData.libelle;
      categorie.actif = ActifEnum.ACTIF;
      categorie.couleur = categorieData.couleur;
      categorie.icone = categorieData.icone;

    
      const newCategorie = await this.categorieTicketRpository.save({...categorie});
 
      
      return newCategorie;
    }catch(error)
    {
    
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




  async getAllCategories() {
    return await this.categorieTicketRpository.find({where : {actif : "ACTIF"}});
  }

  async getCategorie(id: number) :Promise<CategorieTicketEntity> {
    try{
     
      return await this.categorieTicketRpository.findOneBy({id : id});

    }catch(error)
    {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération des catégories :  ' + error.message,
        500,
      );
    }
  }


  async update(categorieData : UpdateCategoriesTicketDto)  :Promise<CategorieTicketEntity> {
    
    try{

      const categorie = await this.categorieTicketRpository.findOneBy({id : categorieData.id});
      categorie.actif = categorieData.actif;
      categorie.couleur = categorieData.couleur;
      categorie.icone = categorieData.icone;

      const newCategorie = await this.categorieTicketRpository.save(categorie);
      return newCategorie;

    }catch(error)
    {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la mise à jour de la categorie :  ' + error.message,
        500,
      );
    }

  }



}
