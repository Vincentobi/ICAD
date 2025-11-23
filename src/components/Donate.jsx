import { React, useState } from 'react'

const Donate = () => {

    const [selectedAmount, setSelectedAmount] = useState(25);

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Ways to Get Involved</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">We believe in the power of collective action. Here’s how you can join us and make a tangible impact.</p>
            </div>
            {/* <!-- Three-Column Card Layout --> */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* <!-- Donate Card --> */}
                <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm overflow-hidden">
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">
                                volunteer_activism
                            </span>               
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Make a Donation</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Your financial contribution directly funds our key programs, providing essential resources to those in need.</p>
                    </div>
                    <div className="bg-background-light dark:bg-background-dark p-6 grow flex flex-col space-y-4">
                        <div className="flex h-10 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800 p-1">
                            <label className="flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-medium text-slate-600 dark:text-slate-400 has-checked:bg-white dark:has-checked:bg-slate-900 has-checked:text-slate-900 dark:has-checked:text-white has-checked:shadow-sm">
                                <span className="truncate">One-time</span>
                                <input defaultChecked className="sr-only" name="donation_frequency" type="radio" value="One-time" />
                            </label>
                            <label className="flex h-full flex-1 cursor-pointer items-center justify-center rounded-lg px-2 text-sm font-medium text-slate-600 dark:text-slate-400 has-checked:bg-white dark:has-checked:bg-slate-900 has-checked:text-slate-900 dark:has-checked:text-white has-checked:shadow-sm">
                                <span className="truncate">Monthly</span>
                                <input className="sr-only" name="donation_frequency" type="radio" value="Monthly" />
                            </label>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <button
                                onClick={() => setSelectedAmount(25)}
                                className={`h-10 rounded-lg border font-semibold transition-colors ${selectedAmount === 25
                                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                                        : "border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                                    }`}
                            >
                                $25
                            </button>
                            <button
                                onClick={() => setSelectedAmount(50)}
                                className={`h-10 rounded-lg border font-semibold transition-colors ${selectedAmount === 50
                                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                                        : "border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                                    }`}
                            >
                                $50
                            </button>
                            <button
                                onClick={() => setSelectedAmount(100)}
                                className={`h-10 rounded-lg border font-semibold transition-colors ${selectedAmount === 100
                                        ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm"
                                        : "border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                                    }`}
                            >
                                $100
                            </button>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="custom-amount">Custom Amount</label>
                            <div className="relative">
                                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">$</span>
                                <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 pl-7 pr-4 py-2 focus:border-primary focus:ring-primary" id="custom-amount" name="custom-amount" placeholder="Custom Amount" type="number" />
                            </div>
                        </div>
                        <button className="flex w-full items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-base cursor-pointer font-bold hover:bg-primary/90 transition-colors">
                            <span>Donate Now</span>
                        </button>
                    </div>
                </div>
                {/* Volunteer Card */}
                <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm overflow-hidden">
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">diversity_3</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Lend Your Time</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Our volunteers are the backbone of our work. Join our dedicated team and contribute your skills to a cause you care about.</p>
                    </div>
                    <div className="bg-background-light dark:bg-background-dark p-6 grow flex flex-col space-y-4">
                        <div>
                            <label className="sr-only" htmlFor="volunteer-name">Full Name</label>
                            <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 focus:border-primary focus:ring-primary" id="volunteer-name" name="volunteer-name" placeholder="Full Name" type="text" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="volunteer-email">Email Address</label>
                            <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 focus:border-primary focus:ring-primary" id="volunteer-email" name="volunteer-email" placeholder="Email Address" type="email" />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="interest">Area of Interest</label>
                            <select className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 focus:border-primary focus:ring-primary text-slate-500" id="interest" name="interest">
                                <option>Select area of interest</option>
                                <option>Event Support</option>
                                <option>Mentoring</option>
                                <option>Admin &amp; Office Work</option>
                                <option>Community Outreach</option>
                            </select>
                        </div>
                        <button className="flex w-full mt-auto items-center justify-center rounded-lg h-11 px-5 bg-primary text-white cursor-pointer text-base font-bold hover:bg-primary/90 transition-colors">
                            <span>Sign Up to Volunteer</span>
                        </button>
                    </div>
                </div>
                {/* Partner Card */}
                <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm overflow-hidden">
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">handshake</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Become a Partner</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400">Corporate partnerships provide vital support and demonstrate your company's commitment to social responsibility.</p>
                    </div>
                    <div className="bg-background-light dark:bg-background-dark p-6 grow flex flex-col space-y-4">
                        <p className="text-slate-600 dark:text-slate-400">Collaborate with us to create a lasting impact. We offer various partnership levels and benefits, from event sponsorships to program underwriting. Let's build a better community together.</p>
                        <div className="pt-2">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Contact our partnership team:</p>
                            <a className="font-semibold text-primary hover:underline" href="mailto:icadnig@gmail.com">icadnig@gmail.com</a>
                        </div>
                        <button className="flex mt-auto w-full items-center justify-center rounded-lg h-11 px-5 bg-primary text-white cursor-pointer text-base font-bold hover:bg-primary/90 transition-colors">
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Donate