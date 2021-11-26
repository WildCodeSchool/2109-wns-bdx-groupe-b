import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany} from "typeorm";
import { User } from './User'
import { File } from './File'
import { Comment } from './Comment'
import { Time } from './Time'
import { Job } from './Job'

export enum Status {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done",
} 

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.TODO
    })
    status!: Status;

    @Column()
    initialTimeSpent!: number;

    @Column()
    percentageTimeAccompished!: number;

    @ManyToMany(() => User)
    @JoinTable()
    users!: User[];

    @ManyToMany(() => Job)
    @JoinTable()
    jobs!: Job[];

    @OneToMany(() => File, files => files.task)
    files!: File[];

    @OneToMany(() => Comment, comments => comments.task)
    comments!: Comment[];

    @OneToMany(() => Time, times => times.task)
    times!: Time[];
}