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
      console.log(categorie);
      const newCategorie = await this.categorieTicketRpository.save({...categorie});
 
      
      return newCategorie;
    }catch(error)
    {
      return error;
    }
  }




  async getAllCategories() {
    return await this.categorieTicketRpository.find({where : {actif : "actif"}});
  }

  async getCategorie(id: number) {
    return await this.categorieTicketRpository.find({where : {id : id}});
  }

  update(id: number, updateCategoriesTicketDto: UpdateCategoriesTicketDto) {
    return `This action updates a #${id} categoriesTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriesTicket`;
  }
}
