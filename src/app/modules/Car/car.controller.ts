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

const updateCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updatedCarData = req.body.car;

    // Call service to update the car in DB
    const result = await CarServices.updateCarIntoDb(carId, updatedCarData);

    if (result) {
      // Successfully updated car
      res.status(200).json({
        success: true,
        message: 'Car updated successfully',
        data: result,
      });
    } else {
      // Car not found, respond with 404
      res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }
  } catch (err) {
    console.log(err);
    // Error occurred during update
    res.status(500).json({
      success: false,
      message: 'Error updating car',
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await CarServices.deleteCarFromDB(carId);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Car deleted successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Car not found',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Error deleting car',
    });
  }
};

export const CarControllers = {
  createCar,
  getAllCarsFromDB,
  getSingleCarFromDB,
  updateCar,
  deleteCar,
};
