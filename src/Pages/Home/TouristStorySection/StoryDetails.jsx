import { BiSolidCommentCheck } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { FacebookShareButton, FacebookShareCount } from "react-share";
import { FacebookIcon, } from "react-share";

const StoryDetails = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    const { name, email, experience, title } = loadedData
    const shareUrl = "https://www.facebook.com/"

    return (
        <div className="min-h-[calc(100vh-278px)] pt-20 container mx-auto flex flex-col justify-center items-center">
            <div>
                <h1 className="text-center text-3xl font-bold p-5">Story Details</h1>
            </div>
            <div className="border-2 flex flex-col w-1/2 rounded-2xl p-5 border-secondary-color">

                <div className="text-center font-semibold ">
                    <p><span className="border-b-2">Story shared by: {name}</span></p>
                </div>
                <div>
                    <BiSolidCommentCheck className="text-5xl mx-auto mt-10 text-secondary-color" />
                </div>
                <div className="text-center my-10 p-5 space-y-2">
                    <h1 className="font-bold">Tourist Email: {email}</h1>
                    <h1 className="font-bold">Tour Title: {title}</h1>
                    <p className="font-semibold">My Story: {experience}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1>share with facebook</h1>
                    {/* <FacebookIcon size={32} round={true} />
                <FacebookShareCount url={shareUrl} /> */}
                    <div className="Demo__some-network">
                        <FacebookShareButton
                            url={shareUrl}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        <div className="border-2 border-secondary-color">
                            <FacebookShareCount
                                url={shareUrl}
                            >
                                {(count) => count}
                            </FacebookShareCount>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default StoryDetails;