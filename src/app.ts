import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/Car/car.route';
import { OrderRoutes } from './app/modules/Order/order.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application rouutes
app.use('/api/v1/cars', CarRoutes);
app.use('/api/v1/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};
app.get('/', getAController);

console.log(process.cwd());

export default app;
