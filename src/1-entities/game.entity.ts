import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('games')
export class Game {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}