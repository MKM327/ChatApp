import { Message } from "src/message/message.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: "User" })
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string
    @Column()
    lastName: string
    @Column()
    nickname: string
    @OneToMany(type => Message, message => message.sender, { cascade: ["insert", "update"] })
    sentMessages: Message[]
    @OneToMany(type => Message, message => message.receiver)
    receivedMessages: Message[]

}