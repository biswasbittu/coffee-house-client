import React from 'react';
import bg from "../../assets/images/more/24.JPG";
import logo from "../../assets/images/more/logo1.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            {/* <div 
                        
                        className=" py-3 flex justify-center items-center gap-4 bg-[#372727]"
                        style={{ 
                            
                            backgroundImage: {bgImg} 
                        }}
                    >
                       
                        
            
                        
                        <h1 className="text-white font-Rancho">
                            Copyright Espresso Emporium ! All Rights Reserved
                        </h1>
                    </div> */}


            <div
                
                className="w-full bg-cover bg-center pt-10"

            >
                <div className="max-w-[1320px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                   
                    <div className="space-y-6">
                        
                        <div className="flex flex-col gap-2">
                            
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-16 h-16"
                            />
                            <h2 className="text-4xl font-rancho text-[#331A15] font-bold">Espresso Emporium</h2>
                        </div>

                       
                        <p className="font-raleway text-[#1B1A1A] text-lg leading-relaxed md:w-3/4">
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>

                       
                        <div className="flex gap-4 text-[#331A15]">

                            <FaFacebook size={26} />
                            <IoLogoTwitter size={26} />
                            <FaInstagram size={26} />
                            <FaLinkedin size={26} />
                        </div>

                        
                        <div>
                            <h3 className="text-3xl font-rancho text-[#331A15] font-bold mb-4">Get in Touch</h3>
                            <div className="space-y-2 font-raleway text-[#1B1A1A]">
                                <p className="flex items-center gap-3 text-[#331A15]">
                                    <FaPhoneAlt /> +91 8756347689
                                </p>
                                <p className="flex items-center gap-3 text-[#331A15]">
                                    <FaEnvelope /> info@gmail.com
                                </p>
                                <p className="flex items-center gap-3 text-[#331A15]">
                                    <FaMapMarkerAlt /> 72, Wall street, King Road, Kolkata
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="mt-8 md:mt-0">
                        <h3 className="text-4xl font-rancho text-[#331A15] font-bold mb-8">Connect with Us</h3>

                        <form className="space-y-4">

                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full bg-white font-raleway focus:outline-none focus:border-[#331A15]"
                                />
                            </div>


                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full bg-white font-raleway focus:outline-none focus:border-[#331A15]"
                                />
                            </div>


                            <div className="form-control">
                                <textarea
                                    className="textarea textarea-bordered h-32 w-full bg-white font-raleway focus:outline-none focus:border-[#331A15]"
                                    placeholder="Message"
                                ></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn rounded-full border-2 border-[#331A15] text-[#331A15] hover:bg-[#331A15] hover:text-white font-rancho text-xl px-8 w-fit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className=" py-4 text-center mt-10"
                    style={{ backgroundImage: `url(${bg})` }}
                >

                    <p className="font-rancho text-white text-lg">
                        Copyright Espresso Emporium ! All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;