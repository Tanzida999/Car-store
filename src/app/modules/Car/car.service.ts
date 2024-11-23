import { Car } from './car.interface';
import { CarModel } from './Car.model';

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};
export const CarServices = {
  createCarIntoDB,
};
