import Book from '../models/Book';
import slugify from 'slugify';

export const getAllBook = async (req, res) => {
  try {
    const book = await Book.find({});
    return res.status(200).json({ message: 'success', data: book });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const createBook = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.title);
    const book = await new Book(req.body).save();
    return res.status(201).json({ message: 'success create book', data: book });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.query;
    const book = await Book.findById(id);
    return res.status(200).json({ message: 'success', data: book });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
