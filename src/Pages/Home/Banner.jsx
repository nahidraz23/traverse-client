// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerBG1 from '../../assets/bannerImages/b1.jpg'
import bannerBG2 from '../../assets/bannerImages/b2.jpg'
import bannerBG3 from '../../assets/bannerImages/b3.jpg'
import bannerBG4 from '../../assets/bannerImages/b4.jpg'

const Banner = () => {
    return (
        <div className='mt-8 md:mt-14 container mx-auto rounded-2xl p-4 md:p-0'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:h-[675px] rounded-2xl"
            >
                <SwiperSlide className=''>
                    <img src={bannerBG1} alt="" className='w-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerBG2} alt="" className='w-full ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerBG3} alt="" className='w-full ' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerBG4} alt="" className='w-full ' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;