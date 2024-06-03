const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div>
            <h1 className='text-4xl font-bold font-volkhov'>{heading}</h1>
            <p className='mt-5'>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;