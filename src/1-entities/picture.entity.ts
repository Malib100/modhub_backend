import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Mod} from "./mod.entity";

@Entity('pictures')
export class Picture {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url:string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=> Mod, (mod:Mod)=> mod.picture)
    @JoinColumn({name:'mods_id'})
    mod: Mod;
}
