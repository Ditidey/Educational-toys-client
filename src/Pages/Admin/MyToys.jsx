import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import NavBar from '../../Shared/NavBar';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(contextProvider);

    useEffect(() => {
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [user])
    return (
        <div className='mb-10'>
            <NavBar></NavBar>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
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
                            toys.map(toy =>
                                <tr key={toy._id}>
                                    <th>1</th>
                                    <td className=" ">
                                        <img src={toy.photoURL} alt="Avatar Tailwind CSS Component" className=" rounded-lg  w-14 h-14" />
                                    </td>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td><button className="btn btn-outline btn-info">Update</button></td>
                                    <td><button className="btn btn-outline btn-warning">Delete</button></td>
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