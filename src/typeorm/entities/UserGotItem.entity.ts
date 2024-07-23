import { Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { Item } from "./Item.entity";

@Entity({name: 'user_got_items'})
export class UserGotItem {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => User, user => user.id)
    userId: User;

    @ManyToMany(() => Item, item => item.id)
    itemId: Item;
}