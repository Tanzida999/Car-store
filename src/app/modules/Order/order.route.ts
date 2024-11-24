import { Router } from 'express';
import { orderController } from './order.controller';

const router = Router();

router.post('/create-order', orderController.createOrder);
// router.get('/revenue', orderController.calculateRevenue);

export const OrderRoutes = router;