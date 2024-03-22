import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServicioAsistenciasService } from '../servicio-asistencias/servicio-asistencias.service';
import { ServicioClientesService } from 'src/clientes/servicio-clientes/servicio-clientes.service';
import { ServicioClasesService } from 'src/clases/servicio-clases/servicio-clases.service';
import { AsistenciasDTO } from '../DTO/asistencias.dto';

@ApiTags('Asistencias')
@Controller('controller-asistencias')
export class ControllerAsistenciasController {
    constructor(private readonly asistenciasService: ServicioAsistenciasService,
        private readonly clientesService: ServicioClientesService,
        private readonly clasesService: ServicioClasesService) { }

    @Post()
    insertar(@Body() asistenciasDTO:AsistenciasDTO){
        return this.asistenciasService.insertar(asistenciasDTO);
    }

    @Get()
    todos(){
        return this.asistenciasService.todos();
    }

    @Get(':id')
    uno(id:string){
        return this.asistenciasService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() asistenciasDTO:AsistenciasDTO){
        return this.asistenciasService.actualizar(id, asistenciasDTO);
    }
    @Delete(':id')
    eliminar(id:string){
        return this.asistenciasService.eliminar(id);
    }

    @Post(':id/cliente/:clienteId')
    async insertarCliente(@Param('id') id:string, @Param('clienteId') clienteId:string){
        const cliente = await this.clientesService.uno(clienteId);
        if(!cliente) throw new HttpException('Cliente no encontrado', HttpStatus.NOT_FOUND);
        return this.asistenciasService.insertarCliente(id, clienteId);
    }

    @Post(':id/clase/:claseId')
    async insertarClase(@Param('id') id:string, @Param('claseId') claseId:string){
        const clase = await this.clasesService.uno(claseId);
        if(!clase) throw new HttpException('Clase no encontrada', HttpStatus.NOT_FOUND);
        return this.asistenciasService.insertarClase(id, claseId);
    }
}
