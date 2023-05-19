import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import NavBar from '../../Shared/NavBar';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys')
    const [toys, setToys] = useState([]);
    const { user } = useContext(contextProvider);
    const [value, setValue] = useState('price')
    console.log(value)

    useEffect(() => {
        fetch(`https://educational-toys-server.vercel.app/allToys?email=${user?.email}&price=${value}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setToys(data)
            })
    }, [user, value])

    const handleDelete = id =>{
        fetch(`https://educational-toys-server.vercel.app/allToys/${id}`, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Delete!',
                    text: 'Sorry! You have deleted one toy.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  const remaining = toys.filter(toy => toy._id !== id);
                  setToys(remaining);
            }
        })
    }
    return (
        <div className='mb-10 bg-green-700 rounded-xl p-10'>
            <NavBar></NavBar>
            <p className='text-white text-center text-4xl font-serif font-bold pt-20 pb-3'>Your added educational toys</p>
            <p className='text-slate-200 text-center font-serif mb-10'>Your total toys now {toys.length}. <br /> You can modified toys' information. <br /> Also you can delete one if you want, but it will not be retrieve.</p>
             <div className='my-5 '>
                 <button onClick={()=>setValue('price')} className="btn   btn-primary">Sort By Price</button>
                 <button onClick={()=>setValue('quantity')}  className='btn   btn-secondary ms-3'>Sort by quantity</button>
             </div>
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Toy Photo</th>
                            <th>Toy Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Description</th>
                            <th>Update Now</th>
                            <th>Delete Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, id) =>
                                <tr key={toy._id}>
                                    <th>{id + 1}</th>
                                    <td className=" ">
                                        <img src={toy.photoURL} alt="Avatar Tailwind CSS Component" className=" rounded-lg  w-14 h-14" />
                                    </td>
                                   
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td className='h-10'>{toy.description.slice(0, 20)}..</td>
                                    <td> <Link to={`/updateToy/${toy._id}`} className="btn btn-outline btn-info">Update</Link></td>
                                    <td><button onClick={()=>handleDelete(toy._id)} className="btn btn-outline btn-warning">Delete</button></td>
                                </tr>
                            )
                        }






                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;