import { Injectable } from '@nestjs/common';
import { access } from 'fs';
import { ServicioClientesService } from 'src/clientes/servicio-clientes/servicio-clientes.service';
import { JwtService } from '@nestjs/jwt';
import { ClientesDTO } from 'src/clientes/DTO/clientes.dto';
@Injectable()
export class AuthService {

    constructor(private readonly servicioCliente: ServicioClientesService,
        private readonly jwtService: JwtService) { }
    async validarCliente(clienteDTO: ClientesDTO): Promise<any> {
        const user = await this.servicioCliente.buscarNombre(clienteDTO);
        return user;
    }

    async signIn(clienteDTO: ClientesDTO) {
        const user = await this.validarCliente(clienteDTO);
        if (user) {
            const payload = {
                username: user.nombre,
                sub: user._id
            };
            return {
                access_token: this.jwtService.sign(payload)
            };
        } else {
            throw new Error('Nombre de usuario o contraseña incorrectos');
        }
    }

    async signUp(clienteDTO: ClientesDTO) {
        return await this.servicioCliente.insertar(clienteDTO);
    }


}
