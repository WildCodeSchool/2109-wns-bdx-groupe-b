import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
class DeleteTaskInput {
  @Field(() => Int)
  id!: number;
}

export default DeleteTaskInput;