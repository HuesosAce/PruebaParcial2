import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CLASES } from 'src/models/models';
import { InterfazClases } from '../interfaz-clases/interfaz-clases.interface';
import { ClasesDTO } from '../DTO/clases.dto';

@Injectable()
export class ServicioClasesService {
    constructor(@InjectModel(CLASES.name) private readonly model: Model<InterfazClases>){}
    
    insertar(claseDTO:ClasesDTO): Promise<InterfazClases>{
        const nuevaClase = new this.model(claseDTO);
        return nuevaClase.save();
    }
    todos(): Promise<InterfazClases[]>{
        return this.model.find().populate({ path: 'instructores', options: { strictPopulate: false } });
    }
    uno(id:string): Promise<InterfazClases>{
        return this.model.findById(id).populate({ path: 'instructores', options: { strictPopulate: false } });
    }
    actualizar(id:string, claseDTO:ClasesDTO): Promise<InterfazClases>{
        return this.model.findByIdAndUpdate(id, claseDTO, {new:true});
    }

    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, msg:'Clase Eliminada'};
    }

    async insertarInstructor(id:string, instructorId:string):Promise<InterfazClases>{
        return (await this.model.findByIdAndUpdate(id,{$addToSet:{instructores:instructorId}},{new:true})).populate('instructores');

    }
}
