import { Module } from '@nestjs/common';
import { ServicioClientesService } from './servicio-clientes/servicio-clientes.service';
import { ControllerClientesController } from './controller-clientes/controller-clientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CLIENTES } from 'src/models/models';
import { ClientesSchema } from './schema/clientes.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name: CLIENTES.name,
      useFactory:() => ClientesSchema
    }])
  ],
  providers: [ServicioClientesService],
  controllers: [ControllerClientesController],
  exports:[ServicioClientesService]
})
export class ClientesModule {}
