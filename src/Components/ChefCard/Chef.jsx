// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'

// const Chef = ({ chef }) => {
//     console.log(chef);
//     const { name, picture, no_of_recipes, ratings, years_of_experience } = chef;
    
//     return (
//         <div>
//             <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
//                 <div className='p-4'>
//                     <img class="w-80 rounded-lg md:rounded-lg" src={picture} alt="Bonnie Avatar" />
//                 </div>
                
//                 <div class="p-5">
//                     <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {name}
//                     </h3>
//                     {/* <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span> */}
//                     <p className='text-gray-500 uppercase font-bold tracking-tight italic'>Years of experience: {years_of_experience}</p>
//                     <p className='text-gray-500  font-bold tracking-tight italic'>No of recipes: {no_of_recipes}</p>
//                     <p>
//                         <Rating
//                             style={{ maxWidth: 120 }}
//                             value={Math.round(ratings)}
//                             readOnly
//                         />
//                     </p>
//                     <Link to={`/chef/${chef.id}`}>
//                         <button className="btn btn-ghost btn-outline mt-2">
//                             View Recipes <FaArrowRight className='ms-2' />
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Chef;