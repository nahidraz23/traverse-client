import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const {login} = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        login(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className="text-5xl">Login</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Do not have an account? <Link to={'/register'}><span className="hover:underline hover:font-semibold">Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;