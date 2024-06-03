import SectionHeading from "../../../Components/Shared/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const TourTypeSection = () => {
    return (
        <div className="container mx-auto">
            <div>
                <SectionHeading
                    heading={"Tour Types"}
                    subHeading={"Explore diverse tour types, from adventure and cultural to luxury and family-friendly, each offering unique and unforgettable experiences"}
                ></SectionHeading>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        {/* Adventure */}
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Adventure Tours</h2>
                                    <p className="text-center">Thrilling activities like hiking, rafting, and safaris for adrenaline seekers</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    {/* Cultural Tours */}
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Cultural Tours</h2>
                                    <p className="text-center">Immersive experiences in the heritage and traditions of diverse regions</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">City Tours</h2>
                                    <p className="text-center">Exploration of vibrant urban landmarks, hidden gems, and local hotspots</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Nature Tours</h2>
                                    <p className="text-center">Scenic journeys through forests, mountains, and national parks</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Historical Tours</h2>
                                    <p className="text-center">Visits to ancient landmarks and sites of historical significance</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Beach Tours</h2>
                                    <p className="text-center">Relaxing getaways to beautiful coastal destinations with sun and surf</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Luxury Tours</h2>
                                    <p className="text-center">Top-tier accommodations, gourmet dining, and VIP experiences</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Eco Tours</h2>
                                    <p className="text-center">Environmentally-friendly trips promoting sustainability and conservation</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src="https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                <div className="card-body my-12">
                                    <h2 className="text-4xl text-center font-semibold">Family Tours</h2>
                                    <p className="text-center">Fun, family-friendly activities suitable for all ages and interests</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TourTypeSection;