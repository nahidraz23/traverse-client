import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaDollarSign, FaMobileAlt } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import PhotoAlbum from "react-photo-album";
import { useLoaderData } from "react-router-dom";
import { MdAccessTime, MdOutlineHealthAndSafety } from "react-icons/md";

const photos1 = [
    {
        src: "https://images.unsplash.com/photo-1631182951500-226ee196e219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNhZmFyaSUyMHBhcmt8ZW58MHwwfDB8fHww", width: 800, height: 600
    },
    {
        src: "https://images.unsplash.com/photo-1600781980959-118cf6eae2ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW5mb3Jlc3R8ZW58MHwwfDB8fHww", width: 1600, height: 900
    },
    {
        src: "https://images.unsplash.com/photo-1709841618055-bbe3cca6f1a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZvcmVzdCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D", width: 600, height: 900
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1694475632941-05ff7486f8c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHlyYW1pZHxlbnwwfHwwfHx8MA%3D%3D", width: 1200, height: 900
    },
    {
        src: "https://images.unsplash.com/photo-1624646580989-9f059e25eb78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbWlseSUyMHRvdXJ8ZW58MHx8MHx8fDA%3D", width: 1200, height: 900
    },
]
const photos2 = [
    {
        src: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D", width: 800, height: 600
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1664299738990-9c29e650f784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D", width: 1000, height: 900
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D", width: 900, height: 900
    },
    {
        src: "https://images.unsplash.com/photo-1677427300033-0f6df9df62a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D", width: 900, height: 900
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661329832448-b79c0fd51890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VsdHVyYWwlMjB0b3VyaXNtfGVufDB8fDB8fHww", width: 900, height: 900,
    },
]

