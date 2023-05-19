import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating';

const ShopByCat = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('Language Learning toys');
    const [datas, setDatas] = useState([])
    // console.log(datas)

    useEffect(() => {
        fetch(`https://educational-toys-server.vercel.app/allToys?category=${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDatas(data)
            })
    }, [category])
    return (
        <div className='my-10 bg-slate-300 p-10 rounded-xl'>
            <p className='text-center text-5xl font-bold font-serif'>Our popular </p>
            <div className='lg:ms-24 mt-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>               
                        <Tab onClick={() => setCategory('Language Learning toys')}>Language Learning Toys</Tab> 
                        <Tab onClick={() => setCategory('Mathematical Manipulatives')}>Mathematical Manipulatives</Tab>
                        <Tab onClick={() => setCategory('Science Experiment Kits')}>Science Experiment Kits</Tab>
                    </TabList>

                    <TabPanel   >
                        <div className='lg:flex justify-evenly'>
                        {
                            datas.slice(0, 3).map(data =>
                               
                            <div key={data._id} className="card h-64 w-full bg-base-500 shadow-xl image-full ms-4">
                                <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p>Price: ${data.price} <span>   <Rating value={data.rating} style={{ maxWidth: 80 }} readOnly className='ms-2'></Rating></span></p>
                                    
                                    <div className="card-actions justify-end">
                                        <Link to={`/single/${data._id}`}> <button className="btn btn-primary">view Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            
                            )
                        }
                        </div>
                         </TabPanel>
                         <TabPanel   >
                         <div className='lg:flex'>
                        {
                            datas.slice(0, 3).map(data =>
                               
                            <div key={data._id} className="card h-64 w-full ms-4 bg-base-500 shadow-xl image-full">
                                <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p>Price: ${data.price} <span>   <Rating value={data.rating} style={{ maxWidth: 80 }} readOnly className='ms-2'></Rating></span></p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/single/${data._id}`}> <button className="btn btn-primary">view Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            
                            )
                        }
                        </div>
                         </TabPanel>
                        
                         <TabPanel   >
                         <div className='lg:flex'>
                        {
                            datas.slice(0, 3).map(data =>
                               
                            <div key={data._id} className="card h-64 w-full ms-4 bg-base-500 shadow-xl image-full">
                                <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p>Price: ${data.price} <span>   <Rating value={data.rating} style={{ maxWidth: 80 }} readOnly className='ms-2'></Rating></span></p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/single/${data._id}`}> <button className="btn btn-primary">view Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            
                            )
                        }
                        </div>
                         </TabPanel>
                        
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCat;