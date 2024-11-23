import express from 'express';
import { CarControllers } from './car.controller';

const router = express.Router();

//Will call conttroller function
router.post('/create-car', CarControllers.createCar);

export const CarRoutes = router;
