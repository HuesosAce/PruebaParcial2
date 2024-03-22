import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ASISNTECIAS } from 'src/models/models';
import { InterfazAsistencias } from '../interfaz-asistencias/interfaz-asistencias.interface';
import { AsistenciasDTO } from '../DTO/asistencias.dto';

@Injectable()
export class ServicioAsistenciasService {
    constructor(@InjectModel(ASISNTECIAS.name) private readonly model:Model<InterfazAsistencias>){}

    insertar(asistenciaDTO:AsistenciasDTO): Promise<InterfazAsistencias>{
        const nuevaAsistencia = new this.model(asistenciaDTO);
        return nuevaAsistencia.save();
    }

    todos(): Promise<InterfazAsistencias[]>{
        return this.model.find().populate({ path: 'clientes', options: { strictPopulate: false } }).populate({ path: 'clases', options: { strictPopulate: false } });
    }

    uno(id:string): Promise<InterfazAsistencias>{
        return this.model.findById(id).populate({ path: 'clientes', options: { strictPopulate: false } }).populate({ path: 'clases', options: { strictPopulate: false } });
        
    }

    actualizar(id:string, asistenciaDTO:AsistenciasDTO): Promise<InterfazAsistencias>{
        return this.model.findByIdAndUpdate(id, asistenciaDTO, {new:true});
    }
    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
     
        return {status: HttpStatus.OK, msg:'Asistencia Eliminada'};
    }

    async insertarCliente(id:string,clienteId:string):Promise<InterfazAsistencias>{
        return (await this.model.findByIdAndUpdate(id,{$addToSet:{cliente:clienteId}},{new:true})).populate('clientes');

    }

    async insertarClase(id:string, claseId:string):Promise<InterfazAsistencias>{
        return (await this.model.findByIdAndUpdate(id, {$addToSet:{clases:claseId}}, {new:true})).populate('clases');

    }
    
}
