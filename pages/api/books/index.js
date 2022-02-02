import nc from 'next-connect';
import db from '../../../config/dbConnect';
import { getAllBook } from '../../../controllers/bookController';

const handler = nc();

db.connect();

handler.get(getAllBook);

export default handler;
