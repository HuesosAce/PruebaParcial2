import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { INSTRUCTORES } from 'src/models/models';
import { InterfazInstructores } from '../interfaz-instructores/interfaz-instructores.interface';
import { InstructoresDTO } from '../DTO/instructores.dto';

@Injectable()
export class ServicioInstructoresService {
    constructor(@InjectModel(INSTRUCTORES.name) private readonly model:Model<InterfazInstructores>){}

    insertar(instructorDTO:InstructoresDTO): Promise<InterfazInstructores>{
        return new this.model(instructorDTO).save();
    }
    uno(id:string): Promise<InterfazInstructores>{
        return this.model.findById(id);
    }
    todos(): Promise<InterfazInstructores[]>{
        return this.model.find();
    }
    actualizar(id:string, instructorDTO:InstructoresDTO): Promise<InterfazInstructores>{
        return this.model.findByIdAndUpdate(id, instructorDTO, {new:true});
    }
    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
 
        return {status: HttpStatus.OK, msg:'Instructor eliminado'};
    }
}
