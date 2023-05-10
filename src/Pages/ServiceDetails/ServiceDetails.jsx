import React from 'react';
import bannerImg from '../../assets/images/banner/4.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import FacilityCard from './FacilityCard';

const ServiceDetails = () => {
    const serviceData = useLoaderData();
    const {_id, title, img, price, description, facility} = serviceData;
    
    return (
        <div>
            <div className='relative my-10 rounded-lg'>
                <img className='w-full h-80 rounded-lg' src={bannerImg} alt="" />
                <div className='w-full h-80 rounded-lg top-0 absolute bg-black opacity-50'></div>
                <p className='text-white absolute top-1/2 left-10 text-5xl font-bold'>Service Details</p>
            </div>
            <img className='border-2 rounded-lg border-red-700 my-10 mx-auto mt-20' src={img} alt="" />
            <p className='text-4xl font-bold my-5'>{title}</p>
            <p className='my-5'>{description}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                {
                    facility.map(fy => <FacilityCard
                    key={fy._id}
                    fy={fy}
                    ></FacilityCard>)
                }
                <div className='w-full my-10'>
                    <p className='text-3xl font-semibold'>Price: {price} $</p>
                    <Link to={`/checkOut/${_id}`}><button className='btn border-none w-full rounded-lg hover:border-none hover:bg-[#FF3811] my-5 bg-[#FF3811]'>Check Out</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;