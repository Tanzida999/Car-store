import { model, Schema } from 'mongoose';
import { Car } from './car.interface';
const carSchema = new Schema<Car>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

export const CarModel = model<Car>('Car', carSchema);
