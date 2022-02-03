import nc from 'next-connect';
import db from '../../../config/db';
import { signIn } from '../../../controllers/userController';

const handler = nc();

db.connect();

handler.post(signIn);

export default handler;
