import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOut = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext)
    const {img, _id, title, price} = data


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking ={
            customerInfo : name,
            img,
            email,
            date,
            price : price,
            service_id: _id,
            service: title
        }
        fetch('https://car-doctor-server-abdullah-5603.vercel.app/bookings',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <img className='w-1/3 mx-auto mt-16' src={img} alt="" />
            <p className='text-5xl font-bold my-10 text-center'>{title}</p>
            <div className="card w-full rounded-lg shadow-2xl bg-base-200">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className='flex justify-between my-5'>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input w-5/12 focus:outline-none input-bordered" />
                        <input type="date" name='date' className="input w-5/12 focus:outline-none input-bordered" />
                    </div>
                    <div className='flex justify-between my-5'>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input w-5/12 focus:outline-none input-bordered"/>
                        <input type="text" name='price' defaultValue={'$ ' + price} className="input w-5/12 focus:outline-none input-bordered"/>
                    </div>
                    <div className="form-control">
                    <textarea className="textarea textarea-lg" placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn rounded-md bg-[#FF3811] border-none hover:bg-[#FF3811] hover:border-none my-5 text-white text-xl">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;