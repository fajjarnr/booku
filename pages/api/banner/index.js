import nc from 'next-connect';
import db from '../../../config/dbConnect';
import { getAllBanner } from '../../../controllers/bannerContrainer';

const handler = nc();

db.connect();

handler.get(getAllBanner);

export default handler;
