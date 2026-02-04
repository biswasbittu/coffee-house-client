import React from 'react';
import Banner from '../Banner/Banner';
import Followinsta from '../Followinsta/Followinsta';
import { Link, useLoaderData } from 'react-router';
import Coffeecard from '../Coffeecard/Coffeecard';
import bg_cup from '../../assets/images/more/1.png'


const Home = () => {
    const coffees = useLoaderData();
    console.log(coffees)
    return (
        <div>
            <Banner />

            <div className=' my-12 bg-no-repeat max-md:bg-none' style={{ backgroundImage: `url(${bg_cup}) ` }}>
                <div className='flex flex-col  items-center '>
                    <p className='font-raleway text-center'>--- Sip & Savor ---</p>
                    <h1 className='font-bold font-rancho text-6xl text-primary text-center'>Our Popular Products</h1>
                    <Link to='/addcoffee' > Add coffee</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto md:pt-32'>
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