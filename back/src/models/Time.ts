import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import { Task } from './Task'

@Entity()
export class Time {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "time" })
    duration!: string;

    @ManyToOne(() => Task, task => task.times)
    task!: Task;
}
