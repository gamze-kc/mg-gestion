import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity('message')
export class MessageEntity {

    @PrimaryGeneratedColumn()
    id: number; 

    @Column({ nullable: false})
    objet : string;

    @Column({ nullable: false})
    corps_message: string;

    @Column()
    date_creation : Date;

    
}
