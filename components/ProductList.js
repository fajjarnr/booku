import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc:
      'https://cdn.gramedia.com/uploads/items/9786020333175_rich-dad-poor-dad-_edisi-revisi_.jpg',
    imageAlt:
      'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc:
      'https://cdn.gramedia.com/uploads/items/9786020649344_YOU_DO_YOU_RUBY_C_1_4-1.jpg',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Novel Selamat Tinggal',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://cdn.gramedia.com/uploads/items/selamat_tinggal.jpg',
    imageAlt: 'Novel Selamat Tinggal',
  },
  {
    id: 4,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc:
      'https://cdn.gramedia.com/uploads/items/9786020333175_rich-dad-poor-dad-_edisi-revisi_.jpg',
    imageAlt:
      'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 5,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc:
      'https://cdn.gramedia.com/uploads/items/9786020649344_YOU_DO_YOU_RUBY_C_1_4-1.jpg',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 6,
    name: 'Novel Selamat Tinggal',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://cdn.gramedia.com/uploads/items/selamat_tinggal.jpg',
    imageAlt: 'Novel Selamat Tinggal',
  },
  {
    id: 7,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc:
      'https://cdn.gramedia.com/uploads/items/9786020333175_rich-dad-poor-dad-_edisi-revisi_.jpg',
    imageAlt:
      'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 8,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc:
      'https://cdn.gramedia.com/uploads/items/9786020649344_YOU_DO_YOU_RUBY_C_1_4-1.jpg',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 9,
    name: 'Novel Selamat Tinggal',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc: 'https://cdn.gramedia.com/uploads/items/selamat_tinggal.jpg',
    imageAlt: 'Novel Selamat Tinggal',
  },
];

export default function ProductList() {
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
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="bg-white text-left flex justify-center items-center"
          >
            <Link href={product.href}>
              <a className="group text-sm">
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-500 italic">{product.availability}</p>
                <p className="mt-2 font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
