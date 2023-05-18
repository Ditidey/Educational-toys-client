import React, { useEffect, useState } from 'react';
import NavBar from '../Shared/NavBar';
import SinglePage from './Admin/SinglePage';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [nameToy, setNameToy] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/allToys`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [nameToy])

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target.toy.value;
        console.log(searchValue)
        setNameToy(searchValue);
    }
    return (
        <div className='my-5  bg-red-900 rounded-xl p-10 py-16'>
            <NavBar></NavBar>

            <p className='text-white text-center text-5xl font-serif font-bold pt-20 pb-3'>Educational Toys Collection</p>
            <p className='text-slate-200 text-center font-serif'>Transform playtime into valuable <br /> learning experiences with our educational toys, <br /> fostering cognitive development, creativity, and a love for learning!</p>

            <div className='mb-10 w-full mt-4'>
                <form onSubmit={handleSubmit} action="" className='ms-96'>
                    <input type="text" name='toy' placeholder='toy name' className='px-10 py-3 rounded-xl ms-10 bg-slate-300' />
                    <input type="submit" value="Search" className="btn btn-accent " />
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full py-10">
                    {/* head */}
                    <thead className='py-5'>
                        <tr>
                            <th></th>
                            <th>seller Name</th>
                            <th>Toy Name</th>
                            <th>Subcategory</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>See Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map(toy =>
                                <tr key={toy._id}>
                                    <th>1</th>
                                    <td>{toy.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td  > <Link to={`/single/${toy._id}`} className="btn btn-outline btn-info font-bold">View Details</Link>  </td>
                                </tr>
                            )
                        }
{/* <SinglePage toy={toy}></SinglePage>? */}

                    </tbody>
                </table>
            </div>
          
            
         </div >  
    );
};

export default AllToys;