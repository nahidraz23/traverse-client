import Banner from "./Banner";
import TourGuideSection from "./TourGuideSection/TourGuideSection";
import TourTypeSection from "./TourTypeSection/TourTypeSection";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-360px)]">
            <Banner></Banner>
            <TourGuideSection></TourGuideSection>
            <TourTypeSection></TourTypeSection>
        </div>
    );
};

export default Home;