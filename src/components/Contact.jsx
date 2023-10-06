import React, { useEffect, useState } from 'react';
import AnimatedLetters from './AnimatedLetters';
import Loader from 'react-loaders';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate-underline')

    useEffect(() =>{
        setTimeout(() =>{
            setLetterClass('text-animate-underline-hover')
        }, 3000)
    }, [])

  return (
    <>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a5553385-c8e9-45b4-8789-e89318a2b6fc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 mt-20'>
                <p className='text-4xl font-bold contact-page'><AnimatedLetters className
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n' , 't', 'a', 'c', 't']}
                        idx={10}
                    /></p>
                {/* eslint-disable-next-line */}
                <p className='text-gray-300 py-4 text-animation'>Fill out the form below or send me an email. - <a href='mailto:rizmark.corpuz@gmail.com' target='_blank'>rizmark.corpuz@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2 font-[Raleway] text-animation' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] font-[Raleway] text-animation' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 font-[Raleway] text-animation' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 text-animation hover:bg-[#639C55] hover:border-bg-[#639C55] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact