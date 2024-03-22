import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { ClientesDTO } from "src/clientes/DTO/clientes.dto";
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService:AuthService){
        super();
    }

    async validacion(clienteDTO: ClientesDTO){
        const user = await this.authService.validarCliente(clienteDTO);
        if(!user) throw new UnauthorizedException("Acceso denegado");
        return user;
    }
}