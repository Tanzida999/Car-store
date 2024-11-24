import { Router } from 'express';
import { CarControllers } from './car.controller';

const router = Router();

// Define routes for the cars module
router.post('/create-car', CarControllers.createCar);
router.get('/', CarControllers.getAllCarsFromDB);
router.get('/:carId', CarControllers.getSingleCarFromDB);
router.put('/update-car/:carId', CarControllers.updateCar);
router.delete('/delete-car/:carId', CarControllers.deleteCar);

export const CarRoutes = router;
