import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Coffeecard = ({ coffee }) => {
    // console.log(coffee) 
    const { _id, name, quntity, supplier, taste, photo } = coffee;


    const handleDeleteCoffee = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after delete', data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        <div className=''>


            <div className="card card-side  shadow-xl p-4 border border-gray-200 bg-[#f5f4f1] ">

                {/* --- Image Section --- */}
                {/* মোবাইলে ছবি উপরে থাকবে, ল্যাপটপে বাম পাশে */}
                <figure className="w-full md:w-1/3">
                    <img
                        src={photo}
                        alt="Coffee"
                        className="rounded-xl w-full h-48 object-cover"
                    />
                </figure>

                {/* --- Content Section --- */}
                {/* w-full এবং flex ব্যবহার করা হয়েছে যাতে টেক্সট এবং বাটন দুই প্রান্তে থাকে */}
                <div className="flex justify-between w-full pr-4 items-center">

                    {/* Text Details */}
                    <div className="ml-4 space-y-2">
                        <h2 className="card-title text-2xl font-bold">Name: {name}</h2>
                        <p className="text-lg">Quantity: {quntity}</p>
                        <p className="text-lg">Supplier: {supplier}</p>
                        <p className="text-lg">Taste: {taste}</p>
                    </div>

                    {/* --- Action Buttons (Right Side) --- */}
                    {/* btn-group লম্বালম্বি দেখানোর জন্য join-vertical ব্যবহার করা হয়েছে */}
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn border-0 join-item  rounded-lg  bg-[#D2B48C] text-white"><FaEye size={24} className='' /></button>

                        </Link>
                        <button className="btn join-item  rounded-lg bg-[#3C393B] text-white"><MdEdit size={24} /></button>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn join-item bg-[#EA4744] rounded-lg text-white"><MdDelete size={24} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffeecard;