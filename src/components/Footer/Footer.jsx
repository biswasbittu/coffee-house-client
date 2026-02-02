import React from 'react';
import  bg  from "../../assets/images/more/24.JPG";
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
            // ফুটার ব্যাকগ্রাউন্ড ইমেজ (এখানে আপনার ব্যাকগ্রাউন্ড ইমেজের লিংক দেবেন)
            className="w-full bg-cover bg-center pt-10"
            
        >
            <div className="max-w-[1320px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* --- বাম পাশ (Left Side): লোগো ও ইনফরমেশন --- */}
                <div className="space-y-6">
                    {/* লোগো এবং নাম */}
                    <div className="flex flex-col gap-2">
                        {/* লোগো ইমেজ (আপনার লোগোর লিংক এখানে দেবেন) */}
                        <img 
                            src={logo}
                            alt="Logo" 
                            className="w-16 h-16"
                        />
                        <h2 className="text-4xl font-rancho text-[#331A15] font-bold">Espresso Emporium</h2>
                    </div>

                    {/* ডেসক্রিপশন টেক্সট */}
                    <p className="font-raleway text-[#1B1A1A] text-lg leading-relaxed md:w-3/4">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>

                    {/* সোশ্যাল মিডিয়া আইকন (আপনার আইকন ইমেজগুলো এখানে বসাবেন) */}
                    <div className="flex gap-4 text-[#331A15]">
                        
                        <FaFacebook size={26} />
                        <IoLogoTwitter size={26}  />
                        <FaInstagram size={26} />
                        <FaLinkedin size={26} />                       
                    </div>

                    {/* Get in Touch সেকশন */}
                    <div>
                        <h3 className="text-3xl font-rancho text-[#331A15] font-bold mb-4">Get in Touch</h3>
                        <div className="space-y-2 font-raleway text-[#1B1A1A]">
                            <p className="flex items-center gap-3 text-[#331A15]">
                                <FaPhoneAlt /> +88 01533 333 333
                            </p>
                            <p className="flex items-center gap-3 text-[#331A15]">
                                <FaEnvelope /> info@gmail.com
                            </p>
                            <p className="flex items-center gap-3 text-[#331A15]">
                                <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
                            </p>
                        </div>
                    </div>
                </div>


                {/* --- ডান পাশ (Right Side): কানেক্ট ফর্ম --- */}
                <div className="mt-8 md:mt-0">
                    <h3 className="text-4xl font-rancho text-[#331A15] font-bold mb-8">Connect with Us</h3>
                    
                    <form className="space-y-4">
                        {/* Name Input */}
                        <div className="form-control">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="input input-bordered w-full bg-white font-raleway focus:outline-none focus:border-[#331A15]" 
                            />
                        </div>
                        
                        {/* Email Input */}
                        <div className="form-control">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="input input-bordered w-full bg-white font-raleway focus:outline-none focus:border-[#331A15]" 
                            />
                        </div>
                        
                        {/* Message Input */}
                        <div className="form-control">
                            <textarea 
                                className="textarea textarea-bordered h-32 w-full bg-white font-raleway focus:outline-none focus:border-[#331A15]" 
                                placeholder="Message"
                            ></textarea>
                        </div>

                        {/* Submit Button (Rounded) */}
                        <div className="form-control mt-6">
                            <button className="btn rounded-full border-2 border-[#331A15] text-[#331A15] hover:bg-[#331A15] hover:text-white font-rancho text-xl px-8 w-fit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* কপিরাইট সেকশন (নিচে কালো দাগ) */}
            <div className=" py-4 text-center mt-10" 
                 // ব্যাকগ্রাউন্ড ইমেজ থাকলে এই স্টাইলটি ব্যবহার করুন, নাহলে সলিড কালার থাকবে
                 style={{ backgroundImage:`url(${bg})`} }
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