export interface GetProjects_projects {
    __typename: "Posts";
    id: string;
    title: string;
    body: string;
  }
  
  export interface GetProjects {
    projects: GetProjects_projects[];
  }