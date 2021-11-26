import "reflect-metadata";
import { createConnection }  from "typeorm";
import getApolloServer from "./apollo-server";
import dotenv from "dotenv";

//import getApolloServer from "./apollo-server";
//import getDatabaseConnection from "./database-connection";

dotenv.config();

const runServer = async () => {
  await createConnection();

  // eslint-disable-next-line no-console
  console.log("Connected to database");

  const server = await getApolloServer();

  // The `listen` method launches a web server.
  server.listen({ port: 3004 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

runServer();
