import React, { useEffect, useState } from 'react';
import Chef from '../ChefCard/Chef';
import useTitle from '../../hooks/useTitle';

const Chefs = () => {
    const [chefs, setChefs] = useState([])
    useTitle('Chefs');

    useEffect(() => {
        fetch('https://chefs-server-side-nirjhorsaha.vercel.app/chefs')
            .then((res) => res.json())
            .then((data) => setChefs(data))
    }, [])

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-4 px-4 mx-auto max-w-screen-xl md:py-6 lg:px-6 ">
                    <div className="mx-auto max-w-4xl text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-5xl tracking-tight uppercase font-bold text-gray-900 dark:text-white">Meet Our <span className='text-orange-400'>Chefs</span></h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400 italic">Our passionate culinary team is made up of innovative and experienced professionals with years of experience in foodservice. Their work combines food science, technology and the culinary arts to imagine the future of food. They draw on current trends and culinary insights from across our global network to create customized solutions for all of our clients</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {
                            chefs.map((chef) => <Chef
                                key={chef.id}
                                chef={chef}
                            >
                            </Chef>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chefs;