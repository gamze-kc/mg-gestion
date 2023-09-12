import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "@nestjs/class-validator";
import { EtatTicketEnum } from "src/enums/etat-ticket.enum";
import { NiveauTicketEnum } from "src/enums/niveau-ticket";



export class CreateTicketDto {

    @IsNotEmpty( {message: 'Le champs "id propriétaire" ne peut pas être vide'})
    @IsNumber({}, {message: 'L\'id doit être un nombre'})
    id_proprietaire : number; 

    @IsNotEmpty( {message: 'Le champs "objet "ne peut pas être vide'})
    @IsString()
    objet : string;


    @IsNotEmpty( {message: 'Le champs "description" ne peut pas être vide'})
    @IsString()
    description : string;


    @IsNotEmpty( {message: 'Le champs "categorie" ne peut pas être vide'})
    @IsString()
    id_categorie : number; 


    @IsNotEmpty( {message: 'Le champs "type" ne peut pas être vide'})
    @IsString()
    id_type : number;


    @IsOptional()
    @IsString()
    piece_jointe : string;

    /*
    @IsNotEmpty()
    etat:TicketEtatEnum;

    @IsOptional()
    id_user_support : number;*/

}
