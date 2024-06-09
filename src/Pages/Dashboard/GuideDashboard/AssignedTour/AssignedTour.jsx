import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedTour = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: bookings = [] } = useQuery({
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
            }
        });
    }

    return (
        <div>
            <div>
                <h1 className="text-center">Assigned Tour</h1>
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
                                <th>Package Name</th>
                                <th>Tourist Name</th>
                                <th>Tour Date</th>
                                <th>Tour Price</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
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
                                            <p>{booking.price}</p>
                                        </td>
                                        <td className="text-center space-x-2">
                                            {
                                                booking?.status === "accepted" ?
                                                    <>
                                                        <p>{booking?.status}</p>
                                                    </>
                                                    :
                                                    <>
                                                        <button onClick={() => handleAccept(booking._id)} className="btn btn-sm"> Accept</button>
                                                        <button className="btn btn-sm"> Reject</button>
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