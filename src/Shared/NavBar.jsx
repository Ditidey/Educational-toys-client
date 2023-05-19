import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../AuthProvider';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/logo.png';

const NavBar = () => {
    const { user, userLogout } = useContext(contextProvider)
    const [open, setOpen] = useState(false);
    // console.log(user?.displayName, user?.photoURL)

    const handleLogout = () => {
        userLogout()
            .then()
            .catch(er => console.log(er.message))
    }

    return (
        <div className="navbar bg-base-200 rounded-2xl shadow-2xl px-6">
            <div className="navbar-start">
                <img src={logo} alt="" className='w-10 h-8' />
                <a className="btn btn-ghost normal-case text-2xl font-sans font-bold">Creative Creator Toys</a>
            </div>

            <div className="navbar-center">
                <div className=" dropdown relative">
                    {
                        open ? <FaTimes onClick={() => setOpen(!open)} className='lg:hidden ms-36'></FaTimes>
                            : <FaBars onClick={() => setOpen(!open)} className='lg:hidden ms-36'></FaBars>
                    }
                    <ul tabIndex={0} className={`md:flex md:space-x-8 md:static mt-3  absolute duration-500 ${open === true ? 'top-14' : '-top-72'}`}>
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Home</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Blog</NavLink></li>
                        <li><NavLink to='/all-toys' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>All Toys</NavLink></li>
                        {
                            user ? <>
                                <li><NavLink to='/my-toy' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>My Toys</NavLink></li>
                                <li><NavLink to='/add-toy' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Add Toys</NavLink></li>
                                <li onClick={handleLogout} className='btn btn-outline btn-info'>Logout</li>
                                <li className="tooltip" data-tip={user.displayName}>
                                    <img src={user.photoURL} className='w-10 h-10 rounded-full' />
                                </li>

                            </> :
                                <li><Link to='/login' className="btn btn-outline btn-accent py-0">Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;