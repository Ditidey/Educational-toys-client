import React from 'react';
import HeatMap from '@uiw/react-heat-map';
import { Link } from 'react-router-dom';
 
const AnimatedSec = () => {
    const articles = ["Geography and Exploration Toys",
        "Coding and Robotics Toys",

        "Mathematical Manipulatives",

        "Science Experiment Kits",
        "Social Studies and History Toys",


        "Language Learning Toys",
        "Problem-Solving Games",
        " Engineering and Design Toys",
    ]
    const value = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
    ];
    return (
        <div className=' bg-slate-300 my-4 shadow-2xl'>
            <p className='text-center font-serif font-bold text-5xl pt-4 text-blue-700'> Best Toys  </p>
            <p className='text-center font-serif  pt-2'>Do you want to add? <Link to='/add-toy' className='text-blue-400 '>add to</Link>  </p>

            <div className='lg:flex bg-slate-300 lg:ps-32'>

                <div className='  pt-20 px-5 hover:animate-bounce'>
                    <HeatMap value={value} startDate={new Date('2016/01/01')}
                        width={400}
                        style={{ color: '#ad001d' }}
                        height={200}
                    />
                </div>
                <div className=" pt-10 ms-20 pb-5 lg:ps-20">

                    {
                        articles.map((a, id) =>

                            <div className="" key={id}>
                                <li className="font-sans hover:text-blue-600">{a}</li>

                            </div>

                        )
                    }


                </div>
            </div>
        </div>

    );
};

export default AnimatedSec;