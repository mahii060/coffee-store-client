import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                console.log(data);
            })
        // console.log(newCoffee);
    }
    return (
        <div className="bg-gray-100 md:p-24 p-2">
            <h1 className="text-5xl font-semibold text-center text-orange-500">Add coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* Form name and quantity row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Coffee Name</span>
                            <input type="text" name="name" className="input w-full" placeholder="Coffee Name" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Available Quantity</span>
                            <input type="text" name="quantity" className="input w-full" placeholder="Available Quantity" />
                        </fieldset>
                    </div>
                </div>
                {/* Form supplier and taste row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Supplier Name</span>
                            <input type="text" name="supplier" className="input w-full" placeholder="Supplier Name" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Taste</span>
                            <input type="text" name="taste" className="input w-full" placeholder="Taste" />
                        </fieldset>
                    </div>
                </div>
                {/* Form category and details row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Category</span>
                            <input type="text" name="category" className="input w-full" placeholder="Category" />
                        </fieldset>
                    </div>
                    <div className="md:w-1/2">
                        <fieldset className="fieldset">
                            <span className="text-lg">Details</span>
                            <input type="text" name="details" className="input w-full" placeholder="Details" />
                        </fieldset>
                    </div>
                </div>
                {/* Form photo row */}
                <div className="md:flex gap-4 items-center justify-center">
                    <div className="md:w-full">
                        <fieldset className="fieldset">
                            <span className="text-lg">Photo URL</span>
                            <input type="text" name="photo" className="input w-full" placeholder="Photo URL" />
                        </fieldset>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-warning mt-4" />
            </form>
        </div>
    );
};

export default AddCoffee;


{/* <div className="form-control">
    <label htmlFor="" className="label">
        <span className="label-text">Available Quantity</span>
    </label>
    <label htmlFor="" className="input-group">
        <input type="text" className="input input-bordered" placeholder="Available Quantity" />
    </label>
</div> */}