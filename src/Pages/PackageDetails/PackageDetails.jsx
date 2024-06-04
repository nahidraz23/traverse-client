import PhotoAlbum from "react-photo-album";

const photos1 = [
    {
        src: "https://images.unsplash.com/photo-1631182951500-226ee196e219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNhZmFyaSUyMHBhcmt8ZW58MHwwfDB8fHww", width: 800, height: 600
    },
    {
        src: "https://images.unsplash.com/photo-1600781980959-118cf6eae2ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhaW5mb3Jlc3R8ZW58MHwwfDB8fHww", width: 1600, height: 900
    },
    {
        src: "https://images.unsplash.com/photo-1709841618055-bbe3cca6f1a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmZvcmVzdCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D", width: 600, height: 900
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1694475632941-05ff7486f8c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHlyYW1pZHxlbnwwfHwwfHx8MA%3D%3D", width: 1200, height: 900
    },
    {
        src: "https://images.unsplash.com/photo-1624646580989-9f059e25eb78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhbWlseSUyMHRvdXJ8ZW58MHx8MHx8fDA%3D", width: 1200, height: 900
    },
]
const photos2 = [
    {
        src: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8fDA%3D", width: 800, height: 600
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1664299738990-9c29e650f784?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D", width: 1000, height: 900
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1682390303496-4404d97c6b49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWR2ZW50dXJlJTIwdG91cnxlbnwwfHwwfHx8MA%3D%3D", width: 900, height: 900
    },
    {
        src: "https://images.unsplash.com/photo-1677427300033-0f6df9df62a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0eSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D", width: 900, height: 900
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1661329832448-b79c0fd51890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VsdHVyYWwlMjB0b3VyaXNtfGVufDB8fDB8fHww", width: 900, height: 900
    },
]

const PackageDetails = () => {


    return (
        <div className="min-h-[calc(100vh-358px)] ">
            <div className="flex flex-col gap-6 ">
                <div>
                    <h1 className="text-3xl font-bold font-volkhov text-center py-5">Gallery</h1>
                </div>
                <div>
                    <PhotoAlbum layout="columns" photos={photos1}></PhotoAlbum>
                </div>
                <div>
                    <PhotoAlbum layout="columns" photos={photos2}></PhotoAlbum>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default PackageDetails;