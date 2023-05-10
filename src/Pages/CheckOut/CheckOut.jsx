import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();

    return (
        <div>
            <img className='w-1/3 mx-auto mt-16' src={data.img} alt="" />
            <p className='text-5xl font-bold my-10 text-center'>{data.title}</p>
            <div className="card w-full rounded-lg shadow-2xl bg-base-200">
                <div className="card-body">
                    <div className='flex justify-between my-5'>
                        <input type="text" name='firstName' placeholder="First Name" className="input w-5/12 focus:outline-none input-bordered" />
                        <input type="text" name='lastName' placeholder="Last Name" className="input w-5/12 focus:outline-none input-bordered" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <input type="text" name='phone' placeholder="Your Phone" className="input w-5/12 focus:outline-none input-bordered" required/>
                        <input type="text" name='email' placeholder="Your Email" className="input w-5/12 focus:outline-none input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <textarea className="textarea textarea-lg" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn rounded-md bg-[#FF3811] border-none hover:bg-[#FF3811] hover:border-none my-5 text-white text-xl">Order Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;