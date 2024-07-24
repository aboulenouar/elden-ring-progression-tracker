import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/auth.dto';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm/entities/User.entity';
import * as bcrypt from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>, private jwtService: JwtService) { }

    login(loginDto: LoginDto): string {
        if (this.validateUser(loginDto.username)) {
            if (this.comparePasswords(loginDto)) {
                return this.jwtService.sign({ username: loginDto.username });
            }
        }
    }

    async register(registerDto: RegisterDto) {
        const userAlreadyExists = await this.userAlreadyExists(registerDto.username, registerDto.email)
        if (userAlreadyExists) {
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        }
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(registerDto.password, salt);
        const user = this.userRepository.create({ username: registerDto.username, email: registerDto.email, hashedPassword, createdAt: new Date() });
        return this.userRepository.save(user);
    }

    async validateUser(username: string): Promise<boolean> {
        const user = await this.userRepository.findOneBy({ username });
        if (!user) {
            throw new HttpException('Bad credentials', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }

    private async comparePasswords(loginDto: LoginDto): Promise<boolean> {
        const user: User = await this.userRepository.findOneBy({ username: loginDto.username });
        if (!bcrypt.compareSync(loginDto.password, user.hashedPassword)) {
            throw new HttpException('Bad credentials', HttpStatus.UNAUTHORIZED);
        }
        return true;
    }

    private async userAlreadyExists(username: string, email: string): Promise<boolean> {
        const userByUsername = await this.userRepository.findOneBy({ username })
        const userByEmail = await this.userRepository.findOneBy({ email })
        if (userByEmail || userByUsername) {
            console.log('UserByEmail : ', userByEmail)
            console.log('UserByUsername : ', userByUsername)
            return true;
        } else {
            return false
        }
    }
}
