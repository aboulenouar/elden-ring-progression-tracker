import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemCategory } from "./ItemCategory.entity";

@Entity({name: 'item_sub_categories'})
export class ItemSubCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => ItemCategory, itemCategory => itemCategory.id)
    category: ItemCategory;
}