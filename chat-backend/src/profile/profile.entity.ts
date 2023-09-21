import { IsEmail, IsDate, IsNotEmpty } from "class-validator";
import { Message } from "src/message/message.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Profile" })
export class Profile {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstName: string
    @Column()
    @IsNotEmpty()
    lastName: string
    @Column()
    @IsEmail()
    email: string
    @Column()
    isOnline: boolean
    @Column()
    @IsDate()
    lastSeen: Date
    @Column()
    avatar: string
    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User
    @OneToMany(() => Message, message => message.sender)
    sentMessages: Message[]
    @OneToMany(() => Message, message => message.receiver)
    receivedMessages: Message[]

}
