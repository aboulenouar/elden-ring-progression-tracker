import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

const JWT_SECRET = '5CWfosv9PVG5'

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: JWT_SECRET,
    signOptions: { expiresIn: '1d' },
  }), PassportModule],
})
export class AuthModule { }
