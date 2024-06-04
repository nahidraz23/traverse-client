import usePackage from "../../hooks/usePackage";
import PackageCard from "../Home/TourGuideSection/OurPackages/PackageCard";

const AllPackages = () => {
    const [tourPackage] = usePackage();    

    return (
        <div className="min-h-[calc(100vh-278px)]">
            <div className="my-16">
                <h1 className="text-center text-3xl font-bold">All packages</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {
                    tourPackage.map((item, index) => <PackageCard
                        key={index}
                        cardInfo={item}
                    ></PackageCard>)
                }
            </div>
        </div>
    );
};

export default AllPackages;