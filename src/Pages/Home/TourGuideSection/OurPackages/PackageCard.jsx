import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageCard = ({ cardInfo }) => {

    const { type, title, image, price, date, _id } = cardInfo;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-left text-2xl font-volkhov font-bold">{title}</h2>
                <div className="flex flex-col text-left">
                    <p className="flex items-center gap-1 text-xl font-semibold">
                        <BiCategory className="text-secondary-color"></BiCategory>
                        {type}
                    </p>
                    <p className="flex items-center gap-1 text-xl font-semibold">
                        <FaCalendarAlt className="text-secondary-color"></FaCalendarAlt>
                        {date}
                    </p>
                </div>
                <div className="divider divider-info"></div>
                <div className="flex items-center">
                    <p className="flex items-center gap-1 text-xl font-semibold">
                        <FaDollarSign></FaDollarSign>
                        {price}
                    </p>
                    <Link to={`/packageDetails/${_id}`}><button className="btn bg-primary-color font-mulish font-semibold">View Package</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;