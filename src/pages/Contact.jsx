import React from 'react'
import Location from '../components/location'
import MessageBox from '../components/MessageBox'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between gap-3 p-4">
<div className="flex w-full flex-col gap-3">
<h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Get in Touch</h1>
<p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                We'd love to hear from you. Whether you have a question, a suggestion, or want to get involved, please don't hesitate to reach out.
              </p>
</div>
</div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
     
        <Location />
        <MessageBox />

    </div>
    <Footer />
    </div>
  )
}

export default Contact
