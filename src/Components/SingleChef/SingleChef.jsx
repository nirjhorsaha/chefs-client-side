import React from 'react';

const SingleChef = () => {
    return (
        <div>
            <div className="card w-full mx-auto bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src="https://img.freepik.com/free-photo/portrait-happy-male-chef-dressed-uniform_171337-5354.jpg?w=740&t=st=1683106013~exp=1683106613~hmac=e1db37a9ff4791e44242efa700f0447af7cbb14fc5ebed50389d4f7e50043ff5" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Chef Name</h2>
                    <p>bio/description</p>
                    <p>number of recipes</p>
                    <p>years of experience.</p>
                    <div>
                        <p>rating</p>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <div className=' border w-full'>
                            <h2 className="card-title"> Name</h2>
                            <li>ingrediants</li>
                            <li>ingrediants</li>
                            <li>ingrediants</li>
                            <p>cooking method: </p>
                            <p>rating</p>
                        </div>
                        <div className=' border' w-full>02</div>
                        <div className=' border' w-full>03</div>
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