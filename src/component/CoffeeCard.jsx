import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0)
                            Swal.fire({
                                title: "Deleted!",
                                text: `Your coffee ${_id} has been deleted.`,
                                icon: "success"
                            });
                    })
                // 🟢 Remove from UI
                setCoffees((prevCoffees) => prevCoffees.filter(coffee => coffee._id !== _id)
                );


            }
        });


    }


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
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-outline btn-secondary rounded-lg">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error rounded-lg">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;