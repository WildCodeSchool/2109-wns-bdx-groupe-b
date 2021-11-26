import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import { User } from './User'
import { Task } from './Task'

@Entity()
export class File {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ type: "text" })
    path!: string;

    @ManyToOne(() => User, user => user.files)
    user!: User;

    @ManyToOne(() => Task, task => task.files)
    task!: Task;
}