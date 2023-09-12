import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TicketEntity } from "./ticket.entity";
import { UserRoleEnum } from "src/enums/role-user.enum";
import { CommentaireEntity } from "./commentaire.entity";

@Entity('user')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id: number; 

    @Column({nullable: false})
    matricule: string;

    @Column({nullable: false})
    nom : string;

    @Column({nullable: false})
    prenom : string;

    @Column({nullable: false})
    actif : string;

    @Column({nullable: true})
    mail : string;

    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role : string;

    @OneToMany(() => TicketEntity, (ticket) => ticket.id, {nullable:false})
    tickets : TicketEntity[];

    @OneToMany(() => CommentaireEntity, (commentaire) => commentaire.id, {nullable:false})
    commentaires : CommentaireEntity[];

  
}