const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function createStripeSession(req, res) {
  const { cart } = req.body;

  const transformedItems = cart.map((item) => ({
    description: item.description,
    quantity: item.quantity,
    price_data: {
      currency: 'idr',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    customer_email: 'customer@book.vercel.app',
    shipping_rates: ['shr_1KRcIPHrB7XJ14VnCxb1LQRJ'],
    shipping_address_collection: {
      allowed_countries: ['ID'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      images: JSON.stringify(cart.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}
