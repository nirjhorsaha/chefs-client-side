import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {
    const { name, picture, no_of_recipes, ratings, years_of_experience } = chef;

    return (
        <div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className='p-4'>
                    <LazyLoad threshold={0.25} >
                        <img className="w-80 rounded-lg md:rounded-lg" src={picture} alt="Bonnie Avatar" />
                    </LazyLoad>
                </div>

                <div className="p-5">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h3>
                    {/* <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span> */}
                    <p className='text-gray-500 font-bold tracking-tight italic'>Years of Experience: {years_of_experience}</p>
                    <p className='text-gray-500 font-bold tracking-tight italic'>No of Recipes: {no_of_recipes}</p>
                    <p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(ratings)}
                            readOnly
                        />
                    </p>
                    <Link to={`/${chef.id}`}>
                        <button className="btn btn-ghost btn-outline mt-4">
                            View Recipes <FaArrowRight className='ms-2' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;