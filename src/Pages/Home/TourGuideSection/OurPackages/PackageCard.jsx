import { BiCategory } from "react-icons/bi";
import { FaCalendarAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const PackageCard = ({ cardInfo }) => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const { type, title, image, price, date, _id } = cardInfo;

    const handleWishlist = () => {
        const email = user?.email;

        const wishlist = {
            type,
            title,
            image,
            price,
            date,
            whishlistId: _id,
            email
        }

        axiosPublic.post('/wishlist', wishlist)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: `${title} successfully added to wishlist`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })

    }

    return (
        <div className="card w-96 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="md:h-[250px]"/>
                <button onClick={ () => handleWishlist ()} className="absolute top-5 right-5 hover:bg-transparent tooltip" data-tip="Add to wishlist">
                    <FaHeart className="text-3xl text-red-500 " ></FaHeart>
                </button>
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
                    <p className="text-xl font-semibold">
                        <p>{price} Taka</p>
                    </p>
                    <Link to={`/packageDetails/${_id}`}><button  className="btn bg-primary-color font-mulish font-semibold">View Package</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;