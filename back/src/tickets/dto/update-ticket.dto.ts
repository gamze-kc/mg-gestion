import { PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';
import { IsNotEmpty, IsString, IsOptional } from '@nestjs/class-validator';
import { NiveauTicketEnum } from 'src/enums/niveau-ticket';
import { EtatTicketEnum } from 'src/enums/etat-ticket.enum';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {

    @IsNotEmpty( {message: 'Le champs "id" ne peut pas être vide'})
    @IsString()
    id : number;


    @IsOptional()
    niveau : NiveauTicketEnum;

    @IsOptional()
    etat : EtatTicketEnum;
}
