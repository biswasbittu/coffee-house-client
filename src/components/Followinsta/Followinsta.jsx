import React from 'react';
import cup_img1 from "../../assets/images/cups/Rectangle 9.png"
import cup_img2 from "../../assets/images/cups/Rectangle 10.png"
import cup_img3 from "../../assets/images/cups/Rectangle 11.png"
import cup_img4 from "../../assets/images/cups/Rectangle 12.png"
import cup_img5 from "../../assets/images/cups/Rectangle 13.png"
import cup_img6 from "../../assets/images/cups/Rectangle 14.png"
import cup_img7 from "../../assets/images/cups/Rectangle 15.png"
import cup_img8 from "../../assets/images/cups/Rectangle 16.png"

const Followinsta = () => {
    return (
        <div className='max-w-7xl mx-auto text-center my-5'>
            <p className='font-raleway'>Follow Us Now</p>
            <h1 className='font-bold font-rancho text-6xl text-primary'>Follow on Instagram</h1>

            <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  max-w-7xl mx-auto my-5'>
                <img className='w-full p-4' src={cup_img1} alt="" />
                <img className='w-full p-4' src={cup_img2} alt="" />
                <img className='w-full p-4' src={cup_img3} alt="" />
                <img className='w-full p-4' src={cup_img4} alt="" />
                <img className='w-full p-4' src={cup_img5} alt="" />
                <img className='w-full p-4' src={cup_img6} alt="" />
                <img className='w-full p-4' src={cup_img7} alt="" />
                <img className='w-full p-4' src={cup_img8} alt="" />

                

            </div>
        </div>
    );
};

export default Followinsta;