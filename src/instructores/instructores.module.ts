import { Module } from '@nestjs/common';
import { ServicioInstructoresService } from './servicio-instructores/servicio-instructores.service';
import { ControllerInstructoresController } from './controller-instructores/controller-instructores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { INSTRUCTORES } from 'src/models/models';
import { InstructoresSchema } from './schema/instructores.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: INSTRUCTORES.name,
      useFactory:() => InstructoresSchema
    }])
  ],
  providers: [ServicioInstructoresService],
  controllers: [ControllerInstructoresController],
  exports:[ServicioInstructoresService]
})
export class InstructoresModule {}
