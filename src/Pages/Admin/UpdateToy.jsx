import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import { useForm } from "react-hook-form";
import NavBar from '../../Shared/NavBar';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    const toy = useLoaderData();
    const {price, description, quantity, name, rating, category, photoURL, _id} = toy;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useContext(contextProvider);
    const { email, displayName } = user;

    const handleOnSubmit = data => {
        useTitle('update-toy')
        console.log(data)
        fetch(`https://educational-toys-server.vercel.app/allToys/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated!',
                        text: 'Do you want to more update',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <form onSubmit={handleSubmit(handleOnSubmit)} className=' mx-auto bg-slate-200  m-8 shadow-xl rounded-xl py-14'>
                <div className='flex justify-evenly'>
                    <div>
                        <label htmlFor="" className='font-mono ms-2 '>Toy's Name</label><br />
                        <input type='text' defaultValue={name} {...register("name", { required: true, required: "Name is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100 " /> <br /> </div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2 '>Toy's Photo</label><br />
                        <input type='text' defaultValue={photoURL}  {...register("photoURL", { required: true, required: "Photo is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br /></div>
                </div>
                <div className="flex justify-evenly">
                    <div>
                        <label htmlFor="" className='font-mono ms-2 '>Seller's Name</label><br />
                        <input type='text' value={displayName}  {...register("seller", { required: true, required: "Name is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br /></div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Seller's Email</label><br />
                        <input type='email' value={email} {...register("email", { required: true, required: "Email Address is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br /></div>
                </div>

                <div className='flex justify-evenly'>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Category Name</label> <br />
                        <input type='text' defaultValue={category} {...register("category", { required: true, })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br />
                    </div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Price</label> <br />
                        <input type='text' defaultValue={price} {...register("price", { required: true, })} className="input input-bordered border-b-4 bg-slate-100 w-full" />
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Rating</label> <br />
                        <input type='text' defaultValue={rating} {...register("rating", { required: true, maxLength: 6 })} className="input input-bordered w-full border-b-4 bg-slate-100" /> <br />
                    </div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Available Quantity</label> <br />
                        <input type='text' defaultValue={quantity} {...register("quantity", { required: true, maxLength: 6 })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br />
                    </div>
                </div>
                <label htmlFor="" className='font-mono ms-96 mt-2'>Detail Description </label> <br />
                <input type='text' defaultValue={description} {...register("description", { required: true, })} className="input input-bordered w-1/2 border-b-4 bg-slate-100 h-20 ms-96 " /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value='Update your toy' className="btn w-2/4 bg-blue-800 px-10 mt-10 ms-96 " />
            </form>
        </div>
    );
};

export default UpdateToy;