import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from '@nestjs/class-validator';


export class UpdateCategoriesTicketDto {

    @IsNotEmpty( {message: 'Le champs id ne peut pas être vide'})
    @IsNumber()
    id : number;

    @IsNotEmpty( {message: 'Le champs "actif" ne peut pas être vide'})
    actif : string;

      
    @IsString({message: 'Le champs "couleur" doit être une chaine de caractère'})
    @IsOptional()
    couleur: string;

    
    @IsString({message: 'Le champs "icone" doit être une chaine de caractère'})
    @IsOptional()
    icone : string;


}
