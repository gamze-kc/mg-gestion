import { Injectable } from '@nestjs/common';
import { CreateTypesTicketDto } from './dto/create-types_ticket.dto';
import { UpdateTypesTicketDto } from './dto/update-types_ticket.dto';

@Injectable()
export class TypesTicketService {
  create(createTypesTicketDto: CreateTypesTicketDto) {
    return 'This action adds a new typesTicket';
  }

  findAll() {
    return `This action returns all typesTicket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typesTicket`;
  }

  update(id: number, updateTypesTicketDto: UpdateTypesTicketDto) {
    return `This action updates a #${id} typesTicket`;
  }

  remove(id: number) {
    return `This action removes a #${id} typesTicket`;
  }
}
