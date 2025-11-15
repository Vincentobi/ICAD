import React from 'react'

const Banner = () => {
  return (
    <section className="bg-primary/10 dark:bg-primary/20 py-16 sm:py-24">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark sm:text-4xl">Join Us in Making a Difference</h2>
<p className="mt-4 text-lg leading-8">Your support can change lives. Whether you donate or volunteer your time, you're helping build a stronger community.</p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
<span className="truncate">Support Our Work</span>
</button>
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/90">
<span className="truncate">Become a Volunteer</span>
</button>
</div>
</div>
</section>
  )
}

export default Banner
