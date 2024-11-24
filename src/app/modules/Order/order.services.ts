import { Order } from './order.interface';
import { OrderModel } from './order.model';
const createOrderIntoDB = async (order: Order) => {
  const result = OrderModel.create(order);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};
