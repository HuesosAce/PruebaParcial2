import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CLIENTES } from 'src/models/models';
import { InterfazClientes } from '../interfaz-clientes/interfaz-clientes.interface';
import { ClientesDTO } from '../DTO/clientes.dto';

@Injectable()
export class ServicioClientesService {
    constructor(@InjectModel(CLIENTES.name) private readonly model: Model<InterfazClientes>) { }


    insertar(clienteDTO: ClientesDTO): Promise<InterfazClientes> {
        return new this.model(clienteDTO).save();
    }
    todos(): Promise<InterfazClientes[]> {
        return this.model.find();
    }
    uno(id: string): Promise<InterfazClientes> {
        return this.model.findById(id);
    }
    actualizar(id: string, clienteDTO: ClientesDTO): Promise<InterfazClientes> {
        return this.model.findByIdAndUpdate(id, clienteDTO, { new: true });
    }
    async eliminar(id: string) {
        await this.model.findByIdAndDelete(id);

        return { status: HttpStatus.OK, msg: 'Cliente eliminado' };
    }

    async buscarNombre(clienteDTO:ClientesDTO){
        return await this.model.findOne({username:clienteDTO});
    }
}
