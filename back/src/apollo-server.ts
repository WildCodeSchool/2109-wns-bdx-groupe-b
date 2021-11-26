import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import ProjectResolver from "./resolvers/projects/ProjectResolver";

export default async () => {
    const schema = await buildSchema({ resolvers: [ProjectResolver] })
  const server = new ApolloServer({ schema });
  return server;
};