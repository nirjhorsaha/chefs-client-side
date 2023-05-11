import React from 'react';
import Header from '../../Components/Header/Header';
import Offer from '../../Components/Offer/Offer';
import CustomerOffer from '../../Components/CustomerOffer/CustomerOffer';
import useTitle from '../../hooks/useTitle';


const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header />
            <Offer />
            <CustomerOffer />
        </div>
    );
};

export default Home;