import { HttpException, Injectable } from '@nestjs/common';
import { CreateTypesTicketDto } from './dto/create-types_ticket.dto';
import { UpdateTypesTicketDto } from './dto/update-types_ticket.dto';
import { TypeTicketEntity } from 'src/entities/type_ticket.entity';
import { ActifEnum } from 'src/enums/actif.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypesTicketService {


  constructor(
    @InjectRepository(TypeTicketEntity)
    private typeTicketRpository: Repository<TypeTicketEntity>
  ) { }


  async create(typeData: CreateTypesTicketDto): Promise<TypeTicketEntity> {

    try {

      let type = new TypeTicketEntity();
      type.libelle = typeData.libelle;
      type.actif = ActifEnum.ACTIF;

      const newType = await this.typeTicketRpository.save({ ...type });
      return newType;
    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la création du type:  ' + error.message,
        500,
      );
    }
  }

  async getTousLesTypes(): Promise<TypeTicketEntity[]> {
    try {
      return await this.typeTicketRpository.find({ where: { actif: 'ACTIF' } });

    }
    catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération du type :  ' + error.message,
        500,
      );
    }
  }

  async getType(id: number): Promise<TypeTicketEntity> {
    try {
      return await this.typeTicketRpository.findOneBy({ id: id });
    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la récupération du type :  ' + error.message,
        500,
      );
    }
  }

  async updateActif(typeData: UpdateTypesTicketDto): Promise<TypeTicketEntity> {

    try {

      const type = await this.typeTicketRpository.findOneBy({ id: typeData.id });
      type.actif = typeData.actif;

      const newType = await this.typeTicketRpository.save(type);
      return newType;

    } catch (error) {
      // Si l'erreur est une instance de HttpException, la renvoyer directement
      if (error instanceof HttpException) {
        throw error;
      }

      // Si ce n'est pas une HttpException, renvoyer une HttpException avec un code 500 (Internal Server Error) et le message d'erreur
      throw new HttpException(
        'Erreur lors de la modification du ticket :  ' + error.message,
        500,
      );
    }

  }

  /*
    findOne(id: number) {
      return `This action returns a #${id} typesTicket`;
    }
  
    update(id: number, updateTypesTicketDto: UpdateTypesTicketDto) {
      return `This action updates a #${id} typesTicket`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} typesTicket`;
    }*/
}