const PackageDetails = () => {

    const packageData = useLoaderData();
    const { date, image, price, title, type } = packageData;

    return (
        <div className="min-h-[calc(100vh-278px)] pt-20 container mx-auto">
            <div className="">
                <div>
                    <h1 className="text-3xl font-bold font-volkhov text-center py-5">Gallery</h1>
                </div>
                <div className="flex flex-col gap-6 border-4 p-2 border-secondary-color">
                    <div>
                        <PhotoAlbum layout="columns" photos={photos1}></PhotoAlbum>
                    </div>
                    <div>
                        <PhotoAlbum layout="columns" photos={photos2}></PhotoAlbum>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <div className="my-5">
                    <h1 className="text-2xl text-center ">Tour Details</h1>
                </div>
                <div >
                    <div className="flex justify-center gap-10 items-center">
                        <div className="artboard artboard-horizontal phone-1">
                            <img src={image} alt="" className="h-full rounded-2xl" />
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-1 items-center text-4xl font-volkhov font-bold">
                                <p>{title}</p>
                            </div>
                            <div className="flex gap-1 items-center text-2xl">
                                <BiCategory></BiCategory>
                                <p>{type}</p>
                            </div>
                            <div className="flex gap-1 items-center text-2xl">
                                <FaCalendarAlt></FaCalendarAlt>
                                <p>{date}</p>
                            </div>
                            <div className="flex gap-1 items-center text-2xl">
                                <FaDollarSign></FaDollarSign>
                                <p>{price}</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-10">
                        <div className="my-5">
                            <h1 className="text-center text-2xl">Common Facilities</h1>
                        </div>
                        <div className="flex justify-center gap-5">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex gap-1 items-center text-2xl">

                                        <AiOutlineStop></AiOutlineStop>
                                        <p>Free Cancellation</p>
                                    </div>
                                    <p className="ml-7">Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                                <div>
                                    <div className="flex gap-1 items-center text-2xl">
                                        <FaMobileAlt></FaMobileAlt>
                                        <p>Mobile Ticketing</p>
                                    </div>
                                    <p className="ml-7">Use your phone or print your voucher</p>
                                </div>

                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex gap-1 items-center text-2xl">
                                        <MdOutlineHealthAndSafety></MdOutlineHealthAndSafety>
                                        <p>Health Precaution</p>
                                    </div>
                                    <p className="ml-7">Special health and safety measures apply. Learn more</p>
                                </div>
                                <div>
                                    <div className="flex gap-1 items-center text-2xl">
                                        <MdAccessTime></MdAccessTime>
                                        <p>Instant Confirmation</p>
                                    </div>
                                    <p className="ml-7">Do not need to wait for the confirmation!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="my-5">
                            <h1 className="text-center text-2xl">Tour Plan</h1>
                        </div>
                        <div className="space-y-2">
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    Day 1: Arrival and Exploration
                                </div>
                                <div className="collapse-content">
                                    <div>
                                        <h1>Morning: Arrival</h1>
                                        <ul className="list-disc px-4">
                                            <li>8:00 AM: Arrive at the destination</li>
                                            <li>9:00 AM: Check-in at the hotel and freshen up</li>
                                            <li>10:00 AM: Attend a welcome briefing and get an overview of the tour plan</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>Afternoon: City Exploration</h1>
                                        <ul className="list-disc px-4">
                                            <li>12:00 PM: Lunch at a local restaurant</li>
                                            <li>1:30 PM: Guided city tour covering major attractions</li>
                                            <li>4:30 PM: Free time to explore local markets and shops</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>Evening: Cultural Experience</h1>
                                        <ul className="list-disc px-4">
                                            <li>6:30 PM: Attend a local cultural performance</li>
                                            <li>8:00 PM: Dinner at a traditional restaurant</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    Day 2: Outdoor Adventure and Local Cuisine
                                </div>
                                <div className="collapse-content">
                                    <div>
                                        <h1>Morning: Outdoor Adventure</h1>
                                        <ul className="list-disc px-4">
                                            <li>7:00 AM: Breakfast at the hotel</li>
                                            <li>8:00 AM: Depart for an outdoor adventure activity</li>
                                            <li>Activity: Hiking or biking through nearby scenic trails</li>
                                            <li>Duration: 4-5 hours</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>Afternoon: Local Cuisine Experience</h1>
                                        <ul className="list-disc px-4">
                                            <li>1:00 PM: Picnic lunch during the hike/bike trip</li>
                                            <li>2:00 PM: Return to the city and rest at the hotel</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>Evening: Cultural Experience</h1>
                                        <ul className="list-disc px-4">
                                            <li>6:30 PM: Attend a local cultural performance</li>
                                            <li>8:00 PM: Dinner at a traditional restaurant</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    Day 3: Historical Sites and Departure
                                </div>
                                <div className="collapse-content">
                                    <div>
                                        <h1>Morning: Historical Sites</h1>
                                        <ul className="list-disc px-4">
                                            <li>7:00 AM: Breakfast at the hotel</li>
                                            <li>8:00 AM: Visit historical sites</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>Afternoon: Leisure and Shopping</h1>
                                        <ul className="list-disc px-4">
                                            <li>12:00 PM: Lunch at a local cafe</li>
                                            <li>1:30 PM: Free time for leisure activities or shopping at local markets</li>
                                            <li>3:30 PM: Return to the hotel to pack and check out</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1>Evening: Departure</h1>
                                        <ul className="list-disc px-4">
                                            <li>5:00 PM: Depart for the vechicle</li>
                                            <li>7:00 PM: Back to home</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-base-200">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-xl font-medium">
                                    Summary
                                </div>
                                <div className="collapse-content">
                                    <div>
                                        <h1>Day 1: Arrival, city tour, cultural performance, traditional dinne</h1>
                                    </div>
                                    <div>
                                        <h1>Day 2: Outdoor adventure, cooking class, enjoy self-cooked meal</h1>
                                    </div>
                                    <div>
                                        <h1>Day 3: Visit historical sites, leisure and shopping, departure</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default PackageDetails;