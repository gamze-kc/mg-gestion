import { TicketEtatEnum } from "src/enums/ticket-etat.enum";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

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
    
    @Column({nullable : false})
    categorie : string; 

    @Column({nullable : false})
    type : string;

    @Column({nullable : true})
    piece_jointe : string;

    @Column({ 
        type: 'enum',
        enum: TicketEtatEnum,
        default: TicketEtatEnum.NOUVEAU
    })
    etat : TicketEtatEnum;

    
    @ManyToOne(() => UserEntity, (user) => user.id, {nullable:true})
    id_user_support : number;

    
    
}