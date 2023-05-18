import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import NavBar from '../../Shared/NavBar';
import Swal from 'sweetalert2';
import { contextProvider } from '../../AuthProvider';

const AddToys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useContext(contextProvider);
    const {email, displayName} = user;

    const handleOnSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
        
        })
        .then(res =>res.json())
        .then(result => {
            console.log(result)
            if(result.insertedId){
                Swal.fire({
                    title: 'Added!',
                    text: 'Do you want to add more',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div className='bg-blue-900 rounded-xl p-10'>
            <NavBar></NavBar>
            <p className='text-center font-serif font-bold text-4xl mt-20 text-white'>Please add your toys' collection</p> <hr className='w-1/2 mt-2 ms-80' />
             
            <form onSubmit={handleSubmit(handleOnSubmit)} className=' mx-auto bg-slate-200  m-8 shadow-xl rounded-xl py-14'>
                <div className='flex justify-evenly'>
                    <div>
                        <label htmlFor="" className='font-mono ms-2 '>Toy's Name</label><br />
                        <input type='text' defaultValue="name" {...register("name", { required: true, required: "Name is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100 " /> <br /> </div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2 '>Toy's Photo</label><br />
                        <input type='text'   {...register("photoURL", { required: true, required: "Photo is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br /></div>
                </div>
                <div className="flex justify-evenly">
                    <div>
                        <label htmlFor="" className='font-mono ms-2 '>Seller's Name</label><br />
                        <input type='text' value={displayName}  {...register("seller", { required: true, required: "Name is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br /></div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Seller's Email</label><br />
                        <input type='email'  value={email} {...register("email", { required: true, required: "Email Address is required" })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br /></div>
                </div>

                <div className='flex justify-evenly'>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Category Name</label> <br />
                        <input type='text' {...register("category", { required: true,   })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br />
                    </div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Price</label> <br />
                        <input type='text' {...register("price", { required: true,  })} className="input input-bordered border-b-4 bg-slate-100 w-full" />
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Rating</label> <br />
                        <input type='text' {...register("rating", { required: true, maxLength: 6 })} className="input input-bordered w-full border-b-4 bg-slate-100" /> <br />
                    </div>
                    <div>
                        <label htmlFor="" className='font-mono ms-2'>Available Quantity</label> <br />
                        <input type='text' {...register("quantity", { required: true, maxLength: 6 })} className="input input-bordered w-full max-w-xs border-b-4 bg-slate-100" /> <br />
                    </div>
                </div>
                <label htmlFor="" className='font-mono ms-96 mt-2'>Detail Description </label> <br />
                <input type='text' {...register("description", { required: true,   })} className="input input-bordered w-1/2 border-b-4 bg-slate-100 h-20 ms-96 " /> <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value='Add to create' className="btn w-2/4 bg-blue-800 px-10 mt-10 ms-96 " />
            </form>

        </div>
    );
};

export default AddToys;