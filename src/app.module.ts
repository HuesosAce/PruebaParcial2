import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ClasesModule } from './clases/clases.module';
import { InstructoresModule } from './instructores/instructores.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal:true
    }), 
    MongooseModule.forRoot(process.env.uri_mongo),
    ClientesModule, ClasesModule, InstructoresModule, AsistenciasModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService,AuthService,JwtService],
})
export class AppModule {}
