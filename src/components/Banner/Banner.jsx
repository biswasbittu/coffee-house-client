import React from 'react';
import main_bg from "../../assets/images/more/3.png"
import i1 from "../../assets/images/icons/1.png"
import i2 from "../../assets/images/icons/2.png"
import i3 from "../../assets/images/icons/3.png"
import i4 from "../../assets/images/icons/4.png"

const Banner = () => {
    return (
        <div>
            {/* Hero */}
            <section>
                <div
                    className="hero justify-end w-full  md:h-[800px]"
                    style={{
                        backgroundImage:
                            `url(${main_bg})`,
                    }}
                >
                    <div className=""></div>
                    <div className="hero-content text-neutral-content text-left">
                        <div className=" md:ml-60">
                            <h1 className="mb-5 text-5xl  font-rancho w-full">Would you like a Cup of Delicious Coffee?</h1>
                            <p className="mb-5 font-raleway">
                                It's coffee time - Sip & Savor - Relaxation in every sip! 
                                Get the nostalgia back!! Your companion of every moment!!! 
                                Enjoy the beautiful moments and make them memorable..
                            </p>
                            <button className="btn rounded-0 bg-[#E3B577] font-normal text-xl text-black font-rancho">Learn More</button>
                        </div>
                    </div>
                </div>
            </section >
            {/* icon section */}
            <section className='bg-[#ECEAE3] '>
                 <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between px-2 '>
                    <div className='py-4 space-y-2 '>
                         <img src={i1} alt="" />
                         <h1 className='text-4xl font-rancho text-primary'>Awesome Aroma</h1>
                         <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='py-4 space-y-2'>
                         <img src={i2} alt="" />
                         <h1 className='text-4xl font-rancho text-primary'>High Quality</h1>
                         <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='py-4 space-y-2'>
                         <img src={i3} alt="" />
                         <h1 className='text-4xl font-rancho text-primary'>Pure Grades</h1>
                         <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='py-4 space-y-2'>
                         <img src={i4} alt="" />
                         <h1 className='text-4xl font-rancho text-primary'>Proper Roasting</h1>
                         <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default Banner;