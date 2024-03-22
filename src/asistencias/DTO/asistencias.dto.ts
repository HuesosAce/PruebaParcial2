import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

export class AsistenciasDTO {
    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    readonly fecha;
}