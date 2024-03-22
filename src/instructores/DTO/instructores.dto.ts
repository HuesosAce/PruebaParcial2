import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class InstructoresDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly nombre;
}