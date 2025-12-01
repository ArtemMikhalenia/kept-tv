import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { JSX } from 'react';

import './channel1PageStyles.scss';

const Channel1Page = (): JSX.Element => {
  return (
    <div className="channel1-page-container">
      Content channel1
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Channel1Page;
