import React from 'react';

const CustomerOffer = () => {
    return (
        <div className='mb-8'>
            <h1 className='text-5xl text-center uppercase font-bold tracking-tight
            '>Choose From a variety <br /> of <span className='text-orange-400'>packages</span></h1>
            <div class="grid md:grid-cols-4 gap-4 mx-auto justify-center mt-6">
                <div className='text-center italic'>
                    <img src="https://img.freepik.com/free-vector/colorful-festive-balloons-design-vectors_53876-58079.jpg?w=740&t=st=1683173312~exp=1683173912~hmac=cad9b31cd3b1aefc16ee96354ea9df06b2fad34300d64059b50e217b8f8cfc43" alt="" srcset="" />
                    <p className="uppercase font-bold">Childrens party</p>
                </div>
                <div className='text-center italic'>
                    <img src="https://img.freepik.com/free-vector/birthday-cap-with-confetti-serpentine-explosion_1017-17924.jpg?w=740&t=st=1683173439~exp=1683174039~hmac=425c2ac88419068ed8a9c9f54db8362cda45045a6d5e138c0ce1d4e5e9982c3f" alt="" srcset="" />
                    <p className="uppercase font-bold">social event</p>
                </div>
                <div className='text-center italic'>
                    <img src="https://img.freepik.com/free-vector/two-wine-glasses-with-splash-red-white-wine-celebratory-toast-realistic-illustration_1441-2312.jpg?w=740&t=st=1683173525~exp=1683174125~hmac=44a8124de37178b559bec8d21386949d7609a0ee3ea4ec68ccd96aefd6c79c29" alt="" srcset="" />
                    <p className="uppercase font-bold">corporate event</p>
                </div>
                <div className='text-center italic'>
                    <img src="https://img.freepik.com/free-vector/realistic-golden-wedding-rings-with-shadow_52683-62983.jpg?w=740&t=st=1683173619~exp=1683174219~hmac=37215adca97b47a4af935c951b98c8c66584688c01f401c66c6163c7efe726f9" alt="" srcset="" />
                    <p className="uppercase font-bold">wedding</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerOffer;