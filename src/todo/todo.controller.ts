/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Get(':id')
  async getOne(@Param() id: string): Promise<Todo> {
    return await this.todoService.getOne(id);
  }

  @Post()
  async createTodo(@Body() payload: CreateTodoDto): Promise<Todo> {
    return await this.todoService.createTodo(payload);
  }
}
