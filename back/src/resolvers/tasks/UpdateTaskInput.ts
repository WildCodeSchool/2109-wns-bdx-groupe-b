import { ArgsType, Field, Int } from "type-graphql";
import { Status } from "../../models/Task";

@ArgsType()
class UpdateTaskInput {
    @Field(() => Int)
    id!: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    status!: Status;

    @Field({ nullable: true })
    initialTimeSpent!: number;

    @Field({ nullable: true })
    percentageTimeAccomplished!: number;
}

export default UpdateTaskInput;