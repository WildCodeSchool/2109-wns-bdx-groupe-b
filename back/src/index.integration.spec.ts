import { ApolloServer } from "apollo-server";
import { getConnection, createConnection } from "typeorm";
import getApolloServer from "./apollo-server";
//import Project from "./models/Project";

describe("Server", () => {
  let server: ApolloServer;

  beforeAll(async () => {
    server = await getApolloServer();
  });
  beforeEach(() => createConnection());
  afterEach(() => getConnection().close());

  describe("query projects", () => {
    const GET_PROJECTS = `
    query {
      projects {
        id
        name
        description
        status
        dueDate
        thumbnailPath
        initialTimeSpent
        totalTimeSpent
        percentageTimeSpent
        percentageTimeAccomplished
      }
    }`;

    
    describe("when there are no projects in database", () => {
      it("returns empty array", async () => {
        const result = await server.executeOperation({
          query: GET_PROJECTS,
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.projects).toEqual([]);
      });
    });
    

    /*describe("when there are wilders in database", () => {
      it("returns all wilders in database", async () => {
        const wilder1 = new Wilder();
        wilder1.name = "Nouveau";
        wilder1.city = "Paris";
        await wilder1.save();

        const wilder2 = new Project();
        wilder2.name = "Nouvelle";
        wilder2.city = "Toulouse";
        await wilder2.save();

        const result = await server.executeOperation({
          query: GET_WILDERS,
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.wilders).toMatchInlineSnapshot(`
          Array [
            Object {
              "city": "Paris",
              "id": "1",
              "name": "Nouveau",
              "skills": Array [],
            },
            Object {
              "city": "Toulouse",
              "id": "2",
              "name": "Nouvelle",
              "skills": Array [],
            },
          ]
        `);
      });
    });*/
  });
});

/*
describe("Server", () => {
    it("works", () => {
        expect(1 + 1).toEqual(2);
    })
});
*/