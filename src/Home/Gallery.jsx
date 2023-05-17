import React from 'react';
import photos from '../../public/photo.json';

const Gallery = () => {

    return (
        <div className='rounded-xl shadow-md'>
        <p className='text-white text-center font-serif font-bold mt-8 p-4 text-4xl shadow-lg bg-slate-500'>Pictures of clients' happiness</p> 
        <div className='grid grid-cols-2 lg:grid-cols-5 shadow-2xl mb-4'>
               
            {
                photos.map(photo=>
                <div key={photo.id} className='  border-slate-200 border-8'>
                    <img src={photo.photo} alt="" className='h-40 w-full hover:animate-spin'/>
                </div>
                )
            }
        </div>
        </div>
    );
};

export default Gallery;