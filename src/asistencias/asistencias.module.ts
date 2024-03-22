import { Module } from '@nestjs/common';
import { ServicioAsistenciasService } from './servicio-asistencias/servicio-asistencias.service';
import { ControllerAsistenciasController } from './controller-asistencias/controller-asistencias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ASISNTECIAS } from 'src/models/models';
import { AsistenciasSchema } from './schema/asistencias.schema';
import { ServicioClasesService } from 'src/clases/servicio-clases/servicio-clases.service';
import { ServicioClientesService } from 'src/clientes/servicio-clientes/servicio-clientes.service';
import { ClientesModule } from 'src/clientes/clientes.module';
import { ClasesModule } from 'src/clases/clases.module';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: ASISNTECIAS.name,
      useFactory:() => AsistenciasSchema
    }]),
    ClientesModule,
    ClasesModule
  ],
  providers: [ServicioAsistenciasService],
  controllers: [ControllerAsistenciasController]
})
export class AsistenciasModule {}
