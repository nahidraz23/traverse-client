const PackageCard = ({ cardInfo }) => {

    const { type, title, image, price} = cardInfo;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-center">{title}</h2>
                <div className="flex">
                    <p>{type}</p>
                    <p>${price}</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Package</button>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;