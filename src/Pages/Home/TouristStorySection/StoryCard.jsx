import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {
    return (
        <div className="card bg-slate-50 flex flex-col gap-5 items-center md:max-w-96 p-4 md:h-72 justify-center cursor-pointer">
            {/* top section */}
            <div className="flex items-center w-full gap-2">
                <div className="avatar">
                    <div className="mask mask-hexagon w-14">
                        <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" />
                    </div>
                </div>
                <div>
                    <p className="text-start font-bold">{story?.name}</p>
                    <p className="opacity-60">{story?.email}</p>
                </div>
            </div>
            <div className="flex justify-between w-full items-center">
                <h1 className="font-bold">{story?.title}</h1>
                 {/* rating part */}
                 <div className="rating rating-sm">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
            <div>
                <p className="text-left grow">{story?.experience}</p>
            </div>
            <Link to={`/storydetails/${story._id}`}><button className="btn btn-sm bg-primary-color">Share experience</button></Link>
        </div>
    );
};

export default StoryCard;