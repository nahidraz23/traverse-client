import { useLoaderData } from "react-router-dom";
import PackageCard from "../../TourGuideSection/OurPackages/PackageCard";

const TourTypeCard = () => {
    const loadedData = useLoaderData();

    return (
        <div className="min-h-[calc(100vh-278px)] py-12 container mx-auto gap">
            <div>
                <h1 className="text-center text-4xl font-bold">Tour Type</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center my-5">
                {
                    loadedData.map((item, index) => <PackageCard key={index} cardInfo={item}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default TourTypeCard;