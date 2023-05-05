import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';

const SingleChef = () => {
    const { id } = useParams();
    const singleChefdata = useLoaderData();
    // console.log(singleChefdata);
    const { name, picture, bio, no_of_recipes, recipes, years_of_experience, ratings } = singleChefdata;

    const [favourite, setfavourite] = useState(false);
    const [readMore, setReadmore] = useState(false);

    return (
        <div>
            <div className="card w-full mx-auto bg-base-100 ">
                <figure className="px-10 pt-10">
                    <LazyLoad  >
                        <img src={picture} alt="Shoes" className="rounded-xl" />
                    </LazyLoad>
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p className='italic text-center w-full md:w-7/12'>{bio}</p>
                    <p className='font-bold'>Total Recipies: {no_of_recipes}</p>
                    <p className='font-bold'>Experiences: {years_of_experience} years</p>
                    <p>
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={Math.round(ratings)}
                            readOnly
                        />
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 w-full">
                        {
                            recipes.map(recipe => (
                                <div className=' border w-full p-2 rounded-xl'>
                                    <div className='flex items-center justify-between '>
                                        <h2 className="card-title font-bold">Item: {recipe.name}</h2>
                                        {
                                            favourite ?
                                                <button onClick={() => setfavourite(!favourite)
                                                }><FaBookmark /> </button>
                                                : <button onClick={() => setfavourite(!favourite)}><FaRegBookmark /> </button>
                                        }
                                    </div>
                                    <p className='font-bold'>Ingrediants: </p>
                                    {
                                        recipe.ingredients.map(ingredient => (
                                            <li className='ms-6'>{ingredient}</li>
                                        ))
                                    }
                                    <p className='p-4'>
                                        <span className='font-bold'>Cooking Method:</span>
                                        {
                                            recipe.cooking_method.length < 150 ?
                                                recipe.cooking_method
                                                : recipe.cooking_method.slice(0, 230)
                                        }... <button className='italic'>Read More</button>
                                    </p>
                                    <div className="flex flex-col items-center">
                                        <p> Rating: </p>
                                        <div>
                                            <Rating
                                                style={{ maxWidth: 140 }}
                                                value={Math.round(recipe.rating)}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;