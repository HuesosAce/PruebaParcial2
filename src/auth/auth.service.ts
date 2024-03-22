import { Injectable } from '@nestjs/common';
import { access } from 'fs';
import { ServicioClientesService } from 'src/clientes/servicio-clientes/servicio-clientes.service';
import { JwtService } from '@nestjs/jwt';
import { ClientesDTO } from 'src/clientes/DTO/clientes.dto';
@Injectable()
export class AuthService {

    constructor(private readonly servicioCliente: ServicioClientesService,
        private readonly jwtService: JwtService) { }
    async validarCliente(username: string, password: string): Promise<any> {
        const user = await this.servicioCliente.buscarNombre(username);
    }

    async signIn(user: any) {
        const payload ={
            username :user.nombre,
            sub: user._id
        };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    async signUp(clienteDTO: ClientesDTO) {
        return await this.servicioCliente.insertar(clienteDTO);
    }


}
