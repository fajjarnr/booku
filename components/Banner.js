import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Banner({ banner }) {
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
        {banner.map(({ _id, image }) => (
          <SwiperSlide
            key={_id}
            className="bg-white text-center flex justify-center items-center"
          >
            <img
              src={image}
              className="block w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
