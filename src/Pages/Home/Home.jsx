import Banner from "./Banner";
import TourGuideSection from "./TourGuideSection/TourGuideSection";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-360px)]">
            <Banner></Banner>
            <TourGuideSection></TourGuideSection>
        </div>
    );
};

export default Home;