import React, { useContext, useState } from 'react';
import { contextProvider } from '../AuthProvider';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import logo from '../../public/logo.png'
const NavBar = () => {
    const { user, userLogout } = useContext(contextProvider)
    const [open, setOpen] = useState(false);
    const handleLogout = () => {
        userLogout()
            .then()
            .catch(er => console.log(er.message))
    }
    return (
        <div className="navbar bg-base-200 rounded-2xl shadow-2xl px-6">
            <div className="navbar-start">
                <img src={logo} alt="" className='w-10 h-8'/>
                <a className="btn btn-ghost normal-case text-2xl font-sans font-bold">Creative Creator Toys</a>
            </div>
            <div className="navbar-center">
                <div className=" dropdown relative">

                    {
                        open ? <FaTimes onClick={() => setOpen(!open)} className='lg:hidden ms-36'></FaTimes>
                            : <FaBars onClick={() => setOpen(!open)} className='lg:hidden ms-36'></FaBars>
                    }

                    <ul tabIndex={0} className={`md:flex md:space-x-8 md:static mt-3  absolute duration-500 ${open === true ? 'top-14' : '-top-48'}`}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>Blog</Link></li>
                        {
                            user ? <>
                                <li><Link>My Toys</Link></li>
                                <li><Link>Add Toys</Link></li>
                            </> :
                                <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>

            <div className='navbar-end '>
                <div className=" dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <Tooltip content={user?.displayName}>
                                {
                                      <img src={user.photoURL} /> 
                                         
                                }
                            </Tooltip> 
                             : <FaUserAlt></FaUserAlt>
                            }
                         

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;