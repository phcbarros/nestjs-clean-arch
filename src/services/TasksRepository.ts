import { Task } from 'src/model/Task';

export interface TasksRepository {
  getById(id: number): Task;
  add(task: Task): Task;
  update(task: Task): Task;
  getAll(): Task[];
}
