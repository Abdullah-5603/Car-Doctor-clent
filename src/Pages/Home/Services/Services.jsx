import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from '../Home/ServiceCard/ServiceCard';
import { AuthContext } from '../../../Providers/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const Services = () => {
    const [services, setServices] = useState([])
    const {loading} = useContext(AuthContext)

    useEffect(()=>{
        fetch('https://car-doctor-server-abdullah-5603.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // console.log(services)
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='text-center lg:w-1/2 space-y-5 my-10'>
            <p className='text-xl font-bold text-[#FF3811]'>Services</p>
            <p className='text-5xl font-bold'>Our Service Area</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
                {
                    loading && <Loader/>
                }
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5 w-full'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <button className='btn bg-transparent border-2 hover:bg-transparent hover:border-[#FF3811] my-10 border-[#FF3811] text-[#FF3811]'>More Services</button>
        </div>
    );
};

export default Services;