import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from "swiper";

//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

function App() {
  return (
    <Swiper
      className='swiper-container'
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide> slide1 </SwiperSlide>
      <SwiperSlide> slide2 </SwiperSlide>
      <SwiperSlide> slide3 </SwiperSlide>
      <SwiperSlide> slide4 </SwiperSlide>
      <SwiperSlide> slide5 </SwiperSlide>
      <SwiperSlide> slide6 </SwiperSlide>
      <SwiperSlide> slide7 </SwiperSlide>
    </Swiper>
  );
}

export default App;