import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BossGrade } from "./BossGrade.entity";

@Entity({name: 'bosses'})
export class Boss {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    image: string;

    @ManyToOne(() => BossGrade, bossGrade => bossGrade.id)
    grade: BossGrade;
}