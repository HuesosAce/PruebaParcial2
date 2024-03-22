import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ClientesDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre;
}