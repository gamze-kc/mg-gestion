import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateTypesTicketDto {

    @IsString()
    @IsNotEmpty()
    libelle : string;

}
