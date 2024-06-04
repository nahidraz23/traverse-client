import { useLoaderData } from "react-router-dom";

const TourGuidesProfile = () => {

    const guideData = useLoaderData();

    const { age, name, email, experience, expertise, gender, image, language, phone_number } = guideData;

    return (
        <div className="min-h-[calc(100vh-278px)] pt-20 container mx-auto">
            <div className="my-5">
                <h1 className="text-4xl text-center">Tour guides profile</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="card">
                    <div className="avatar justify-center">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody className="text-2xl">
                                    {/* row 1 */}
                                    <tr className="bg-base-200">
                                        <td>Name:</td>
                                        <td className="text-center">{name}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className="bg-base-200">
                                        <td>Age:</td>
                                        <td className="text-center">{age}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className="bg-base-200">
                                        <td>Gender:</td>
                                        <td className="text-center">{gender}</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className="bg-base-200">
                                        <td>Experience:</td>
                                        <td className="text-center">{experience}</td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className="bg-base-200">
                                        <td>Expertise:</td>
                                        <td className="text-center">{expertise}</td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr className="bg-base-200">
                                        <td>Language:</td>
                                        <td className="text-center">{language}</td>
                                    </tr>
                                    {/* row 7 */}
                                    <tr className="bg-base-200">
                                        <td>Phone:</td>
                                        <td className="text-center">{phone_number}</td>
                                    </tr>
                                    {/* row 8 */}
                                    <tr className="bg-base-200">
                                        <td>Email:</td>
                                        <td className="text-center">{email}</td>
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

export default TourGuidesProfile;