import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientesDTO } from 'src/clientes/DTO/clientes.dto';

@Controller('api/v1/auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}

    @Post('signIn')
    async sigIn(@Req() req)
    {
        return this.authService.signIn(req.user);
    }

    @Post('signUp')
    async signUp(@Body() clienteDTO: ClientesDTO)
    {
        return this.authService.signUp(clienteDTO);
    }

}
