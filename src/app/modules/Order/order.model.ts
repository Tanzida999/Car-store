import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'Car ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive value'],
    },
  },
  {
    timestamps: true,
  },
);

export const OrderModel = model<Order>('Order', orderSchema);
