import { Field, ID, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToMany, BaseEntity} from "typeorm";
/* import { User } from './User'
import { File } from './File'
import { Comment } from './Comment'
import { Time } from './Time'
import { Job } from './Job' */

export enum Status {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done",
} 

@Entity()
@ObjectType()
class Task extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id!: number;

    @Column()
    @Field()
    name!: string;

    @Column({ type: "text" })
    @Field()
    description!: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.TODO
    })
    @Field()
    status!: Status;

    @Column()
    @Field()
    initialTimeSpent!: number;

    @Column()
    @Field()
    percentageTimeAccomplished!: number;

    /* @ManyToMany(() => User)
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
    times!: Time[]; */
}
export default Task;