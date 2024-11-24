import { ObjectId } from 'mongoose';

export interface Order {
  email: string;
  car: ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
