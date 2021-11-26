import { ArgsType, Field, Int } from "type-graphql";
import { Status } from "../../models/Project";

@ArgsType()
class UpdateProjectInput {
    @Field(() => Int)
    id!: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    status!: Status;

    @Field({ nullable: true })
    dueDate!: string;

    @Field({ nullable: true })
    initialTimeSpent!: number;

    @Field({ nullable: true })
    totalTimeSpent!: number;

    @Field({ nullable: true })
    percentageTimeAccomplished!: number;
}

export default UpdateProjectInput;