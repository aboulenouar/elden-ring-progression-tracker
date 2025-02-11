import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfigService } from './typeorm/services/typeorm-config.service';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: TypeORMConfigService
  }), ConfigModule.forRoot({
    envFilePath: ['./environment/.dev.env', './environment/.prod.env'],
    isGlobal: true
  }), CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
