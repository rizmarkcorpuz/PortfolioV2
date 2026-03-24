import React, { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
import Loader from 'react-loaders';
import ProfilePhoto from '../assets/picture.JPG';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate-underline')

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-underline-hover')
        }, 3000)
    }, [])

  return (
    <>
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 scroll-mt-20'>
        <div className='max-w-[1000px] mx-auto px-4 py-20 h-full flex flex-col justify-center'>

            {/* Heading */}
            <div className='pb-8'>
                <p className='text-2xl sm:text-4xl font-bold about-page'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't']}
                        idx={10}
                    />{' '}
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['m', 'e']}
                        idx={15}
                    />
                </p>
            </div>

            {/* Content: photo + text */}
            <div className='flex flex-col md:flex-row md:items-center md:gap-12 text-animation'>

                {/* Profile photo */}
                <div className='flex-shrink-0 flex justify-center mb-8 md:mb-0'>
                    <div className='w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-[#ffd700] shadow-xl shadow-[#ffd700]/10 overflow-hidden'>
                        <img src={ProfilePhoto} alt="Riz Mark Corpuz" className='w-full h-full object-cover' />
                    </div>
                </div>

                {/* Text columns */}
                <div className='flex flex-col sm:flex-row gap-8 flex-1'>
                    <div className='sm:text-right text-2xl font-bold text-gray-100 flex-1'>
                        <p>Hi. I'm Riz Mark, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='flex-1 text-gray-400 leading-relaxed space-y-4'>
                        <p>
                            I'm an AI Automation Specialist focused on designing and deploying no-code and low-code workflows that eliminate manual tasks and accelerate business operations.
                        </p>
                        <p>
                            I work with platforms like N8N, Make, Zapier, HubSpot, and Airtable to build integrations for clients ranging from startups to enterprise teams. What would you automate if you had an automation specialist at your disposal?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
