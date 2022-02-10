import nc from 'next-connect';
import db from '../../config/db';
import { createStripeSession } from '../../controllers/paymentController';
import { onError } from '../../config/error';

const handler = nc({ onError });

db.connect();

handler.post(createStripeSession);

export default handler;
