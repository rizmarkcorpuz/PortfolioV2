import React, {  useEffect, useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/custom_logo_half.png'
import LogoYellow from '../assets/custom_logo_half_yellow.png'
import LogoOnly from '../assets/logo_only.png'
import Resume from '../assets/Resume.pdf'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [animationClass , setAnimationClass] = useState(true)
    const [isLoaded, setLoaded] = useState(false)

    useEffect(() =>{

        if(localStorage.getItem('firstLoadDone') === null){
            localStorage.setItem('firstLoadDone', 1);
            setTimeout(() =>{ setAnimationClass(false) }, 4000)
            setTimeout(() =>{ setLoaded(true) }, 4000)
        }else{
            setAnimationClass(false)
            setLoaded(true)
        }

    }, [])

    const resetHome = () => {
        localStorage.setItem('firstLoadDone', null);
        window.location.reload(false);
    }

    const scrollTo = (id) => {
        const el = document.querySelector(`[name="${id}"]`);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }
    

  return (
    <>
    {animationClass && (
        <div className='w-full h-screen bg-[#03070e]'>
        <div className='logo-div'>
          <svg 
            className='svg'
            xmlns="http://www.w3.org/2000/svg" 
            width="300px"
            height="300px"
            viewBox='-73 -75 450 450'
          >
          <path
            transform="translate(-55, -21)"
            className="path" 
            stroke="#ffd700" 
            d="M205,103 264.756,137.5 264.756,206.5 205,241 145.244,206.5 145.244,137.5Z" 
            fill="none" strokeLinecap="round"
          />
          
          </svg>
          <img className='img' alt='logo' src={LogoOnly} />
        </div>
        
        </div>
      )}
    {isLoaded && (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 nav-animation'>
      <div>
        <img
            src={LogoYellow}
            alt="Logo"
            className='logo cursor-pointer'
            style={{width: '48px', marginLeft: '30px'}}
            onMouseOver={e => (e.currentTarget.src = Logo)}
            onMouseOut={e => (e.currentTarget.src = LogoYellow)}
            onClick={resetHome}
        />
      </div>

    {/* menu */}
        <ul className='hidden md:flex'>
            <li><button onClick={() => scrollTo('home')} className='hover:text-[#ffd700] cursor-pointer'>Home</button></li>
            <li><button onClick={() => scrollTo('about')} className='hover:text-[#ffd700] cursor-pointer'>About</button></li>
            <li><button onClick={() => scrollTo('skills')} className='hover:text-[#ffd700] cursor-pointer'>Skills</button></li>
            <li><button onClick={() => scrollTo('work')} className='hover:text-[#ffd700] cursor-pointer'>Work</button></li>
            <li><button onClick={() => scrollTo('contact')} className='hover:text-[#ffd700] cursor-pointer'>Contact</button></li>
        </ul>

    {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden cursor-pointer z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'nav-transition' : 'md:hidden nav-transition active'}>
            <li className='py-6 text-2xl sm:text-4xl'><button onClick={() => { scrollTo('home'); handleClick(); }}>Home</button></li>
            <li className='py-6 text-2xl sm:text-4xl'><button onClick={() => { scrollTo('about'); handleClick(); }}>About</button></li>
            <li className='py-6 text-2xl sm:text-4xl'><button onClick={() => { scrollTo('skills'); handleClick(); }}>Skills</button></li>
            <li className='py-6 text-2xl sm:text-4xl'><button onClick={() => { scrollTo('work'); handleClick(); }}>Work</button></li>
            <li className='py-6 text-2xl sm:text-4xl'><button onClick={() => { scrollTo('contact'); handleClick(); }}>Contact</button></li>
        </ul>


        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/riz-mark-corpuz/" target='_blank'
                        rel='noreferrer'
                    >
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/rizmarkcorpuz"
                        target='_blank'
                        rel='noreferrer'
                    >
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:rizmark.corpuz@gmail.com"
                        target='_blank'
                        rel='noreferrer'
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        download href={Resume}
                        rel='noreferrer'
                    >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )}
    
    </>
  )
}

export default Navbar

