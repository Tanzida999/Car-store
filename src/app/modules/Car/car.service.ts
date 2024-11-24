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

const updateCarIntoDb = async (id: string, updatedCarData: Car) => {
  const result = await CarModel.findByIdAndUpdate(
    id,
    { $set: updatedCarData },
    { new: true, runValidators: true },
  );

  return result;
};
const deleteCarFromDB = async (id: string) => {
  const result = await CarModel.findByIdAndDelete(id);
  return result;
};
export const CarServices = {
  createCarIntoDB,
  getAllCarsFromDB,
  getSingleCarFromDB,
  updateCarIntoDb,
  deleteCarFromDB,
};
