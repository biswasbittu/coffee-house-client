import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className='max-w-7xl mx-auto'>
            <Outlet/>

            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;