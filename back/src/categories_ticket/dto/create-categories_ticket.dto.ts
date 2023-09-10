import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateCategoriesTicketDto {

    @IsString()
    @IsNotEmpty()
    libelle : string;

}
