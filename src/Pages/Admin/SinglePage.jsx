import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { useLoaderData } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import useTitle from '../../hooks/useTitle';

const SinglePage = () => {
    useTitle('Toy-Details')
    const toy = useLoaderData();
    const { price, description, quantity, name, rating, category, photoURL, _id, seller, email } = toy;
    return (
        <div className='bg-slate-100'>
            <NavBar></NavBar>
        
        <div className=' mt-20 lg:flex p-10'>
             
            <img src={photoURL} alt="" className='w-1/2 rounded-xl'/>
            
            <div className='bg-slate-300 p-20 rounded-xl lg:pt-40'>               
                <h3 className="text-3xl font-bold ms-44 flex mb-2 ">{name}
                    <Rating value={rating} style={{ maxWidth: 80 }} readOnly className='ms-2'></Rating> </h3>
                <p className="py-3 text-center text-xl">Price: ${price}  <span className='ps-10'>Quantity: {quantity}</span></p>
                 
                <p className='text-center font-semibold py-2 text-xl'>Seller's Name: {seller} </p>
                <p className='text-center font-semibold py-2 text-xl'>  <span className='ms-3'>Email: {email}</span></p>
                <p className='py-4 ps-4 text-xl'>Description: {description}</p>
            </div>
        </div>
        </div>
    );
};

export default SinglePage;