import React from 'react';

import bgImg from '../../assets/images/more/15.jpg'

import logo from '../../assets/images/more/logo1.png'

const Header = () => {
    return (
        <div 
            // ১. ব্যাকগ্রাউন্ড ইমেজ এবং ফ্লেক্সবক্স দিয়ে কন্টেন্ট মাঝখানে আনা হয়েছে
            className="w-full py-3 flex justify-center items-center gap-4 bg-[#372727]"
            style={{ 
                // এখানে আপনার সেই ডার্ক প্যাটার্ন ইমেজটি ব্যবহার করবেন
                // আমি একটি ডামি প্যাটার্ন লিংক দিচ্ছি, আপনি আপনার লোকাল ইমেজের পাথ দিয়ে বদলে দেবেন
                backgroundImage: {bgImg} 
            }}
        >
            {/* ২. লোগো ইমেজ */}
            <img 
                src={logo} // আপনার লোগো বসান
                alt="Logo" 
                className="w-14 h-14 md:w-16 md:h-16" 
            />

            {/* ৩. টেক্সট (Rancho ফন্ট) */}
            <h1 className="text-white text-4xl md:text-6xl font-rancho mt-2">
                Espresso Emporium
            </h1>
        </div>
    );
};

export default Header;