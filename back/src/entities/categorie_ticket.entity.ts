import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TicketEntity } from "./ticket.entity";
import { ActifEnum } from "src/enums/actif.enum";

@Entity('categorie_ticket')
export class CategorieTicketEntity{

    @PrimaryGeneratedColumn()
    id: number; 

    @Column({nullable: false, unique: true})
    libelle: string;

    @Column({
        type: 'enum',
        enum: ActifEnum,
        default: ActifEnum.ACTIF
    })
    actif : string;

    @OneToMany(() => TicketEntity, (ticket) => ticket.id, {nullable:false})
    tickets : TicketEntity[];
    
}