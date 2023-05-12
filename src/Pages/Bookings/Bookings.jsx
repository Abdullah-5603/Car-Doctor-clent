import React, { useContext, useEffect, useState } from 'react';
import bannerImg from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsTable from './BookingsTable';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookingData, setBookingData] = useState([])
    const navigate = useNavigate()

    const url = `https://car-doctor-server-abdullah-5603.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method : 'GET',
            headers : {
                authorization : `Bearer ${localStorage.getItem('car-doctor-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookingData(data)
                } else {
                    // log out and redirect to home page
                    navigate('/')
                }
            })
    }, [url, navigate])

    const handleDelete = _id =>{
        const proceed = confirm('Are you sure to delete this ?')
        if(proceed){
            fetch(`https://car-doctor-server-abdullah-5603.vercel.app/bookings/${_id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = bookingData.filter(bd => bd._id !== _id)
                    setBookingData(remaining)
                }
            })
        }
    }
    
    const handleUpdate = _id =>{
        fetch(`https://car-doctor-server-abdullah-5603.vercel.app/bookings/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({status : 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = bookingData.filter(bd => bd._id !== _id)
                const updated = bookingData.find(bd => bd._id === _id)
                updated.status = 'Approved'
                const newBookings = [updated, ...remaining]
                setBookingData(newBookings)
            }
        })
    }

    return (
        <div>
            <div className='relative my-10 rounded-lg'>
                <img className='w-full rounded-lg' src={bannerImg} alt="" />
                <div className='w-full h-full rounded-lg top-0 absolute bg-black opacity-50'></div>
                <p className='text-white absolute top-1/2 left-10 text-5xl font-bold'>Bookings Details</p>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table w-full">
                    <tbody>
                        {
                            bookingData.map(bd => <BookingsTable
                            key={bd._id}
                            bd={bd}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            ></BookingsTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;