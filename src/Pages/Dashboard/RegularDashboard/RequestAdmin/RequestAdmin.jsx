import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";

const RequestAdmin = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();
    const { user } = useAuth();
    const [request, setRequest] = useState(0);
    const axiosSecure = useAxiosSecure();

    const onSubmit = async data => {

        const guideInfo = {
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
            age: parseInt(data.age),
            language: data.language,
            experience: data.experience,
            expertise: data.expertise,
            phone_number: data.phone_number,
            gender: data.gender,
        }

        const res = await axiosSecure.post('/guides', guideInfo);
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
        <div className="text-center">
            <div>
                <h1 className="text-center">Be a tour guide</h1>
            </div>
            <div>
                <h2>To be a volunteer add additional information</h2>
                <div>
                    <div className="hero">
                        <div className="hero-content flex-col">
                            <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input readOnly {...register("name")} defaultValue={user?.displayName} type="text" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input readOnly {...register("email")} defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <input readOnly {...register("photoURL")} defaultValue={user?.photoURL} type="text" placeholder="photoURL" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone Number</span>
                                        </label>
                                        <input {...register("phone_number")} type="number" placeholder="phone number" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Age</span>
                                        </label>
                                        <input {...register("age")} type="number" placeholder="age" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Gender</span>
                                        </label>
                                        <input {...register("gender")} type="text" placeholder="gender" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Language</span>
                                        </label>
                                        <input {...register("language")} type="text" placeholder="language" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Experience</span>
                                        </label>
                                        <input {...register("experience")} type="text" placeholder="experience" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Expertise</span>
                                        </label>
                                        <input {...register("expertise")} type="text" placeholder="expertise" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        {
                                            request === 1 ?
                                                <>
                                                    <p>Requested</p>
                                                </>
                                                :
                                                <>
                                                    <button className="btn btn-primary">Request to admin</button>
                                                </>
                                        }
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

export default RequestAdmin;