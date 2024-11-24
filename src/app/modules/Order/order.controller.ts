import { Request, Response } from 'express';
import { OrderModel } from './order.model';
// import { CarModel } from '../Car/car.model';
import { orderServices } from './order.services';

// Create an order
const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    const result = await orderServices.createOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order is Created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Error creating order',
    });
  }
};
// Calculate total revenue from all orders
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderModel.aggregate([
      {
        $lookup: {
          from: 'cars',
          localField: 'car',
          foreignField: '_id',
          as: 'carDetails',
        },
      },
      {
        $unwind: '$carDetails',
      },
      {
        $project: {
          totalPrice: 1,
          carPrice: '$carDetails.price',
          quantity: 1,
        },
      },
      {
        $addFields: {
          calculatedRevenue: {
            $multiply: ['$carPrice', '$quantity'],
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$calculatedRevenue' },
        },
      },
    ]);

    if (totalRevenue.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'Revenue calculated successfully',
        data: { totalRevenue: 0 },
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: { totalRevenue: totalRevenue[0].totalRevenue },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Error calculating revenue',
    });
  }
};

export const orderController = {
  createOrder,
  calculateRevenue,
};
