import Book from '../models/Book';

export const getAllBook = async (req, res) => {
  try {
    const book = await Book.find({});
    return res.status(200).json({ message: 'success', data: book });
  } catch (error) {
    console.error(error);
  }
};
