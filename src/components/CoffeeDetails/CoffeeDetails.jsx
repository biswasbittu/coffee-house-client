import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const {photo,name,quntity,supplier,taste,price}=(coffee)
    
    return (
        <div>
 
 
                



            <div className='max-w-7xl mx-auto mt-24'>
                <div className='mt-5'>
                <Link to='/' className='font-rancho text-2xl font-bold flex items-center gap-6'> <GoArrowLeft /> Back to home</Link>
            </div>
            <div className='bg-amber-50 flex justify-evenly'>
               <img src={photo} alt="" />
               <div className=''>
                
                    <div className="ml-4 space-y-2">
                        <h3 className='font-rancho text-xl  font-bold'>
                    Niceties
                </h3>
                        <h2 className=""><span className='font-semibold'>Name:</span> {name}</h2>
                        <p className="text-lg"><span className='font-semibold'>Quantity:</span> {quntity} </p>
                        <p className="text-lg"><span className='font-semibold'>Supplier:</span>  {supplier}</p>
                        <p className="text-lg"><span className='font-semibold'>Taste:</span> {taste}</p>
                        <p className="text-lg"> <span className='font-semibold'>Price::</span>  {price}$</p>

                    </div>
                
               </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeDetails;