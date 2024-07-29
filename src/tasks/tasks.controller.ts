import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from 'src/model/Task';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  addTask(@Body() createTaskDto: CreateTaskDto): Task {
    console.log(createTaskDto);
    const task = new Task(createTaskDto.title);
    return this.tasksService.addTask(task);
  }

  @Patch(':id')
  markTaskAsCompleted(@Param('id') taskId: number): Task {
    return this.tasksService.markTaskAsCompleted(Number(taskId));
  }

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') taskId: number): Task {
    return this.tasksService.getTaskById(Number(taskId));
  }
}
