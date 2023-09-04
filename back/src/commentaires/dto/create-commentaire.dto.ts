import { IsNotEmpty, IsNumber, IsOptional, IsString } from "@nestjs/class-validator";
import { TicketEntity } from "src/entities/ticket.entity";

export class CreateCommentaireDto {

    @IsString()
    @IsNotEmpty()
    texte : string;

    @IsString()
    @IsOptional()
    piece_jointe :string;

    @IsNumber()
    @IsNotEmpty()
    id_ticket : number;

    @IsNumber()
    @IsNotEmpty()
    id_proprietaire : number;

}
