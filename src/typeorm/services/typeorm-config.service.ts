import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Boss } from "../entities/Boss.entity";
import { BossGrade } from "../entities/BossGrade.entity";
import { ArmorCategory } from "../entities/ArmorCategory.entity";
import { Item } from "../entities/Item.entity";
import { ItemCategory } from "../entities/ItemCategory.entity";
import { ItemSubCategory } from "../entities/ItemSubCategory.entity";
import { User } from "../entities/User.entity";
import { UserBeatBoss } from "../entities/UserBeatBoss.entity";
import { UserGotItem } from "../entities/UserGotItem.entity";

@Injectable()
export class TypeORMConfigService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: process.env.MYSQL_HOST,
            port: parseInt(process.env.MYSQL_PORT),
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            entities: [Boss, BossGrade, ArmorCategory, Item, ItemCategory, ItemSubCategory, User, UserBeatBoss, UserGotItem],
            synchronize: true,
        };
    }
}