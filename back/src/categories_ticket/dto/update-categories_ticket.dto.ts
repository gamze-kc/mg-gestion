import { PartialType } from '@nestjs/swagger';
import { CreateCategoriesTicketDto } from './create-categories_ticket.dto';

export class UpdateCategoriesTicketDto extends PartialType(CreateCategoriesTicketDto) {}
