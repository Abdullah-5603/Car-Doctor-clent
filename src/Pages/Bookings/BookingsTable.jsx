import React from 'react';

const BookingsTable = ({ bd, handleDelete, handleUpdate}) => {
    const { _id, customerInfo, img, date, price, status } = bd

    // console.log(status)

    return (
        <tr>
            <th><button onClick={() => handleDelete(_id)} className='bg-gray-800 rounded-full py-3 px-5 text-white'>X</button></th>
            <td><img className='w-32 rounded-lg' src={img} alt="" /></td>
            <td className='text-xl font-semibold'>{customerInfo}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td> {
                    status === 'Approved' ? <button onClick={() => handleUpdate(_id)} className="btn rounded-md bg-transparent border-2 border-[#29B170] hover:bg-transparent hover:text-[#29B170] hover:border-[#29B170] my-5 text-[#29B170]">Approved</button> :<button onClick={() => handleUpdate(_id)} className="btn rounded-md bg-[#FF3811] border-none hover:bg-[#FF3811] hover:border-none my-5 text-white">Pending</button>
            } </td>
        </tr>
    );
};

export default BookingsTable;