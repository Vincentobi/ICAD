import React from 'react'
import Journey from './Journey'
import assets from '../assets/assets'

const History = () => {

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-background-dark/50">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-text-light dark:text-text-dark text-3xl font-bold leading-tight tracking-[-0.015em] text-center">A Journey of Impact</h2>
<div className="mt-12 max-w-2xl mx-auto">
<div className="relative flex flex-col gap-8">
<div className="timeline-item relative pl-10 pb-4 ">
<div className="timeline-dot"></div>
<Journey bgImage={assets.project1} title="2003 - The Beginning" subtitle="Community Impact NGO was founded with a mission to address educational disparities in our local community." />
</div>
<div className="timeline-item relative pl-10 pb-4">
<div className="timeline-dot"></div>
<Journey bgImage={assets.project2} title="2013 - PAN African Mobile Network Traning" subtitle="ICAD Partcicpated in the PAN African mobile network training in Nairobi in patnership with Tactical Technology collective Netherlands." />
</div>
<div className="timeline-item relative pl-10 pb-4">
<div className="timeline-dot"></div>
<Journey bgImage={assets.project3} title="2014 - Quality Health Programs" subtitle="Continuation of providing quality health care and training programs at grassroots - The hepatitis prevention and control in Gembu, Taraba state." />
</div>
<div className="timeline-item relative pl-10 pb-4">
<div className="timeline-dot"></div>
<Journey bgImage={assets.project4} title="2015 - ACTION2015.org & CIVICUS" subtitle="ICAD mobilized the youth and in-school community to raise awareness and the funding future development(FfD) at the backdrop the UN big moment - signing of the Sustainable Development Goal (SDG) by world leaders at the UN headquaterin NewYork" />
</div>
<div className="timeline-item relative pl-10 pb-4">
<div className="timeline-dot"></div>
<Journey bgImage={assets.project5} title="2019 - Training on Gender Mainstreaming" subtitle="30 selected women were trained on gender Mainstreaming, information documentaion and storage in line with the AYNI-FIMI supported project on promoting gender equality among the women of Ajorgu." />
</div>
<div className="timeline-item relative pl-10 pb-4">
<div className="timeline-dot"></div>
{/* <p className="font-bold text-primary">2022 - Expansion Milestone</p>
<p className="text-sm">Expanded our operations to three new regions, reaching over 10,000 individuals annually.</p> */}
<Journey bgImage={assets.project6} title="2021 - Plant for the Planet" subtitle="We organized the first ever plant for the planet program (P4P) in Jos, with over 10 schools participating." />
</div>
</div>
</div>
</div>
</section>
  )
}

export default History
