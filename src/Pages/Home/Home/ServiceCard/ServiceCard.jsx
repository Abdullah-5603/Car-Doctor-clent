import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const ServiceCard = ({ service }) => {
    console.log(service)
    const { _id, title, price, img } = service;
    return (
        <div className="card w-96 glass">
            <figure><img className='h-64' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between">
                <p className='text-[#FF3811]'>Price: {price} $</p>
                   <ArrowRightIcon className='w-5 h-5 text-[#FF3811]'/> 
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;