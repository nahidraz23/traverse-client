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
        <div className="container mx-auto text-center">
            <div>
                <SectionHeading
                    heading={"Tour Types"}
                    subHeading={"Explore diverse tour types, from adventure and cultural to luxury and family-friendly"}
                ></SectionHeading>
            </div>
            <div >
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
                    <div className="">
                        <SwiperSlide>
                            {/* Adventure */}
                            <Link to={`/tourtype/Adventure`}>
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
                            <Link to={`/tourtype/Cultural`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://images.unsplash.com/photo-1611652951546-7dde1b5f804c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN1bHR1cmFsJTIwdG91cnxlbnwwfDB8MHx8fDA%3D" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Cultural Tours</h2>
                                        <p className="text-center">Immersive experiences in the heritage and traditions of diverse regions</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* City tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/City`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://plus.unsplash.com/premium_photo-1661885874118-09b795064a3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHRvdXJ8ZW58MHwwfDB8fHww" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">City Tours</h2>
                                        <p className="text-center">Exploration of vibrant urban landmarks, hidden gems, and local hotspots</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* Nature tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/Nature`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://plus.unsplash.com/premium_photo-1663040014450-11d8157ad539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdG91cnxlbnwwfDB8MHx8fDA%3D" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Nature Tours</h2>
                                        <p className="text-center">Scenic journeys through forests, mountains, and national parks</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* Historical tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/Historical`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://images.unsplash.com/photo-1619523439722-c27651e8e10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpc3RvcmljYWwlMjB0b3VyfGVufDB8MHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Historical Tours</h2>
                                        <p className="text-center">Visits to ancient landmarks and sites of historical significance</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* Beach tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/Beach`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://plus.unsplash.com/premium_photo-1661882523060-4222337302f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjB0b3VyfGVufDB8MHwwfHx8MA%3D%3D" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Beach Tours</h2>
                                        <p className="text-center">Relaxing getaways to beautiful coastal destinations with sun and surf</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* Luxury tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/Luxury`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://plus.unsplash.com/premium_photo-1661934381160-8b1f9ee981a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwdG91cnxlbnwwfDB8MHx8fDA%3D" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Luxury Tours</h2>
                                        <p className="text-center">Top-tier accommodations, gourmet dining, and VIP experiences</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* Eco tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/Eco`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVjbyUyMHRvdXJ8ZW58MHwwfDB8fHww" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Eco Tours</h2>
                                        <p className="text-center">Environmentally-friendly trips promoting sustainability and conservation</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        {/* Family tour */}
                        <SwiperSlide>
                            <Link to={`/tourtype/Family`}>
                                <div className="card w-96 bg-base-100 shadow-xl image-full">
                                    <figure><img src="https://plus.unsplash.com/premium_photo-1708007650538-f2a9057b3841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFtaWx5JTIwdG91cnxlbnwwfDB8MHx8fDA%3D" alt="Shoes" /></figure>
                                    <div className="card-body my-12">
                                        <h2 className="text-4xl text-center font-semibold">Family Tours</h2>
                                        <p className="text-center">Fun, family-friendly activities suitable for all ages and interests</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default TourTypeSection;