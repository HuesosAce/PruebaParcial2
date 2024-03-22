import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ServicioClasesService } from '../servicio-clases/servicio-clases.service';
import { ServicioInstructoresService } from 'src/instructores/servicio-instructores/servicio-instructores.service';
import { ClasesDTO } from '../DTO/clases.dto';

@Controller('controller-clases')
export class ControllerClasesController {
    constructor(private readonly claseService: ServicioClasesService,
        private readonly instructorService: ServicioInstructoresService) { }

    @Post()
    insertar(@Body() claseDTO: ClasesDTO) {
        return this.claseService.insertar(claseDTO);
    }
    @Get()
    todos() {
        return this.claseService.todos();
    }

    @Get(':id')
    uno(id: string) {
        return this.claseService.uno(id);
    }

    @Put(':id')
    actualizar(id: string, @Body() claseDTO: ClasesDTO) {
        return this.claseService.actualizar(id, claseDTO);
    }

    @Delete(':id')
    eliminar(id: string) {
        return this.claseService.eliminar(id);
    }

    @Post(':id/instructor/:instructorId')
    async insertarInstructor(@Param('id') id:string, @Param('instructorId') instructorId:string){
        const instructor = await this.instructorService.uno(instructorId);
        if(!instructor) throw new HttpException('Instructor no encontrado', HttpStatus.NOT_FOUND);
        return this.claseService.insertarInstructor(id, instructorId);
    }


}
