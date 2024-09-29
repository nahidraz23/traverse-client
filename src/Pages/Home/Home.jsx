import Banner from "./Banner";
import OurServices from "./OurServicesSection/OurServices";
import TourGuideSection from "./TourGuideSection/TourGuideSection";
import TourTypeSection from "./TourTypeSection/TourTypeSection";
import TouristStory from "./TouristStorySection/TouristStory";
import WhyChooseUs from "./WhyChooseUsSection/WhyChooseUs";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-360px)]">
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <TourGuideSection></TourGuideSection>
            <OurServices></OurServices>
            <TourTypeSection></TourTypeSection>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;