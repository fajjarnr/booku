import nc from 'next-connect';
import db from '../../../config/db';
import { getAllUser } from '../../../controllers/userController';

const handler = nc();

db.connect();

handler.get(getAllUser);

export default handler;
