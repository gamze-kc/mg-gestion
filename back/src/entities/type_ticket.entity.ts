import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TicketEntity } from "./ticket.entity";

@Entity('type_tickets')
export class TypeTicketEntity{

    @PrimaryGeneratedColumn()
    id: number; 

    @Column({nullable: false})
    libelle: string;

    @Column({nullable: false})
    actif : string;

    @OneToMany(() => TicketEntity, (ticket) => ticket.id, {nullable:false})
    tickets : TicketEntity[];
    
}