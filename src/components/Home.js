import React, { useEffect, useState } from 'react'
import AnimatedLetters from './AnimatedLetters';
import ProfilePhoto from '../assets/picture.JPG';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const [isLoaded, setLoaded] = useState(false)
    
    const nameArray = "Riz".split("");
    const nameArray2 = "Mark".split("");
    const nameArray3 = "Corpuz.".split("");
    const jobArray = "I'm an AI Automation".split("");
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

  const scrollToWork = () => {
    const el = document.querySelector('[name="work"]');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
    {isLoaded && (
      <div name='home' className='w-full h-screen bg-[#0a192f] scroll-mt-20'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full'>
        {/* Left: text */}
        <div>
          <p className='text-yellow-300 mb-2 name-animation'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 text-[#ccd6f6]'>
            <span className='inline-block'>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={22} />
            </span>{' '}
            <span className='inline-block'>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray2} idx={26} />
            </span>{' '}
            <span className='inline-block'>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray3} idx={31} />
            </span>
          </h1>
          <h2 className='text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#8892b0]'>
            <span className='inline-block'>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={39} />
            </span>{' '}
            <span className='inline-block'>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={54} />
            </span>
          </h2>
          <p className='text-[#8892b0] py-4 mt-2 p-animation'>
            I'm an AI automation specialist focused on creating no-code and low-code automation workflows that enhance efficiency and productivity. My primary focus is on developing streamlined processes and integrations to optimize business operations, including{' '}
            <button onClick={scrollToWork} className='text-[#ffd700] font-medium hover:underline cursor-pointer'>workflows.</button>
          </p>
          <div className='p-animation'>
            <a href='https://calendly.com/rizmark-corpuz/30min' target='_blank' rel='noreferrer'>
              <button className='text-white border-2 border-[#ffd700] hover:bg-[#ffd700] hover:text-[#0a192f] hover:border-[#ffd700] px-6 py-3 mt-2 rounded font-semibold tracking-wide transition-colors duration-300'>
                Book a Call
              </button>
            </a>
          </div>
        </div>

        {/* Right: profile photo placeholder */}
        <div className='hidden md:flex justify-center items-center p-animation'>
          <div className='relative'>
            <div className='w-64 h-64 rounded-full border-4 border-[#ffd700] shadow-2xl shadow-[#ffd700]/20 overflow-hidden'>
              <img src={ProfilePhoto} alt="Riz Mark Corpuz" className='w-full h-full object-cover' />
            </div>
            <div className='absolute -bottom-2 -right-2 w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center'>
              <span className='text-[#0a192f] text-lg font-bold'>⚡</span>
            </div>
          </div>
        </div>
      </div>


      </div>
    )}
    
    </>
  )
}

export default Home
