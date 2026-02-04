import React from 'react';

const Coffeecard = ({coffee}) => {
    console.log(coffee) 
    const { name, quntity, supplier, taste, photo } = coffee;
    return (
        <div className=''>

            {/* <div>
                <p className='font-raleway'>--- Sip & Savor ---</p>
                <h1 className='font-bold font-rancho text-6xl text-primary'>Our Popular Products</h1>
                <Link>Add Coffee</Link>
            </div> */}
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
                        <button className="btn join-item btn-neutral text-white">View</button>
                        <button className="btn join-item btn-primary text-white">Edit</button>
                        <button className="btn join-item btn-error text-white">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffeecard;