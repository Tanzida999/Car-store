import express from 'express';
import { CarControllers } from './car.controller';

const router = express.Router();

//Will call conttroller function
router.post('/create-car', CarControllers.createCar);
router.get('/', CarControllers.getAllCarsFromDB);
router.get('/:carId', CarControllers.getSingleCarFromDB);
export const CarRoutes = router;
