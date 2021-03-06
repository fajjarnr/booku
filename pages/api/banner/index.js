import nc from 'next-connect';
import db from '../../../config/db';
import { getAllBanner } from '../../../controllers/bannerController';

const handler = nc();

db.connect();

handler.get(getAllBanner);

export default handler;
