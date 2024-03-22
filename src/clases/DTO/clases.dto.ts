import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ClasesDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre;
}