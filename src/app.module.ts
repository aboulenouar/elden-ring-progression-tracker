import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfigService } from './typeorm/services/typeorm-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: TypeORMConfigService
  }), ConfigModule.forRoot({
    envFilePath: ['./environment/.dev.env', './environment/.prod.env'],
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
