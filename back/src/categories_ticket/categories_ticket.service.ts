import { Injectable } from '@nestjs/common';
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
    
      const newCategorie = await this.categorieTicketRpository.save({...categorie});
 
      
      return newCategorie;
    }catch(error)
    {
      return error;
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
      return error;
    }
  }


  async updateActif(categorieData : UpdateCategoriesTicketDto)  :Promise<CategorieTicketEntity> {
    
    try{

      const type = await this.categorieTicketRpository.findOneBy({id : categorieData.id});
      type.actif = categorieData.actif;

      const newCategorie = await this.categorieTicketRpository.save(type);
      return newCategorie;

    }catch(error)
    {
      return error;
    }

  }



}
