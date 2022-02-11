import User from '../models/User';
import Book from '../models/Book';

export const summary = async (req, res) => {
  try {
    const booksCount = await Book.countDocuments();
    const usersCount = await User.countDocuments();

    res.send({
      booksCount,
      usersCount,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const users = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ message: 'success', data: users });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const books = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ message: 'success', data: books });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
