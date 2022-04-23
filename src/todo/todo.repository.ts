import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo, TodoDocument } from './todo.entity';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  async find(): Promise<Todo[]> {
    try {
      const todoList = await this.todoModel.find();

      return todoList;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException({
        message: 'Something went wrong',
      });
    }
  }

  async findOne(id: string): Promise<any> {
    try {
      const find = await this.todoModel.findById(id);

      return find;
    } catch (err) {
      console.log(err);

      throw new InternalServerErrorException({
        message: 'Something went wrong',
      });
    }
  }

  async create(input: CreateTodoDto): Promise<Todo> {
    try {
      const createdTodo = await this.todoModel.create({
        title: input.title,
        description: input.description,
        created_at: Date.now(),
      });

      return createdTodo;
    } catch (err) {
      console.log(err);

      throw new InternalServerErrorException({
        message: 'Something went wrong',
      });
    }
  }
}
