// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerBG1 from '../../assets/bannerImages/b1.jpeg'
import bannerBG2 from '../../assets/bannerImages/b2.jpg'
import bannerBG3 from '../../assets/bannerImages/b3.jpg'
import bannerBG4 from '../../assets/bannerImages/b4.jpg'

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
                <div className='w-full md:h-screen'>
                    <img src={bannerBG1} alt="" className='w-full md:h-screen' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full md:h-screen'>
                    <img src={bannerBG2} alt="" className='w-full md:h-screen' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full md:h-screen'>
                    <img src={bannerBG3} alt="" className='w-full md:h-screen' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full md:h-screen'>
                    <img src={bannerBG4} alt="" className='w-full md:h-screen' />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;