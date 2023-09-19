import { ApiProperty } from "@nestjs/swagger/dist";
export class LoginDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string
}