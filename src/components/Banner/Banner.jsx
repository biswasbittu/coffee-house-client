import React from 'react';
import main_bg from "../../assets/images/more/3.png"
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
                            <button className="btn rounded-0 bg-[#E3B577] text-black font-rancho">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* icon section */}
            <section>

            </section>
        </div>
    );
};

export default Banner;