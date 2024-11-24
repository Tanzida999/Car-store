import { model, Schema } from 'mongoose';
import { Car } from './car.interface';
const carSchema = new Schema<Car>(
  {
    name: { type: String, required: [true, 'Car name is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: (v: string) => /\S+@\S+\.\S+/.test(v),
        message: 'Invalid email format',
      },
    },
    avatar: { type: String },
    brand: { type: String, required: [true, 'Brand is required'] },
    model: { type: String, required: [true, 'Model is required'] },
    year: {
      type: Number,
      required: [true, 'Year is required'],
      min: [1886, 'Year must be after 1885'],
    },
    price: { type: Number, required: [true, 'Price is required'] },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
        message:
          'Category must be one of Sedan, SUV, Truck, Coupe, Convertible',
      },
    },
    description: { type: String, required: [true, 'Description is required'] },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a non-negative number'],
    },
    inStock: { type: Boolean, required: [true, 'InStock status is required'] },
  },
  {
    timestamps: true,
  },
);

export const CarModel = model<Car>('Car', carSchema);
