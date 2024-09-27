import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedTour = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?guide=${user?.displayName}`);
            return res.data;
        }
    })

    // handle accept
    const handleAccept = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, accept!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/bookings/${id}`);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Accepted!",
                        text: "Request accepted.",
                        icon: "success"
                    });
                }
                refetch();
            }
        });
    }

    // handle reject 
    const handleReject = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/mybookings/${id}`);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Rejected!",
                        text: "Request Rejected.",
                        icon: "success"
                    });
                }
                refetch();
            }
        });
    }

    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold my-5">Assigned Tour</h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-xl">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Package Name</th>
                                <th>Tourist Name</th>
                                <th>Tour Date</th>
                                <th>Tour Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {
                                bookings.map((booking, index) =>
                                    <tr key={index}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <p>{booking.title}</p>
                                        </td>
                                        <td>
                                            <p>{booking.name}</p>
                                        </td>
                                        <td>
                                            <p>{booking.date}</p>
                                        </td>
                                        <td>
                                            <p>${booking.price}</p>
                                        </td>
                                        <td className="text-center space-x-2">
                                            {
                                                booking?.status === "accepted" || booking?.status === "rejected"?
                                                    <>
                                                        {
                                                            booking?.status === "accepted" && <p className="text-green-600 font-bold">Accepted</p>
                                                        }
                                                        {
                                                            booking?.status === "rejected" && <p className="text-red-500 font-bold">Rejected</p>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <button onClick={() => handleAccept(booking._id)} className="btn btn-sm text-green-600"> Accept</button>
                                                        <button onClick={() => handleReject(booking._id)} className="btn btn-sm text-red-500"> Reject</button>
                                                    </>
                                            }
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

export default AssignedTour;