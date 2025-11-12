import React from 'react'
import assets from '../assets/assets.js'

const FeaturedProjects = () => {
  return (
    <section class="w-full py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold tracking-tight text-center">Our Featured Projects</h2>
<p className="mt-2 text-center text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Discover the initiatives making a real difference in the lives of many.</p>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex flex-col rounded-xl bg-white dark:bg-background-dark overflow-hidden shadow-lg transition-shadow hover:shadow-xl border border-gray-200 dark:border-gray-800">
<div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Children in a classroom smiling and raising their hands." style={{ backgroundImage: `url(${assets.project3})` }}></div>
<div className="flex flex-col flex-1 justify-between p-6">
    <div>
<h3 className="text-lg font-bold">Sustainable Environments</h3>
<p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Creating green spaces and promoting sustainable practices for a healthier planet.</p>
</div>
<button className="mt-6 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
<span>Learn More</span>
</button>
</div>
</div>
<div className="flex flex-col rounded-xl bg-white dark:bg-background-dark overflow-hidden shadow-lg transition-shadow hover:shadow-xl border border-gray-200 dark:border-gray-800">
<div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="Volunteers planting trees in a community park." style={{ backgroundImage: `url(${assets.project5})` }}></div>
<div className="flex flex-col flex-1 justify-between p-6">
<div>
<h3 className="text-lg font-bold">Community Health Initiative</h3>
<p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">Ensuring access to essential healthcare services for vulnerable populations</p>
</div>
<button className="mt-6 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
<span>Learn More</span>
</button>
</div>
</div>
<div className="flex flex-col rounded-xl bg-white dark:bg-background-dark overflow-hidden shadow-lg transition-shadow hover:shadow-xl border border-gray-200 dark:border-gray-800">
<div className="w-full bg-center bg-no-repeat aspect-video bg-cover" data-alt="A doctor checking a patient's blood pressure at a mobile health clinic." style={{ backgroundImage: `url(${assets.project2})` }}></div>
<div className="flex flex-col flex-1 justify-between p-6">
<div>
<h3 className="text-lg font-bold">Education for All</h3>
<p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
Providing quality education and learning resources to underprivileged children in our community.
</p>
</div>
<button className="mt-6 w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors">
<span>Learn More</span>
</button>
</div>
</div>
</div>
</div>
</section>
  )
}

export default FeaturedProjects
