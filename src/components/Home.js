import React, { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const [isLoaded, setLoaded] = useState(false)
    
    const nameArray = "Riz Mark Corpuz.".split("");
    const jobArray = "I'm an Automation".split("");
    const jobArray2 = "Specialist.".split("");

    useEffect(() =>{

      setTimeout(() =>{
        setLoaded(true)
      }, 4000)

      setTimeout(() =>{
        setLetterClass('text-animate-hover')
        setLoaded(true)
      }, 8000)

      // console.log('Loaded Home', isLoaded)
      // console.log('next-line')

    }, [isLoaded])

  return (
    <>
    {isLoaded && (
      <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-300 mb-2 name-animation'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold mb-2 text-[#ccd6f6]'>
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={22} />
        </h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'><AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={38} /> <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={54} /></h2>
        <p className='text-[#8892b0] py-4 max-w-[550px] mt-2 p-animation'>I'm an automation specialist focused on creating no-code and low-code automation workflows that enhance efficiency and productivity. Currently, my primary focus is on developing streamlined processes and integrations to optimize business operations, including <span className='text-[#ffd700] font-medium'>workflows.</span></p>
      </div>
        

      </div>
    )}
    
    </>
  )
}

export default Home
