import nc from 'next-connect';
import db from '../../../config/db';
import { onError } from '../../../config/error';
import { users } from '../../../controllers/adminController';
import { isAuth, isAdmin } from '../../../middleware/auth';

const handler = nc({ onError });

handler.use(isAuth, isAdmin);

db.connect();

handler.get(users);

export default handler;
