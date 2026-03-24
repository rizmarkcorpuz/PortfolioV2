import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Riz built an automation that completely eliminated our manual invoicing process. What used to take hours now happens instantly. Highly recommend him for any workflow automation project.",
    name: "Ryan Hupfer",
    role: "CEO and Founder",
    company: "Element Ops",
  },
  {
    quote: "Working with Riz was a great experience. He quickly understood our HubSpot setup and built a deal automation that saved our sales team hours of manual data entry every week.",
    name: "Steven Pope",
    role: "CEO and Founder",
    company: "My Amazon Guy",
  },
  {
    quote: "Riz designed our Airtable + Slack automation and it works flawlessly. He communicated clearly throughout the project and delivered exactly what we needed on time.",
    name: "Chris Kiefer",
    role: "CEO and Founder",
    company: "Boolean",
  },
];

const Testimonials = () => {
  return (
    <div name='testimonials' className='w-full bg-[#0d2137] text-gray-300 scroll-mt-20'>
      <div className='max-w-[1000px] mx-auto p-4 py-16'>
        <div className='pb-8'>
          <p className='text-4xl font-bold text-[#ccd6f6]'>Testimonials</p>
          <p className='py-4 text-gray-400'>What clients say about working with me.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className='bg-[#112240] rounded-lg p-6 flex flex-col gap-4 border border-[#ffd700]/10 hover:border-[#ffd700]/40 transition-colors duration-300 shadow-lg'
            >
              <FaQuoteLeft className='text-[#ffd700] text-2xl opacity-70' />
              <p className='text-gray-400 text-sm leading-relaxed italic flex-1'>"{t.quote}"</p>
              <div className='border-t border-gray-700/50 pt-4'>
                <p className='text-[#ccd6f6] font-semibold text-sm'>{t.name}</p>
                <p className='text-[#ffd700] text-xs'>{t.role} · {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
