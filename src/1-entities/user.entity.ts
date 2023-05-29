import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string;

    @Column()
    isAdmin:boolean;

    @Column()
    isBlocked:boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
