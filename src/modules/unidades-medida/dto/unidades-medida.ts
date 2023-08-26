import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UnidadesMedidaDTO {

    @ApiProperty()
    @IsString()
    descripcion: string;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    activo: boolean;

}