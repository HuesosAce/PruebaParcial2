import { Module } from '@nestjs/common';
import { ServicioClasesService } from './servicio-clases/servicio-clases.service';
import { ControllerClasesController } from './controller-clases/controller-clases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CLASES } from 'src/models/models';
import { ClasesSchema } from './schema/clases.schema';
import { InstructoresModule } from 'src/instructores/instructores.module';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: CLASES.name,
      useFactory:() => ClasesSchema
    }]),
    InstructoresModule
  ],
  providers: [ServicioClasesService],
  controllers: [ControllerClasesController],
  exports:[ServicioClasesService]
})
export class ClasesModule {}
