import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TicketEntity } from "./ticket.entity";
import { UserEntity } from "./user.entity";

@Entity('commentaire')
export class CommentaireEntity{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({nullable: false})
    date : Date;

    @Column({nullable: false})
    texte : string;

    @Column({nullable: true})
    piece_jointe: string;

    @ManyToOne(() => TicketEntity, (ticket) => ticket.id, {nullable:false})
    ticket : TicketEntity;

    @ManyToOne(() => UserEntity, (user) => user.id, {nullable:false})
    id_proprietaire : number;
}
