import React from 'react';
import img1 from '../../assets/courier-delivering-groceries-home (1)-min.jpg'
import img2 from '../../assets/side-view-chicken-roll-grilled-chicken-lettuce.jpg'
import img3 from '../../assets/top-view-table-full-delicious-food-composition.jpg'


const Offer = () => {
    return (
        <div className=''>
            <h1 className='text-5xl text-center mb-10 uppercase'>What we offer <br /> <span className='text-orange-400 '>Taste & Experience</span></h1>
            <div className='grid md:grid-cols-2 w-9/12 mx-auto justify-center gap-4 items-center '>
                <h1 className='uppercase text-3xl font-bold '>We make sure <br /> your food arive ontime </h1>
                <img className='w-96 rounded-xl' src={img1} alt="" />
                <img className='w-96 rounded-xl' src={img2} alt="" />
                <h1 className='uppercase text-3xl font-bold '>High Quality food <br /> material</h1>
                <h1 className='uppercase text-3xl font-bold '>Various menus you <br /> can pick </h1>
                <img className='w-96 rounded-xl' src={img3} alt="" />
            </div>
        </div>
    );
};

export default Offer;