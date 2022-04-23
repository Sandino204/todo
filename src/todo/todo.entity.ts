import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  created_at: Date;

  @Prop()
  started_at?: Date;

  @Prop()
  finished_at?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
