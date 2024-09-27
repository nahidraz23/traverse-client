const YoutubeVideo = ({ src }) => {
    return (
        <iframe className='video rounded-2xl'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${src}?autoplay=0`}
            width={"412px"}
            height={"375px"}
        >
        </iframe>
    );
};

export default YoutubeVideo;