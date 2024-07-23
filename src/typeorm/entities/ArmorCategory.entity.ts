import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item.entity";

@Entity({name: 'armor_categories'})
export class ArmorCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Item, item => item.armorCategory)
    items: Item[];
}