import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className='p-10 bg-black h-full'>
            <Link to='/' className="link link-primary  ms-4 mt-4 btn btn-outline btn-primary">Back to home page</Link>
            <span className="alert alert-error shadow-lg mt-5 w-1/4 ms-3 ">Error! { error.statusText || error.message}.</span>
            <img src="https://media.istockphoto.com/id/1204713198/photo/3d-word-error-with-computer-mouse-on-chalkboard-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=9jdGYoi7p7oG_qdQix-H8wtBuY8xtDF_oaGAeLTlXKQ=" alt="" className=' h-full w-2/3 ms-64 rounded-full animate-pulse'/>
             
        </div>
    );
};

export default ErrorPage;