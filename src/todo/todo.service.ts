/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getOne(id: string): Promise<Todo> {
    return await this.todoRepository.findOne(id);
  }

  async createTodo(payload: CreateTodoDto): Promise<Todo> {
    return await this.todoRepository.create(payload);
  }
}
