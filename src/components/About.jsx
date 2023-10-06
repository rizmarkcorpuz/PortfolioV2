import React, { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters'
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate-underline')

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-underline-hover')
        }, 3000)
    }, [])

  return (
    <>
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-2xl sm:text-4xl font-bold about-page'><AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o' , 'u', 't']}
                        idx={10}
                    /> <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['m', 'e']}
                    idx={15}
                /></p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold text-animation'>
                    <p>Hi. I'm Riz Mark, nice to meet you. Please take a took around.</p>
                </div>
                <div>
                    <p className='text-animation'>
                    I am deeply committed to creating outstanding software that enhances the lives of others around me. I specialize in developing software for clients ranging from individuals and small enterprises to huge corporations. What would you do if you had a software specialist at your disposal?
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
