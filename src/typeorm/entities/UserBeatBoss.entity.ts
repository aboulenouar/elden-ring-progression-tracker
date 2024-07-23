import { Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { Boss } from "./Boss.entity";

@Entity({name: 'user_beat_bosses'})
export class UserBeatBoss {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => User, user => user.id)
    userId: User;

    @ManyToMany(() => Boss, boss => boss.id)
    bossId: Boss;
}