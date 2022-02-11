import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../middleware/auth';
import Book from '../../../../models/Book';
import db from '../../../../config/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const book = await Book.findById(req.query.id);
  await db.disconnect();
  res.send(book);
});

handler.put(async (req, res) => {
  await db.connect();
  const book = await Book.findById(req.query.id);
  if (book) {
    book.name = req.body.name;
    book.slug = req.body.slug;
    book.price = req.body.price;
    book.category = req.body.category;
    book.image = req.body.image;
    book.featuredImage = req.body.featuredImage;
    book.isFeatured = req.body.isFeatured;
    book.brand = req.body.brand;
    book.countInStock = req.body.countInStock;
    book.description = req.body.description;
    await book.save();
    await db.disconnect();
    res.send({ message: 'book Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'book Not Found' });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const book = await Book.findById(req.query.id);
  if (book) {
    await book.remove();
    await db.disconnect();
    res.send({ message: 'book Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'book Not Found' });
  }
});

export default handler;
