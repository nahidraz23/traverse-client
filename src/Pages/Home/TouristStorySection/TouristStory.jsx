import SectionHeading from "../../../Components/Shared/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import StoryCard from "./StoryCard";

const TouristStory = () => {
    const axiosPublic = useAxiosPublic();

    const { data: stories = [] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories')
            return res.data
        }
    })

    return (
        <div>
            <div>
                <SectionHeading
                    heading={"Tourist Story"}
                    subHeading={"Experience the world through captivating travel tales"}
                ></SectionHeading>
            </div>
            <div className="my-10 container mx-auto w-full p-4 md:p-0">
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px (medium devices)
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px (larger devices)
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}

                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    {
                        stories.map((story, index) =>
                            <SwiperSlide key={index}>
                                <StoryCard story={story}></StoryCard>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TouristStory;