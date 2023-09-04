import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "@nestjs/class-validator";
import { TicketEtatEnum } from "src/enums/ticket-etat.enum";



export class CreateTicketDto {

    @IsNotEmpty( {message: 'Le champs id propriétaire ne peut pas être vide'})
    @IsNumber({}, {message: 'L\'id doit être un nombre'})
    id_proprietaire : number; 

    @IsNotEmpty( {message: 'Le champs objet ne peut pas être vide'})
    @IsString()
    objet : string;


    @IsNotEmpty( {message: 'Le champs description ne peut pas être vide'})
    @IsString()
    description : string;


    @IsNotEmpty( {message: 'Le champs categorie ne peut pas être vide'})
    @IsString()
    categorie : string; 


    @IsNotEmpty( {message: 'Le champs type ne peut pas être vide'})
    @IsString()
    type : string;


    @IsOptional()
    @IsString()
    piece_jointe : string;

    /*
    @IsNotEmpty()
    etat:TicketEtatEnum;

    @IsOptional()
    id_user_support : number;*/

}
