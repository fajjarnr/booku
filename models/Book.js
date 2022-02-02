import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const booksSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    // reviews: [reviewSchema],
    featuredImage: { type: String },
    isFeatured: { type: Boolean, required: true, default: false },
    numOfPage: { type: Number, required: true, default: 0 },
    isbn: { type: Number, required: true, default: 0 },
    publisher: { type: String, required: true },
    language: { type: String, required: true },
    releaseDate: { type: String, required: true },
    weight: { type: Number },
    large: { type: Number },
    long: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model('Book', booksSchema);
export default Book;
