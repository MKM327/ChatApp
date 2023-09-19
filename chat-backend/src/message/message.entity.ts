import { User } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToOne } from "typeorm";

@Entity({ name: "Message" })
export class Message {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => User, user => user.sentMessages)
    sender: User
    @ManyToOne(() => User, user => user.receivedMessages)
    receiver: User
    @Column()
    messageContent: string
}