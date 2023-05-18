import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../AuthProvider';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const {user} = useContext(contextProvider);

    useEffect(() => {
        fetch(`http://localhost:5000/allToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [user])
    return (
        <div>
            
        </div>
    );
};

export default MyToys;