import { Task } from 'src/model/Task';

export interface TaskService {
  addTask(task: Task): Task;
  markTaskAsCompleted(taskId: number): Task;
  getAllTasks(): Task[];
  getTaskById(taskId: number): Task;
}
