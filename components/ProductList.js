import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { formatter } from '../utils/formatter';

export default function ProductList({ book }) {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-4 lg:mt-8 overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">
          Rekomendasi
        </h2>
        <Link href="/books">
          <a className="font-bold text-red-500 hover:underline">Lihat Semua</a>
        </Link>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="h-full w-full mx-auto sm:grid"
      >
        {book.map(({ _id, slug, image, title, price }) => (
          <SwiperSlide
            key={_id}
            className="bg-white text-left flex justify-center items-center"
          >
            <Link href={`/book/${slug}`}>
              <a className="group text-sm">
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {`${title.slice(0, 30)}...`}
                </h3>
                <p className="mt-2 font-medium text-gray-900">
                  {formatter.format(price)}
                </p>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
