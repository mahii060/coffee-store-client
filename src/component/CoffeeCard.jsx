
const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffee
    return (
        <div className="card card-side bg-base-100 border border-gray-200 shadow-2xl md:p-4">
            <figure>
                <img className="w-1/2 md:w-48"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between items-center w-full px-3">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <button className="btn btn-outline btn-primary rounded-lg">View</button>
                        <button className="btn btn-outline btn-secondary rounded-lg">Edit</button>
                        <button className="btn btn-outline btn-error rounded-lg">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;