import { PartialType } from '@nestjs/swagger';
import { CreateTypesTicketDto } from './create-types_ticket.dto';

export class UpdateTypesTicketDto extends PartialType(CreateTypesTicketDto) {}
