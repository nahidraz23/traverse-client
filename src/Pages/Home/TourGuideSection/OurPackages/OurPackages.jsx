// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import PackageCard from './PackageCard';
import { Link } from 'react-router-dom';
import usePackage from '../../../../hooks/usePackage';

const OurPackages = () => {
    
    const [tourPackage] = usePackage();

    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div>
                    {
                        tourPackage.slice(0,6).map((item, index) =>
                            <SwiperSlide key={index} >
                                <div className='flex m-2'>
                                    <PackageCard cardInfo={item}></PackageCard>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
            <Link to={'/allpackages'}><button className='btn bg-secondary-color text-white mt-5'>All Package</button></Link>
        </div>
    );
};

export default OurPackages;