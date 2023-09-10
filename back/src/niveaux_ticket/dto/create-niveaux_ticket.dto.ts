import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateNiveauxTicketDto {

    @IsString()
    @IsNotEmpty()
    libelle : string;

}

