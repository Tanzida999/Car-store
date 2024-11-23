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
  }
};

export const CarControllers = {
  createCar,
};