import nc from 'next-connect';
import Book from '../../models/Book';
import db from '../../config/db';
import seed from '../../utils/seed';
import User from '../../models/User';
import Banner from '../../models/Banner';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(seed.users);
  await Book.deleteMany();
  await Book.insertMany(seed.books);
  await Banner.deleteMany();
  await Banner.insertMany(seed.banners);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
