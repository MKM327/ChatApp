import { Profile } from "src/profile/profile.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, ManyToOne } from "typeorm";
import { IsDate, IsNotEmpty } from "class-validator";

@Entity({ name: "Message" })
export class Message {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => Profile, profile => profile.sentMessages)
    sender: Profile
    @ManyToOne(() => Profile, profile => profile.receivedMessages)
    receiver: Profile
    @Column()
    @IsNotEmpty()
    messageContent: string
    @Column()
    isRead: boolean
    @Column()
    @IsDate()
    date: Date
}