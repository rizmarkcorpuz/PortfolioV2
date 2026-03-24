import React, { useEffect, useState } from 'react';
import AnimatedLetters from './AnimatedLetters';
import Loader from 'react-loaders';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);

    const [letterClass, setLetterClass] = useState('text-animate-underline')

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-underline-hover')
        }, 3000)
    }, [])
  
  return (
    <>
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] scroll-mt-20'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-20'>
            <p className='text-4xl font-bold work-page'>
            <AnimatedLetters className
                        letterClass={letterClass}
                        strArray={['W', 'o', 'r' , 'k']}
                        idx={10}
                    />
            </p>
            {/* eslint-disable-next-line */}
            <p className='py-6 text-animation'>Check out somethings I built</p>
            </div>

            {/* container for projects */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-animation">

                {project.map((item, index) => (
                    item.type === 'automation' ? (
                        /* Automation project card */
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div relative overflow-hidden"
                        >
                            {/* Default: show name at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 px-3 py-2 group-hover:opacity-0 transition-opacity duration-300 rounded-b-md">
                                <span className="text-sm font-bold text-white tracking-wide">{item.name}</span>
                            </div>
                            {/* Hover: show description + tools */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3">
                                <span className="text-lg font-bold text-white tracking-wider block mb-2">{item.name}</span>
                                <p className="text-xs text-gray-200 leading-relaxed mb-3">{item.description}</p>
                                <div className="flex flex-wrap justify-center gap-1">
                                    {item.tools.map((tool, i) => (
                                        <span key={i} className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Code project card */
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font bold text-white tracking-wider">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center">
                                    {/* eslint-disable-next-line */}
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    {/* eslint-disable-next-line */}
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default Work;
