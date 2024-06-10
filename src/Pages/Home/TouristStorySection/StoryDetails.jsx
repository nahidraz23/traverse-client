import { useLoaderData } from "react-router-dom";

const StoryDetails = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    const { name, email, experience, title } = loadedData

    return (
        <div className="min-h-[calc(100vh-278px)] pt-20 container mx-auto">
            <div> 
                <h1 className="text-center text-2xl font-bold p-5">Story Details</h1>
            </div>
            <div className="text-center font-semibold ">
                <p><span className="border-b-2">Story shared by: {name}</span></p>
            </div>
            <div className="text-center my-10 p-5 space-y-2">
                <h1 className="font-bold">Tourist Email: {email}</h1>
                <h1 className="font-bold">Tour Title: {title}</h1>
                <p className="font-semibold">My Story: {experience}</p>
            </div>
        </div>
    );
};

export default StoryDetails;