import { EtatTicketEnum } from "src/enums/etat-ticket.enum";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { TypeTicketEntity } from "./type_ticket.entity";
import { CategorieTicketEntity } from "./categorie_ticket.entity";
import { NiveauTicketEntity } from "./niveau_ticket.entity";
import { NiveauTicketEnum } from "src/enums/niveau-ticket";

@Entity('ticket')
export class TicketEntity{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ nullable: false})
    id_proprietaire : number;

    @Column()
    date_creation : Date;

    @Column()
    objet : string;

    @Column()
    description : string;

    @Column({nullable : true})
    piece_jointe : string;

    @Column({ 
        type: 'enum',
        enum: EtatTicketEnum,
        default: EtatTicketEnum.NOUVEAU
    })
    etat : EtatTicketEnum;

    @Column({ 
        type: 'enum',
        enum: NiveauTicketEnum,
        default: NiveauTicketEnum.NIVEAU_1
    })
    niveau : NiveauTicketEnum;
    
    @ManyToOne(() => UserEntity, (user) => user.id, {nullable:true})
    id_user_support : number;

    @ManyToOne(() => TypeTicketEntity, (ticket) => ticket.id, {nullable:true})
    id_type_ticket : number;

    @ManyToOne(() => CategorieTicketEntity, (ticket) => ticket.id, {nullable:false})
    id_categorie_ticket : number;

    // @ManyToOne(() => NiveauTicketEntity, (ticket) => ticket.id, {nullable:false})
    // id_niveau_ticket : number;



    
    
}