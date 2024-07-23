import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemSubCategory } from "./ItemSubCategory.entity";
import { Item } from "./Item.entity";

@Entity({name: 'item_categories'})
export class ItemCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => ItemSubCategory, itemSubCategory => itemSubCategory.category)
    subCategories: ItemSubCategory[];

    @OneToMany(() => Item, item => item.itemCategory)
    items: Item[];
}