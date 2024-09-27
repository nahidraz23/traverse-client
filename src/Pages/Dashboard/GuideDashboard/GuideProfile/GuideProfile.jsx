import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const GuideProfile = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: tourGuide = {}} = useQuery({
        queryKey: ['tourGuide'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourguides?email=${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className="min-h-[calc(100vh-278px)] pt-20 container mx-auto">
            <div className="my-5">
                <h1 className="text-4xl text-center font-bold">Tour guides profile</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="card border-2 p-5 border-secondary-color">
                    <div className="avatar justify-center">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={tourGuide?.image} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody className="text-2xl">
                                    {/* row 1 */}
                                    <tr className="">
                                        <td>Name:</td>
                                        <td className="text-center">{tourGuide?.name}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="">
                                        <td>Age:</td>
                                        <td className="text-center">{tourGuide?.age}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="">
                                        <td>Gender:</td>
                                        <td className="text-center">{tourGuide?.gender}</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className="">
                                        <td>Experience:</td>
                                        <td className="text-center">{tourGuide?.experience}</td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className="">
                                        <td>Expertise:</td>
                                        <td className="text-center">{tourGuide?.expertise}</td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr className="">
                                        <td>Language:</td>
                                        <td className="text-center">{tourGuide?.language}</td>
                                    </tr>
                                    {/* row 7 */}
                                    <tr className="">
                                        <td>Phone:</td>
                                        <td className="text-center">{tourGuide?.phone_number}</td>
                                    </tr>
                                    {/* row 8 */}
                                    <tr className="">
                                        <td>Email:</td>
                                        <td className="text-center">{tourGuide?.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideProfile;