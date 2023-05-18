import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCat = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('Science Experiment Kits');
    const [datas, setDatas] = useState([])
    console.log(category)
    useEffect(() => {
        fetch(`http://localhost:5000/allToys?category=${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [category])
    return (
        <div className='my-10 bg-slate-300 p-10 rounded-xl'>
            <p className='text-center text-4xl font-bold font-serif'>Our popular </p>
            <div className='ms-32 '>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab onClick={() => setCategory('Language Learning toys')}>Language Learning Toys</Tab>
                        <Tab onClick={() => setCategory('Mathematical Manipulatives')}>Mathematical Manipulatives</Tab>
                        <Tab onClick={() => setCategory('Science Experiment Kits')}>Science Experiment Kits</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            datas.slice(0, 2).map(data => <div key={data._id} className="card w-96 bg-base-500 shadow-xl image-full">
                                <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p>${data.price}</p>
                                    <p>{data.rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/single/${data._id}`}> <button className="btn btn-primary">view Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            datas.slice(0, 2).map(data => <div key={data._id} className="card w-96 bg-base-500 shadow-xl image-full">
                                <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p>${data.price}</p>
                                    <p>{data.rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/single/${data._id}`}> <button className="btn btn-primary">view Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            datas.slice(0, 2).map(data => <div key={data._id} className="card w-96 bg-base-500 shadow-xl image-full">
                                <figure><img src={data.photoURL} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <p>${data.price}</p>
                                    <p>{data.rating}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/single/${data._id}`}> <button className="btn btn-primary">view Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCat;