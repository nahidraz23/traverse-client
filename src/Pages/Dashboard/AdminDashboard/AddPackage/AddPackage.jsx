import { data } from "autoprefixer";
import moment from "moment";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddPackage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm();

    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();

    const onSubmit = async data => {

        const packageInfo = {
            date: moment(startDate).format('YYYY-MM-DD'),
            type: data.type,
            title: data.title,
            image: data.image,
            price: parseInt(data.price),
        }

        const res = await axiosSecure.post('/packages', packageInfo)
        if (res.data.insertedId) {
            Swal.fire({
                icon: "success",
                title: "Your pacakge been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <div>
            <div>
                <h1 className="text-center">Add Package</h1>
            </div>
            <div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tour Type</span>
                                    </label>
                                    <input {...register('type')} type="text" placeholder="tour type" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Tour Title</span>
                                    </label>
                                    <input {...register('title')} type="text" placeholder="tour title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input {...register('image')} type="text" placeholder="image" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input {...register('price')} type="number" placeholder="price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <Controller
                                        control={control}
                                        name="date"
                                        render={({ field }) => (
                                            <ReactDatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                selectedDates={field.value}
                                                isClearable
                                                placeholderText="I have been cleared!"
                                                className="input input-bordered"
                                            />
                                        )
                                        }
                                    ></Controller>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Package</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;