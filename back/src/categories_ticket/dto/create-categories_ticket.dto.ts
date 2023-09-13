import { IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";

export class CreateCategoriesTicketDto {

    @IsString()
    @IsNotEmpty()
    libelle : string;

    
    @IsString()
    @IsOptional()
    couleur: string;

    
    @IsString()
    @IsOptional()
    icone : string;

}
