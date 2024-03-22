import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ServicioInstructoresService } from '../servicio-instructores/servicio-instructores.service';
import { InstructoresDTO } from '../DTO/instructores.dto';

@Controller('controller-instructores')
export class ControllerInstructoresController {
    constructor(private readonly instructoresService: ServicioInstructoresService) {}

    @Post()
    insertar(@Body()instructorDTO: InstructoresDTO) {
        return this.instructoresService.insertar(instructorDTO);
    }

    @Get()
    todos(){
        return this.instructoresService.todos();
    }

    @Get(':id')
    uno(id:string){
        return this.instructoresService.uno(id);
    }

    @Put(':id')
    actualizar(id:string, @Body()instructorDTO: InstructoresDTO){
        return this.instructoresService.actualizar(id, instructorDTO);
    }

    @Delete(':id')
    eliminar(id:string){
        return this.instructoresService.eliminar(id);
    }
}
