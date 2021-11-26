/*
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
*/


import { Field, ID, ObjectType } from "type-graphql";
import { 
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

export enum Status {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
} 

@Entity()
@ObjectType()
class Project extends BaseEntity {
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

    @Column({ type: "date" })
    @Field()
    dueDate!: string;

    @Column()
    @Field()
    thumbnailPath!: string;

    @Column()
    @Field()
    initialTimeSpent!: number;

    @Column()
    @Field()
    totalTimeSpent!: number;

    @Column()
    @Field()
    percentageTimeSpent!: number;

    @Column()
    @Field()
    percentageTimeAccomplished!: number;
}

export default Project ;
