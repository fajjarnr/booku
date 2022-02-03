import nc from 'next-connect';
import db from '../../../config/db';
import { getBook } from '../../../controllers/bookController';

const handler = nc();

db.connect();

handler.get(getBook);

export default handler;
