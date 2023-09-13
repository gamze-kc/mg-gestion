import { IsNotEmpty, IsNumber, IsString, MaxLength } from "@nestjs/class-validator";

export class CreateMessageDto {


    @IsNotEmpty( {message: 'Le champs "id" ne peut pas être vide'})
    @IsNumber({}, {message: 'L\'id doit être un nombre'})
    id: number; 

    @IsNotEmpty( {message: 'Le champs "objet" ne peut pas être vide'})
    @IsString()
    @MaxLength(100, {message : 'Le nombre caractère maximum pour l\'objet du message est de 150 caractères'})
    objet: string;

    @IsNotEmpty( {message: 'Le champs "corps_message " ne peut pas être vide'})
    @IsString()
    @MaxLength(255, {message : 'Le nombre caractère maximum pour le corps de message est de 255 caractères'})
    
    corps_message: string;
    


}
