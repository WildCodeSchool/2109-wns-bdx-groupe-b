import { Args, Mutation, Query, Resolver } from "type-graphql";
import Task from "../../models/Task";

import CreateTaskInput from "./CreateTaskInput";
import DeleteTaskInput from "./DeleteTaskInput";
import UpdateTaskInput from "./UpdateTaskInput";

@Resolver(Task)
class TaskResolver {
  @Query(() => [Task])
  async task() {
    const tasks = await Task.find();
    return tasks;
  }

  @Mutation(() => Task)
  async CreateProject(@Args() { 
      name, 
      description, 
      status,
      initialTimeSpent,
      percentageTimeAccomplished
    }: CreateTaskInput) {
    const taskToBeCreated = new Task();
    taskToBeCreated.name = name;
    taskToBeCreated.description = description;
    taskToBeCreated.status = status;
    taskToBeCreated.initialTimeSpent = initialTimeSpent;
    taskToBeCreated.percentageTimeAccomplished = percentageTimeAccomplished;
    const newTask = await taskToBeCreated.save();
    return Task.findOne({ id: newTask.id });
  }

  @Mutation(() => Task)
  async deleteProject(@Args() { id }: DeleteTaskInput) {
    const task = await Task.findOneOrFail({ id });
    await Task.remove(task);
    return task;
  }

  @Mutation(() => Task)
  async UpdateTask(@Args() { id, name, description, status, initialTimeSpent, percentageTimeAccomplished } : UpdateTaskInput) {
    const task = await Task.findOneOrFail({ id });
    await Task.update(task, { name, description, status, initialTimeSpent, percentageTimeAccomplished });
    const updateTask= await Task.findOne({ id });
    return updateTask;
  }
}

export default TaskResolver;