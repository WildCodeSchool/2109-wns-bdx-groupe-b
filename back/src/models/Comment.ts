import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import { User } from './User'
import { Task } from './Task'

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text" })
    content!: string;

    @ManyToOne(() => User, user => user.comments)
    user!: User;

    @ManyToOne(() => Task, task => task.comments)
    task!: Task;
}