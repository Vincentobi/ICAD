import React, { useState } from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = useState(false);

  return (
    <div className='w-full sticky top-0 z-50 flex items-center justify-center border-b shadow-md border-gray-200/50 dark:border-gray-800/50  bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm '>
    <div className='flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3'>
     <Link to="/"><img src={assets.logo} width={100} alt="" /></Link> 

      <nav className='hidden md:flex flex-1 justify-center items-center gap-9 text-[#111418] dark:text-background-light'>
       <Link to="/">
        <p className='text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors'>Home</p>
       </Link> 
       <Link to="/about">
        <p className='text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors'>About Us</p>
       </Link>
        <Link to="/programs/">
        <p className='text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors'>Our Work</p>
        </Link>
        <Link to="/getinvolved">
        <p className='text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors'>Get Involved</p>    
        </Link>
        <Link to="/contact">
        <p className='text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors'>Contact Us</p>    
        </Link>
        
      </nav>

      <button className='flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors'>
        <span href='#' className='truncate'>Donate</span>
      </button>

        <div className='md:hidden flex items-center'>
        <button onClick={() => setVisible(!visible)} className='focus:outline-none z-999'>
            <svg className="w-10 h-10 text-[#111418] dark:text-background-light cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={visible ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
        </button>
        </div>
    </div>

    {/* SideBar Menu for small screens */}
    <div className={`absolute top-0 left-0 w-full h-screen bg-background-light dark:bg-background-dark transform ${visible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <nav className='flex flex-col items-center justify-center h-full gap-8 text-[#111418] dark:text-background-light'>
            <Link to="/">
            <p className='text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors' onClick={() => setVisible(false)}>Home</p>
            </Link>
            <Link to="/about">
            <p className='text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors' onClick={() => setVisible(false)}>About Us</p>
            </Link>
            <Link to="/programs/">
            <p className='text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors' onClick={() => setVisible(false)}>Our Work</p>
            </Link>
            <Link to="/getinvolved">
            <p className='text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors' onClick={() => setVisible(false)}>Get Involved</p>
            </Link>
            <Link to="/contact">
            <p className='text-lg font-medium hover:text-primary dark:hover:text-primary transition-colors' onClick={() => setVisible(false)}>Contact Us</p>
            </Link> 
        </nav>
    </div>
    </div>
  )
}

export default Navbar
