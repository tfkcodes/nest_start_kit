import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserAuth {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    password:string;
}