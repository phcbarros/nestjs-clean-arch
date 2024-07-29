import { Module } from '@nestjs/common';
import { TasksRepositoryMemory } from 'src/infrastructure/TasksRepositoryMemory';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TasksRepositoryMemory],
})
export class TasksModule {}
