import { useEffect, useState } from "react";

const MeetTourGuides = () => {
    const [tourGuides, setTourGuides] = useState([]);

    useEffect(() => {
        fetch('/tourguide.json')
            .then(res => res.json())
            .then(data => setTourGuides(data))
    }, [])

    console.log(tourGuides);

    return (
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
                            <th>Experience</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tourGuides.map((guide, index) =>
                                <tr key={index}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={guide.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{guide.name}</p>
                                    </td>
                                    <td>
                                        <p>{guide.email}</p>
                                    </td>
                                    <td>
                                        <p>{guide.experience}</p>
                                    </td>
                                    <th>
                                        <button className="btn btn-sm"> View Details</button>
                                    </th>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MeetTourGuides;