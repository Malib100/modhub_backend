import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn, ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {IsNotEmpty} from "class-validator";
import {Mod} from "./mod.entity";

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

    @OneToMany(()=> Mod, (mod:Mod)=> mod.user)
    mods: Mod[];

}
