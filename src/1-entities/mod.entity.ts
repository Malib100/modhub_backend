import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('mods')
export class Mod {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    rating:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
