import { Message } from "src/message/message.entity";
import { Profile } from "src/profile/profile.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
@Entity({ name: "User" })
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @ApiProperty()
    @Column()
    username: string
    @ApiProperty()
    @Column()
    password: string
    @OneToOne(() => Profile, profile => profile.user)
    profile: Profile
}