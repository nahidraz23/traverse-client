import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = data => {
        const name = data.name;
        const photoURL = data.photoURL;
        const email = data.email;
        const password = data.password;

        const userInfo = { name, photoURL, email };

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Registration successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                    })
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className="text-5xl">Register</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input {...register("photoURL", { required: "PhotoURLis required" })} type="text" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === "minLength" && <p className="text-red-500 text-center">Password length must be 6 charecter or more.</p>}
                            {errors.password?.type === "maxLength" && <p className="text-red-500 text-center">Password length must be 6 charecter or more.</p>}
                            {errors.password?.type === "pattern" && <p className="text-red-500 text-center">Password should contain 1 uppercase, 1 lowercase, 1 number and a special charecter.</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p>Already have an account? <Link to={'/login'}><span className="hover:underline hover:font-semibold">Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;