import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTAbanner = () => {
    const navigate = useNavigate();
  return (
    <section class="w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="relative isolate overflow-hidden rounded-xl bg-primary px-6 py-24 text-center shadow-2xl sm:px-16">
<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Make a Difference Today</h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">Your contribution, big or small, helps us build stronger communities. Join our cause and be part of the change.</p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<button onClick={() => navigate('/GetInvolved')} className="rounded-lg bg-white px-5 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors">Donate Now</button>
<a className="text-base font-semibold leading-6 text-white" href="/GetInvolved">Learn more <span aria-hidden="true">→</span></a>
</div>
<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-64rem w-64rem -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#gradient)" fill-opacity="0.7" r="512"></circle>
<defs>
<radialgradient id="gradient">
<stop stop-color="#7775D6"></stop>
<stop offset="1" stop-color="#137fec"></stop>
</radialgradient>
</defs>
</svg>
</div>
</div>
</section>
  )
}

export default CTAbanner
