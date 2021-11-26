import { ArgsType, Field } from "type-graphql";
import { Status } from "../../models/Project";

@ArgsType()
class CreateProjectInput {
    @Field()
    id!: number;

    @Field()
    name!: string;

    @Field()
    description!: string;

    @Field()
    status!: Status;

    @Field()
    dueDate!: string;

    @Field()
    initialTimeSpent!: number;

    @Field()
    totalTimeSpent!: number;

    @Field()
    percentageTimeAccomplished!: number;
}

export default CreateProjectInput;