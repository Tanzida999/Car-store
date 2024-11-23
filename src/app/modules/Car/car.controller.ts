import { Request, Response } from 'express';
import { CarServices } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const { car: carData } = req.body;

    const result = await CarServices.createCarIntoDB(carData);

    res.status(200).json({
      success: true,
      message: 'Car is Created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Error creating car',
    });
  }
};

const getAllCarsFromDB = async (req: Request, res: Response) => {
  try {
    const result = await CarServices.getAllCarsFromDB();
    res.status(200).json({
      success: true,
      message: 'Cars retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Error retrieving cars',
    });
  }
};

const getSingleCarFromDB = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.getSingleCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: 'Car retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Error retrieving car',
    });
  }
};

// Update a car in the database
const updateCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updatedCarData = req.body.car; // Assuming the updated car data is passed in the 'car' object

    // Call the service to update the car
    const result = await CarServices.updateCarIntoDb(carId, updatedCarData);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Car updated Successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Error updating car',
    });
  }
};

export const CarControllers = {
  createCar,
  getAllCarsFromDB,
  getSingleCarFromDB,
  updateCar,
};
