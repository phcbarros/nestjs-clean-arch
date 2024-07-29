import { Injectable } from '@nestjs/common';
import { Task } from 'src/model/Task';
import { TasksRepository } from 'src/services/TasksRepository';

@Injectable()
export class TasksRepositoryMemory implements TasksRepository {
  private tasks: Task[] = [];

  getById(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }

  add(task: Task): Task {
    this.tasks.push(task);
    return task;
  }

  update(task: Task): Task {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[index] = task;
    return task;
  }

  getAll(): Task[] {
    return this.tasks;
  }
}
