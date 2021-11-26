import { ArgsType, Field } from "type-graphql";
import { Status } from "../../models/Task";

@ArgsType()
class CreateTaskInput {
    @Field()
    id!: number;

    @Field()
    name!: string;

    @Field()
    description!: string;

    @Field()
    status!: Status;

    @Field()
    initialTimeSpent!: number;

    @Field()
    percentageTimeAccomplished!: number;
}

export default CreateTaskInput;