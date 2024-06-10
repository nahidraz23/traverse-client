import Banner from "./Banner";
import TourGuideSection from "./TourGuideSection/TourGuideSection";
import TourTypeSection from "./TourTypeSection/TourTypeSection";
import TouristStory from "./TouristStorySection/TouristStory";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-360px)]">
            <Banner></Banner>
            <TourGuideSection></TourGuideSection>
            <TourTypeSection></TourTypeSection>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;