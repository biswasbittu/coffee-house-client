import React from 'react';
import Banner from '../Banner/Banner';
import Followinsta from '../Followinsta/Followinsta';
import { Link, useLoaderData } from 'react-router';
import Coffeecard from '../Coffeecard/Coffeecard';
import bg_cup from '../../assets/images/more/1.png'

import { BsCup } from 'react-icons/bs';


const Home = () => {
    const coffees = useLoaderData();
    // console.log(coffees)
    return (
        <div>
            <Banner />

            <div className=' my-12 bg-no-repeat max-md:bg-none' style={{ backgroundImage: `url(${bg_cup}) ` }}>
                <div className='flex flex-col  items-center space-y-8 '>
                    <p className='font-raleway text-center'>--- Sip & Savor ---</p>
                    <h1 className='font-bold font-rancho text-6xl text-primary text-center'>Our Popular Products</h1>
                    <Link to='/addcoffee' className='btn font-rancho text-white bg-[#e3b577]  hover:bg-amber-900 rounded-lg border-primary'> Add coffee <BsCup className='text-primary' size={24} /></Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 pt-5 md:pt-16'>
                    {
                        coffees.map(coffee => <Coffeecard key={coffee._id} coffee={coffee}></Coffeecard>)
                    }
                </div>
            </div>
            <Followinsta />
        </div>
    );
};

export default Home;