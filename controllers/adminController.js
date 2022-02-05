import User from '../models/User';
import Book from '../models/Book';
import { isAuth, isAdmin } from '../middleware/auth';

export const summary = async (req, res) => {
  try {
    const ordersCount = await Order.countDocuments();
    const productsCount = await Book.countDocuments();
    const usersCount = await User.countDocuments();
    const ordersPriceGroup = await Order.aggregate([
      {
        $group: {
          _id: null,
          sales: { $sum: '$totalPrice' },
        },
      },
    ]);

    const ordersPrice =
      ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;

    const salesData = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m', date: '$createdAt' } },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);

    res.send({
      ordersCount,
      productsCount,
      usersCount,
      ordersPrice,
      salesData,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
