import { PartialType } from '@nestjs/swagger';
import { CreateNiveauxTicketDto } from './create-niveaux_ticket.dto';
import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';


export class UpdateNiveauxTicketDto extends PartialType(CreateNiveauxTicketDto) {
    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    @IsNumber()
    id : number;

    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    actif : string; 


}

