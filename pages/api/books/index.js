import nc from 'next-connect';
import db from '../../../config/dbConnect';
import { getAllBook, createBook } from '../../../controllers/bookController';

const handler = nc();

db.connect();

handler.get(getAllBook);
handler.post(createBook);

export default handler;
