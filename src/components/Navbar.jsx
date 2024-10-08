import React, {  useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/custom_logo_half.png'
import LogoYellow from '../assets/custom_logo_half_yellow.png'
import LogoOnly from '../assets/logo_only.png'
import Resume from '../assets/Resume.pdf'

const Navbar = () => {

    // const [isRefresh, setRefresh] = useState()
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [animationClass , setAnimationClass] = useState(true)
    const [isLoaded, setLoaded] = useState(false)

    const location = useLocation();

    useEffect(() =>{

        if(localStorage.getItem('firstLoadDone') === null){
            localStorage.setItem('firstLoadDone', 1);
            setTimeout(() =>{
                setAnimationClass(false)
            }, 4000)
    
            setTimeout(() =>{
                setLoaded(true)
            }, 4000)
            console.log('This is the initial load');
        }else if(location.pathname === '/PortfolioV2/'){
            setTimeout(() =>{
                setAnimationClass(false)
            }, 4000)
    
            setTimeout(() =>{
                setLoaded(true)
            }, 4000)
        }else{
            // console.log('Animation', animationClass)
            // console.log('Loaded', isLoaded)
            setAnimationClass(false)
            setLoaded(true)
            // console.log('This is a page refresh')
        }
        

        // console.log('Loaded Navbar', isLoaded)
        // console.log('Loaded Animation', animationClass)
        // console.log('next-line')

    }, [animationClass, isLoaded, location.pathname])

    const resetHome = () => {

        if(location.pathname === '/PortfolioV2/'){
            localStorage.setItem('firstLoadDone', null);
            window.location.reload(false);
        }else{
            localStorage.setItem('firstLoadDone', null);
            setAnimationClass(true)
            setLoaded(false)
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
        <Link className='logo' to='/PortfolioV2/'>
            <img 
                src={LogoYellow} 
                alt="Logo" 
                style={{width: '48px', marginLeft: '30px'}} 
                onMouseOver={e => (e.currentTarget.src = Logo)} 
                onMouseOut={e => (e.currentTarget.src = LogoYellow)}
                onClick={resetHome}
        />
        </Link>
      </div>

    {/* menu */}


        <ul className='hidden md:flex'>
            <li>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/PortfolioV2/"
                    onClick={resetHome}
                    className='hover:text-[#ffd700]'
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/about" 
                    className='hover:text-[#ffd700]'
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/skills" 
                    className='hover:text-[#ffd700]'
                >
                    Skills
                </NavLink>
            </li>
            <li>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/work" 
                    className='hover:text-[#ffd700]'
                >
                    Work
                </NavLink>
            </li>
            <li>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/contact" 
                    className='hover:text-[#ffd700]'
                >
                    Contact
                </NavLink>
            </li>
        </ul>


    {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden cursor-pointer z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Mobile menu */}
        <ul className={!nav ? 'nav-transition' : 'md:hidden nav-transition active'}>
        <li className='py-6 text-2xl sm:text-4xl'>
            <a onClick={handleClick} href="/PortfolioV2/">Home</a>
        </li>
        <li className='py-6 text-2xl sm:text-4xl'>
            <a onClick={handleClick} href="/about">About</a>
        </li>
        <li className='py-6 text-2xl sm:text-4xl'>
            <a onClick={handleClick} href="/skills">Skills</a>
        </li>
        <li className='py-6 text-2xl sm:text-4xl'>
            <a onClick={handleClick} href="/work">Work</a>
        </li>
        <li className='py-6 text-2xl sm:text-4xl'>
            <a onClick={handleClick} href="/contact">Contact</a>
        </li>
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

