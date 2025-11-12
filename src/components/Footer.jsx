import React from 'react'
import assets from '../assets/assets'

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div>
      <footer class="w-full bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-3">
<span>
    <img src={assets.logo} width={40} alt="" />
</span>
<h2 className="text-lg font-bold tracking-tight">Community Impact NGO</h2>
</div>
<p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">Building a better world through collective action and community support.</p>
<div className="mt-6 flex gap-4">
<a className="text-gray-400 hover:text-primary" href="#"><svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg></a>
<a className="text-gray-400 hover:text-primary" href="#"><svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
<a className="text-gray-400 hover:text-primary" href="#"><svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.322 14.053c-.3.2-.678.322-.978.322a2.38 2.38 0 01-2.38-2.38c0-.68.28-1.32.744-1.744A2.38 2.38 0 0112 10.25c.68 0 1.32.28 1.744.744.464.425.744 1.064.744 1.744 0 1.312-1.068 2.38-2.38 2.38zm-2.066-5.833a4.295 4.295 0 00-4.295 4.295c0 2.373 1.922 4.295 4.295 4.295s4.295-1.922 4.295-4.295c0-2.373-1.922-4.295-4.295-4.295zm6.536-2.99a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM12 9.75c-2.41 0-4.373 1.963-4.373 4.373s1.963 4.373 4.373 4.373 4.373-1.963 4.373-4.373S14.41 9.75 12 9.75z" fill-rule="evenodd"></path></svg></a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider">About</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Our Mission</a></li>
<li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Our Team</a></li>
<li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider">Get Involved</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Donate</a></li>
<li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Volunteer</a></li>
<li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Events</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
<ul className="mt-4 space-y-3">
<li><a class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Privacy Policy</a></li>
<li><a class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Terms of Service</a></li>
<li><a class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
<p className="text-sm text-gray-500 dark:text-gray-400">
        © {year} ICAD. All rights reserved.
</p>
</div>
</div>
</footer>
    </div>
  )
}

export default Footer
