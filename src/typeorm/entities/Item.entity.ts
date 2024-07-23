import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemCategory } from "./ItemCategory.entity";
import { ArmorCategory } from "./ArmorCategory.entity";

@Entity({name: 'items'})
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @ManyToOne(() => ItemCategory, itemCategory => itemCategory.id)
    itemCategory: ItemCategory;

    @ManyToOne(() => ArmorCategory, armorCategory => armorCategory.id)
    armorCategory: ArmorCategory;
}