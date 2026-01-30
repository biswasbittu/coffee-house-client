import React from 'react';
import { GoArrowLeft, GoArrowUpLeft } from 'react-icons/go';
import { Link } from 'react-router';

const Addcoffee = () => {
    return (
        <div>
            <div className='mt-5'>
                <Link to='/' className='font-rancho text-2xl font-bold flex items-center gap-6'> <GoArrowLeft /> Back to home</Link>
            </div>
            <div className="bg-[#F4F3F0] p-24 rounded-lg my-8">
                <h2 className="text-3xl font-extrabold font-rancho text-center text-[#374151]">Add New Coffee</h2>
                <p className="text-center font-raleway w-full md:w-2/3 mx-auto mt-4 mb-8 text-gray-500">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>

                <form>
                    {/* Row 1: Name and Chef */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full font-raleway" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Row 2: Supplier and Taste */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full font-raleway" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Row 3: Category and Details */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full font-raleway" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Row 4: Photo URL */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-raleway font-semibold text-lg">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full font-raleway" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] hover:bg-[#b89568] font-rancho text-xl border-2 border-[#331A15] text-[#331A15]" />
                </form>
            </div>
        </div>

    );
};

export default Addcoffee;