import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (

        <div className="bg-gray-100 md:p-24 p-2">
            <h1 className="text-5xl font-semibold text-center text-orange-500">Update coffee: {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* Form name and quantity row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Coffee Name</span>
                            <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Coffee Name" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Available Quantity</span>
                            <input type="text" name="quantity" defaultValue={quantity} className="input w-full" placeholder="Available Quantity" />
                        </fieldset>
                    </div>
                </div>
                {/* Form supplier and taste row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Supplier Name</span>
                            <input type="text" name="supplier" defaultValue={supplier} className="input w-full" placeholder="Supplier Name" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Taste</span>
                            <input type="text" name="taste" defaultValue={taste} className="input w-full" placeholder="Taste" />
                        </fieldset>
                    </div>
                </div>
                {/* Form category and details row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Category</span>
                            <input type="text" name="category" defaultValue={category} className="input w-full" placeholder="Category" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Details</span>
                            <input type="text" name="details" defaultValue={details} className="input w-full" placeholder="Details" />
                        </fieldset>
                    </div>
                </div>
                {/* Form photo row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-full">
                        <fieldset className="fieldset">
                            <span className="text-lg">Photo URL</span>
                            <input type="text" name="photo" defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                        </fieldset>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block btn-info mt-4" />
            </form>
        </div>
    );
};

export default UpdateCoffee;