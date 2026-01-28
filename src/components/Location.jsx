import React from 'react'
import IconMapper from './IconMapper'

const Location = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col">
                <h2 className='text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3'>
                    Our Office
                </h2>
                <div className="flex flex-col gap-2 p-4">
                    {/* <!-- ListItem: Phone --> */}
                    <div className="flex items-center gap-4 min-h-14">
                        <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10">
                            <span className="material-symbols-outlined" data-icon="Phone"><IconMapper iconName="call" /></span>
                        </div>
                        <p className="text-[#111418] dark:text-gray-200 text-base font-normal leading-normal flex-1">+234 123 456 7890</p>
                    </div>
                    {/* <!-- ListItem: Email --> */}
                    <div className="flex items-center gap-4 min-h-14">
                        <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10">
                            <span className="material-symbols-outlined" data-icon="Envelope"><IconMapper iconName="mail" /></span>
                        </div>
                        <p className="text-[#111418] dark:text-gray-200 text-base font-normal leading-normal flex-1">info@icadnig.org.ng</p>
                    </div>
                    {/* <!-- ListItem: Address --> */}
                    <div className="flex items-start gap-4 py-2 min-h-14">
                        <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 shrink-0 size-10 mt-1">
                            <span className="material-symbols-outlined" data-icon="Location"><IconMapper iconName="location_on" /></span>
                        </div>
                        <p className="text-[#111418] dark:text-gray-200 text-base font-normal leading-normal flex-1">26, Kufuang Miango Junction, Jos, Plateau State, Nigeria</p>
                    </div>
                </div>
            </div>
            {/* <!-- Map --> */}
            <div className="mt-6 h-64 w-full overflow-hidden rounded-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8496540363158!2d8.863066173987608!3d9.862978275379566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105374909c4bf3d3%3A0xc13f283328b5de95!2s26%20Miango%20Rd%2C%20Jos%20930104%2C%20Plateau!5e0!3m2!1sen!2sng!4v1769280370042!5m2!1sen!2sng" style={{border:0}} width="600" height="350"></iframe>
            </div>
            
            {/* <!-- Social Media Links --> */}
            <div className="flex flex-col">
                <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Follow Our Journey</h2>
                <div className="flex items-center gap-4 p-4">
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                        </svg>
                    </a>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.79 2.013 10.145 2 12.315 2zm-1.04 1.25h2.08c2.653 0 2.912.01 3.938.057.968.046 1.505.207 1.857.344.467.182.86.399 1.253.792.393.393.61.786.792 1.253.137.352.3.89.344 1.857.046 1.026.057 1.285.057 3.938s-.011 2.912-.057 3.938c-.046.968-.207 1.505-.344 1.857a3.097 3.097 0 01-.792 1.253 3.097 3.097 0 01-1.253.792c-.352.137-.89.3-1.857.344-1.026.046-1.285.057-3.938.057s-2.912-.011-3.938-.057c-.968-.046-1.505-.207-1.857-.344a3.097 3.097 0 01-1.253-.792 3.097 3.097 0 01-.792-1.253c-.137-.352-.3-.89-.344-1.857-.046-1.026-.057-1.285-.057-3.938s.011-2.912.057-3.938c.046-.968.207-1.505.344-1.857.182-.466.399-.86.792-1.253.393-.393.786-.61 1.253-.792.352-.137.89-.3 1.857-.344C9.282 3.26 9.541 3.25 11.275 3.25zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14a2 2 0 110-4 2 2 0 010 4zm4.75-7.5a1 1 0 100-2 1 1 0 000 2z" fillRule="evenodd"></path>
                        </svg>
                    </a>
                    <a className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Location