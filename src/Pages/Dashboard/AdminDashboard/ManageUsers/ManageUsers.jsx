import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Select from 'react-select'

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

    // handle make tour guide
    const handleMakeTourGuide = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make tour guide"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/tourguides/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Sucessfull",
                                text: `${user.name} is tour guide now.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    const options = [
        { value: 'role', label: 'role' },
      ]

    return (
        <div>
            <div>
                <h1 className="text-center text-3xl font-bold p-5">Manage Users</h1>
            </div>
            <div className="">
                <div className="flex items-center justify-center gap-2">
                    <div className="w-1/3 py-5">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                    <div className="">
                        <Select options={options} />
                    </div>
                </div>
                <div className="md:my-5">
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
                                                            <button onClick={() => handleMakeTourGuide(user)} className="btn btn-sm">Make Tour Guide</button>
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
        </div>
    );
};

export default ManageUsers;