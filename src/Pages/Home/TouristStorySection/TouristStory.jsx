import SectionHeading from "../../../Components/Shared/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { BiSolidCommentCheck } from "react-icons/bi";

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
                    subHeading={"Experience the world through captivating travel tales and unforgettable adventures"}
                ></SectionHeading>
            </div>
            <div className="text-center my-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        stories.map((story, index) =>
                            <SwiperSlide key={index}>
                                <Link to={`/storydetails/${story._id}`}>
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <div>
                                            <BiSolidCommentCheck className="text-9xl text-secondary-color"/>
                                        </div>
                                        <div className="space-y-2 text-2xl">
                                            <h1 className="font-bold">Tourist Name: {story?.name}</h1>
                                            <h1 className="font-bold">Tourist Email: {story?.email}</h1>
                                            <h1 className="font-bold">Tour Title: {story?.title}</h1>
                                            <p className="font-semibold">My Story: {story.experience}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TouristStory;