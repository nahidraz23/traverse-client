import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async data => {
        const res = await axiosSecure.post('/stories', data);
        if (res.data.insertedId) {
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="">
            <div className="my-10">
                <h1 className="text-center text-3xl font-bold">User Profile</h1>
            </div>
            <div className="card border-2 border-secondary-color p-5 max-w-md mx-auto my-auto ">

                <div className="avatar justify-center">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className="card-body max-w-md mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody className="text-2xl">
                                {/* row 1 */}
                                <tr className="">
                                    <td>Name:</td>
                                    <td className="text-center">{user?.displayName}</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="">
                                    <td>Email:</td>
                                    <td className="text-center">{user?.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-center font-bold text-3xl py-5">Share tour story</h1>
                </div>
                <div>
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input {...register('name')} readOnly type="text" defaultValue={user?.displayName} placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input {...register("email")} readOnly type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Tour Title</span>
                                        </label>
                                        <input {...register("title")} type="text" placeholder="tour title" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Write your experience</span>
                                        </label>
                                        <textarea {...register("experience")} className="textarea textarea-bordered" placeholder="Bio"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-primary-color">Post Story</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;