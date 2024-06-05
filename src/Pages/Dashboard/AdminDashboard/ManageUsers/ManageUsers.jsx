import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    // handle make admin
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make admin"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Sucessfull",
                                text: `${user.name} is admin now.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <h1 className="text-center">Manage Uses</h1>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={index}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{user.name}</p>
                                        </td>
                                        <td>
                                            <p>{user.email}</p>
                                        </td>
                                        <td>
                                            <p>
                                                {
                                                    user?.role ?
                                                        <>
                                                            <p>{user?.role}</p>
                                                        </>
                                                        :
                                                        <>
                                                            <p>user</p>
                                                        </>
                                                }
                                            </p>
                                        </td>
                                        <td className="text-center space-x-2">
                                            {
                                                !user?.role ?
                                                    <>
                                                        <button className="btn btn-sm">Make Tour Guide</button>
                                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm">Make Admin</button>
                                                    </>
                                                    :
                                                    <>

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

export default ManageUsers;