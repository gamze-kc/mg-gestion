import { PartialType } from '@nestjs/swagger';
import { CreateCategoriesTicketDto } from './create-categories_ticket.dto';
import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';


export class UpdateCategoriesTicketDto {

    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    @IsNumber()
    id : number;

    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    actif : string; 


}