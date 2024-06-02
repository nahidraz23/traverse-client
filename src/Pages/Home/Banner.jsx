// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerBG1 from '../../assets/bannerImages/b1.jpeg'

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='w-full h-[740px]'>
                    <img src={bannerBG1} alt="" className='w-full h-[740px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[740px]'>
                    <img src={bannerBG1} alt="" className='w-full h-[740px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[740px]'>
                    <img src={bannerBG1} alt="" className='w-full h-[740px]' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full h-[740px]'>
                    <img src={bannerBG1} alt="" className='w-full h-[740px]' />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;