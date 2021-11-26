import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, ManyToOne} from "typeorm";
import { Job } from "./Job"
import { File } from "./File"
import { Comment } from "./Comment"

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
} 

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    avatarPath!: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role!: UserRole;

    @Column()
    isVerify!: Boolean;

    @Column()
    token!: string;

    @ManyToOne(() => Job, job => job.users)
    job!: Job;

    @OneToMany(() => File, files => files.user)
    files!: File[];

    @OneToMany(() => Comment, comments => comments.user)
    comments!: Comment[];
}


