import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Boss } from "./Boss.entity";

@Entity({name: 'boss_grades'})
export class BossGrade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    grade: string;

    @OneToMany(() => Boss, boss => boss.grade)
    bosses: Boss[];
}