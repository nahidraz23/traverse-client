const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className="text-center mt-32 mb-10">
            <h1 className='text-4xl font-bold font-volkhov'>{heading}</h1>
            <p className='mt-5'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;