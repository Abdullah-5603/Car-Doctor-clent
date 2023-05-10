import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service)
    const { _id, title, price, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
            <figure><img className='h-64' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                <p className='font-bold text-[#FF3811]'>Price: {price} $</p>
                   <Link to={`/serviceDetails/${_id}`}><ArrowRightIcon className='w-5 h-5 text-[#FF3811]'/></Link> 
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;