import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();
  return (
    <section className='w-full'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32'>
            <div className='hero flex min-h-[480px] flex-col gap-8 items-center justify-center mx-5 text-center rounded-xl bg-cover bg-center p-4 sm:p-8'>
        <div className='flex flex-col gap max-w-3xl'>
            <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
                Empowering Communities, Changing Lives
            </h1>
            <p class="text-white/90 text-base sm:text-lg font-normal leading-normal">
                Join us in our mission to create lasting positive change through community-driven projects and support.
            </p>
        <div class="flex flex-wrap gap-4 justify-center mt-5">
            <button onClick={() => navigate('/GetInvolved')} class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span class="truncate">Donate Now</span>
            </button>
            <button onClick={() => navigate('/GetInvolved')} class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light text-[#111418] text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
            <span class="truncate">Volunteer With Us</span>
            </button>
        </div>
        </div>
        </div>
        </div>
        
    </section>
    
  )
}

export default Hero
