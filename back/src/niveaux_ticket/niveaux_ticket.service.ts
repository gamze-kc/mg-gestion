import { HttpException, Injectable } from '@nestjs/common';
import { CreateNiveauxTicketDto } from './dto/create-niveaux_ticket.dto';
import { UpdateNiveauxTicketDto } from './dto/update-niveaux_ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NiveauTicketEntity } from 'src/entities/niveau_ticket.entity';
import { Repository } from 'typeorm';
import { ActifEnum } from 'src/enums/actif.enum';

@Injectable()
export class NiveauxTicketService {


  constructor(
    @InjectRepository(NiveauTicketEntity)
    private niveauTicketRpository: Repository<NiveauTicketEntity>
  ) { }



  async create(niveauData: CreateNiveauxTicketDto): Promise<NiveauTicketEntity> {

    try {

      let niveau = new NiveauTicketEntity();
      niveau.libelle = niveauData.libelle;
      niveau.actif = ActifEnum.ACTIF;

      const newNiveau = await this.niveauTicketRpository.save({ ...niveau })
      return newNiveau;

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la création du niveau :  ' + error.message,
        500,
      );
    }
  }

  async getAllNiveaux() {
    return await this.niveauTicketRpository.find({ where: { actif: "ACTIF" } });
  }


  async getNiveau(id: number): Promise<NiveauTicketEntity> {
    try {

      return await this.niveauTicketRpository.findOneBy({ id: id });

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération des niveaux :  ' + error.message,
        500,
      );
    }
  }


  async updateActif(categorieData: UpdateNiveauxTicketDto): Promise<NiveauTicketEntity> {

    try {

      const type = await this.niveauTicketRpository.findOneBy({ id: categorieData.id });
      type.actif = categorieData.actif;

      const newCategorie = await this.niveauTicketRpository.save(type);
      return newCategorie;

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la modification du niveau:  ' + error.message,
        500,
      );
    }
  }



}
