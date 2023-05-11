import React, { useContext, useEffect, useState } from 'react';
import bannerImg from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsTable from './BookingsTable';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookingData, setBookingData] = useState([])

    const url = `http://localhost:3000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookingData(data)
            })
    }, [url])

    const handleDelete = _id =>{
        const proceed = confirm('Are you sure to delete this ?')
        if(proceed){
            fetch(`http://localhost:3000/bookings/${_id}`,{
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
        fetch(`http://localhost:3000/bookings/${_id}`,{
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