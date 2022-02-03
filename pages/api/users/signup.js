import nc from 'next-connect';
import db from '../../../config/db';
import { signUp } from '../../../controllers/userController';

const handler = nc();

db.connect();

handler.post(signUp);

export default handler;
