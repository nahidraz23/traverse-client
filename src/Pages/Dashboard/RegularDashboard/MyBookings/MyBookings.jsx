import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";

const MyBookings = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mybookings?email=${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <div>
                <h1 className="text-center">My bookings</h1>
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
                                <th>Tour Title</th>
                                <th>Guide Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((item, index) =>
                                    <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <p>{item.title}</p>
                                        </td>
                                        <td>
                                            <p>{item.guide}</p>
                                        </td>
                                        <td>
                                            <p>{item.date}</p>
                                        </td>
                                        <td>
                                            <p>${item.price}</p>
                                        </td>
                                        <td>
                                            <p>{item.status}</p>
                                        </td>
                                        <td className="text-center space-x-2">
                                            <button className="btn btn-circle">
                                                Pay
                                            </button>
                                            <button className="btn">
                                                <p className="p-2">Cancel</p>
                                            </button>
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

export default MyBookings;