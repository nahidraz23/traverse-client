// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import PackageCard from './PackageCard';

const OurPackages = () => {
    const [tourPackage, setTourPackage] = useState([]);

    useEffect(() => {
        fetch('/tourpackages.json')
            .then(res => res.json())
            .then(data => setTourPackage(data))
    }, [])

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
                        tourPackage.map((item, index) =>
                            <SwiperSlide key={index} >
                                <div className='flex bg-white'>
                                    <PackageCard cardInfo={item}></PackageCard>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </div>


            </Swiper>
        </div>
    );
};

export default OurPackages;