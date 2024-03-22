import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientesModule } from 'src/clientes/clientes.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports:[
    ClientesModule,PassportModule,JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions:{
        expiresIn: process.env.EXPIRATION_TIME,
        audience: process.env.API_URL,

      }
    })
  ],
  controllers:[AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy]
})
export class AuthModule {}
