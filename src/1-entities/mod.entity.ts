import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "./user.entity";
import {Game} from "./game.entity";
import {Category} from "./category.entity";

@Entity('mods')
export class Mod {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    url:string;

    @Column()
    rating:number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(()=> User, (user:User)=> user.mods)
    @JoinColumn({name:'user_id'})
    user: User;

    @ManyToOne(()=> Game, (game:Game)=> game.mods)
    @JoinColumn({name:'game_id'})
    game: Game;

    @ManyToOne(()=> Category, (category:Category)=> category.mods)
    @JoinColumn({name:'category_id'})
    category: Category;

}
