import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyWishList = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlist?email=${user?.email}`)
            return res.data;
        }
    })

    // handle delete wishlist
    const handleDeleteWishlist = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wishlist/${id}`)
                    .then(res => {
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                refetch();
            }
        });
    }

    return (
        <div>
            <div className="mb-10">
                <h1 className="text-center text-4xl">My wishlist</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Places</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlist.map((item, index) =>
                                    <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item.title}</p>
                                        </td>
                                        <td>
                                            <p>{item.type}</p>
                                        </td>
                                        <td>
                                            <p>{item.date}</p>
                                        </td>
                                        <td>
                                            <p>${item.price}</p>
                                        </td>
                                        <td className="text-center space-x-2">
                                            <button onClick={() => handleDeleteWishlist(item._id)} className="btn btn-circle">
                                                <FaTrash></FaTrash>
                                            </button>
                                            <Link to={`/packageDetails/${item.whishlistId}`}>
                                                <button className="btn btn-md btn-circle">
                                                    <FaEye></FaEye>
                                                </button>
                                            </Link>

                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyWishList;