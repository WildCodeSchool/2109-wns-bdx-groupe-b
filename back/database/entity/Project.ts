import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable} from "typeorm";

export enum Status {
    TODO = "todo",
    IN_PROGRESS = "in_progress",
    DONE = "done",
} 

@Entity()
export class Project {

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

    @Column({ type: "date" })
    dueDate!: string;

    @Column()
    thumbnailPath!: string;

    @Column()
    initialTimeSpent!: number;

    @Column()
    totalTimeSpent!: number;

    @Column()
    percentageTimeSpent!: number;

    @Column()
    percentageTimeAccompished!: number;
}