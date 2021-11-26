import { Args, Mutation, Query, Resolver } from "type-graphql";
import Project from "../../models/Project";

import CreateProjectInput from "./CreateProjectInput";
import DeleteProjectInput from "./DeleteProjectInput";
import UpdateProjectInput from "./UpdateProjectInput";

@Resolver(Project)
class ProjectResolver {
  @Query(() => [Project])
  async project() {
    const projects = await Project.find();
    return projects;
  }

  @Mutation(() => Project)
  async CreateProject(@Args() { 
      name, 
      description, 
      status, 
      dueDate, 
      initialTimeSpent, 
      totalTimeSpent, 
      percentageTimeAccomplished
    }: CreateProjectInput) {
    const projectToBeCreated = new Project();
    projectToBeCreated.name = name;
    projectToBeCreated.description = description;
    projectToBeCreated.status = status;
    projectToBeCreated.dueDate = dueDate;
    projectToBeCreated.initialTimeSpent = initialTimeSpent;
    projectToBeCreated.totalTimeSpent = totalTimeSpent;
    projectToBeCreated.percentageTimeAccomplished = percentageTimeAccomplished;
    const newProject = await projectToBeCreated.save();
    return Project.findOne({ id: newProject.id });
  }

  @Mutation(() => Project)
  async deleteProject(@Args() { id }: DeleteProjectInput) {
    const project = await Project.findOneOrFail({ id });
    await Project.remove(project);
    return project;
  }

  @Mutation(() => Project)
  async UpdateProject(@Args() { id, name, description, status, dueDate, initialTimeSpent, totalTimeSpent, percentageTimeAccomplished } : UpdateProjectInput) {
    const project = await Project.findOneOrFail({ id });
    await Project.update(project, { name, description, status, dueDate, initialTimeSpent, totalTimeSpent, percentageTimeAccomplished });
    const updateProject = await Project.findOne({ id });
    return updateProject;
  }
}

export default ProjectResolver;