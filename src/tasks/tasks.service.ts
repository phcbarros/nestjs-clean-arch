import { Injectable } from '@nestjs/common';
import { TasksRepositoryMemory } from 'src/infrastructure/TasksRepositoryMemory';
import { Task } from 'src/model/Task';
import { TaskService as ITaskService } from '../use-case/TaskService';

@Injectable()
export class TasksService implements ITaskService {
  constructor(private readonly tasksRepository: TasksRepositoryMemory) {}
  getAllTasks(): Task[] {
    return this.tasksRepository.getAll();
  }

  addTask(task: Task): Task {
    return this.tasksRepository.add(task);
  }

  markTaskAsCompleted(taskId: number): Task {
    const task = this.tasksRepository.getById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    task.markAsCompleted();

    return this.tasksRepository.update(task);
  }

  getTaskById(taskId: number): Task {
    return this.tasksRepository.getById(taskId);
  }
}
