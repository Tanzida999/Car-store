import { Car } from './car.interface';
import { CarModel } from './car.model';

const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

const getAllCarsFromDB = async () => {
  const result = await CarModel.find();

  return result;
};
const getSingleCarFromDB = async (id: string) => {
  const result = await CarModel.find({ _id: id });

  return result;
};
export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
};
