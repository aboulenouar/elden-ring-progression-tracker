import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    hashedPassword: string;

    @Column({nullable: true})
    bio: string;

    @Column()
    createdAt: Date;

    @Column({nullable: true})
    updatedAt: Date;
}