import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto min-h-fit'>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;