import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Updatecoffee = () => {
    const coffee = useLoaderData()
    const { _id, photo, name, quntity, supplier, taste, price, details } = (coffee)

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        // console.log(Updatecoffee)

        fetch(`http://localhost:3000/coffees/${_id}`, {

            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)



        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                       
                        icon: "success",
                        title: "Updated Succefully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mt-5'>
                <Link to='/' className='font-rancho text-2xl font-bold flex items-center gap-6'> <GoArrowLeft /> Back to home</Link>
            </div>
            <div className="bg-[#F4F3F0] p-24 rounded-lg my-8">
                <h2 className="text-3xl font-extrabold font-rancho text-center text-[#374151]">Update Existing Coffee Details</h2>
                <p className="text-center font-raleway w-full md:w-2/3 mx-auto mt-4 mb-8 text-gray-500">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>

                <form onSubmit={handleUpdateCoffee}>
                    {/* Row 1: Name and Chef */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" required className="input input-bordered w-full font-raleway" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Quintity</span>
                            </label>
                            <input type="text" name="quntity" defaultValue={quntity} placeholder=" quantity" required className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Row 2: Supplier and Taste */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Supplier</span>
                            </label>
                            <input type="text" defaultValue={supplier} name="supplier" placeholder="Enter coffee supplier" required className="input input-bordered w-full font-raleway" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Taste</span>
                            </label>
                            <input type="text" defaultValue={taste} name="taste" placeholder="Enter coffee taste" required className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Row 3: Category and Details */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name="price" placeholder="Enter coffee Price" required className="input input-bordered w-full font-raleway" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Details</span>
                            </label>
                            <input type="text" defaultValue={details} name="details" placeholder="Enter coffee details" required className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Row 4: Photo URL */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Photo</span>
                            </label>
                            <input type="text" defaultValue={photo} name="photo" placeholder="Enter photo URL" required className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Update Coffee Details" className="btn btn-block
                     bg-[#D2B48C] hover:bg-[#b89568] font-rancho 
                     text-xl border-2 border-primary text-primary" />
                </form>
            </div>
        </div>
    );
};

export default Updatecoffee;