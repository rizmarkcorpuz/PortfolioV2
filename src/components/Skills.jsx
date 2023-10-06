import React, { useEffect, useState } from 'react';
import AnimatedLetters from './AnimatedLetters';
import Loader from 'react-loaders';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import VSCode from '../assets/vs_code.png';

const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate-underline')

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-underline-hover')
        }, 3000)
    }, [])

  return (
    <>
    <div name='skills' className='w-full sm:h-screen md:h-screen lg:h-screen bg-[#0a192f] text-gray-300 overflow-auto'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 mt-20'>
              <p className='text-4xl font-bold skill-page'><AnimatedLetters className
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i' , 'l', 'l', 's']}
                        idx={10}
                    /></p>
              {/* eslint-disable-next-line */}
              <p className='py-4 text-animation'>These are the programming languages, frameworks, and technologies with which I've got expertise.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-animation'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={VSCode} alt="HTML icon" />
                  <p className='my-4'>VS CODE</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-5'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              
          </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Skills
