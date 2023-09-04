import { PartialType } from '@nestjs/swagger';
import { CreateTypesTicketDto } from './create-types_ticket.dto';
import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class UpdateTypesTicketDto extends PartialType(CreateTypesTicketDto) {

    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    @IsNumber()
    id : number;

    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    actif : string; 


}
