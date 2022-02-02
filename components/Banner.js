import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const image = [
  {
    id: 1,
    imageUrl:
      'https://cdn.gramedia.com/uploads/marketing/OBF_10_-_Anteraja_Storefront__wauto_h336.png',
    imageAlt: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    imageUrl:
      'https://cdn.gramedia.com/uploads/marketing/Pre-Order_Koloni_Rumah_Mice_Storefront__wauto_h336.png',
    imageAlt: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    imageUrl:
      'https://cdn.gramedia.com/uploads/marketing/Special_Offer_Melangkah_Storefront__wauto_h336.png',
    imageAlt: 'Lorem ipsum dolor sit amet.',
  },
];

export default function Banner() {
  return (
    <div className="px-4 md:px-6 lg:px-18 xl:px-32">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full mx-auto rounded-lg"
      >
        {image.map(({ id, imageUrl, imageAlt }) => (
          <SwiperSlide
            key={id}
            className="bg-white text-center flex justify-center items-center"
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="block w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
