import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ServicioClientesService } from '../servicio-clientes/servicio-clientes.service';
import { ClientesDTO } from '../DTO/clientes.dto';

@Controller('controller-clientes')
export class ControllerClientesController {
    constructor(private readonly clientesService:ServicioClientesService){}

    @Post()
    insertar(@Body() clientesDTO: ClientesDTO){
        return this.clientesService.insertar(clientesDTO);
    }

    @Get()
    todos(){
        return this.clientesService.todos();
    }
    @Get(':id')
    uno(id:string){
        return this.clientesService.uno(id);
    }

    @Put(':id')
    actualizar(id:string, @Body() clientesDTO: ClientesDTO){
        return this.clientesService.actualizar(id, clientesDTO);
    }
    @Delete(':id')
    eliminar(id:string){
        return this.clientesService.eliminar(id);
    }
}
