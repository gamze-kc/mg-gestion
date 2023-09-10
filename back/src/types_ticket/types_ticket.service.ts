import { Injectable } from '@nestjs/common';
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
  ){}


  async create(typeData: CreateTypesTicketDto) :Promise<TypeTicketEntity> {

    try{
     
      let type = new TypeTicketEntity();
      type.libelle = typeData.libelle;
      type.actif = ActifEnum.ACTIF;

      const newType = await this.typeTicketRpository.save({...type});
      return newType;
    }catch(error)
    {
      return error;
    }
  }

  async getTousLesTypes() {
    return await this.typeTicketRpository.find({where : {actif : 'ACTIF'}});
  }

  async updateActif(typeData : UpdateTypesTicketDto)  :Promise<TypeTicketEntity> {
    
    try{

      const type = await this.typeTicketRpository.findOneBy({id : typeData.id});
      type.actif = typeData.actif;

      const newType = await this.typeTicketRpository.save(type);
      return newType;

    }catch(error)
    {
      return error;
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
