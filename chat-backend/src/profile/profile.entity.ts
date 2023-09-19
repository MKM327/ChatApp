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
    lastName: string
    @Column()
    email: string
    @OneToOne(() => User, user => user.profile)
    @JoinColumn()
    user: User
    @OneToMany(() => Message, message => message.sender)
    sentMessages: Message[]
    @OneToMany(() => Message, message => message.receiver)
    receivedMessages: Message[]

}
