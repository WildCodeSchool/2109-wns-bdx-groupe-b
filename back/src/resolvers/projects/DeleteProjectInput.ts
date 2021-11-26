 import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
class DeleteProjectInput {
  @Field(() => Int)
  id!: number;
}

export default DeleteProjectInput;