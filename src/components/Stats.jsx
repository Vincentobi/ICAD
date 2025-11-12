import React from 'react'
import CountUp from './CountUp'

const Stats = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center items-center">
        <p className="text-base font-medium text-gray-600 dark:text-gray-400">People Helped</p>
        {/* tracking-tight text-3xl sm:text-4xl font-bold */}
        <div><CountUp end={1500} className='tracking-tight text-3xl sm:text-4xl font-bold' />+</div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center items-center">
        <p className="text-base font-medium text-gray-600 dark:text-gray-400">Projects Funded</p>
        <div><CountUp end={250} className='tracking-tight text-3xl sm:text-4xl font-bold' />+</div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-gray-800 text-center items-center">
        <p className="text-base font-medium text-gray-600 dark:text-gray-400">Volunteers Engaged</p>
        <div><CountUp end={1200} className='tracking-tight text-3xl sm:text-4xl font-bold' />+</div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Stats
