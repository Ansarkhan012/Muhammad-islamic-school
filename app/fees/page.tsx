'use client';

import CourseSection from '@/components/CousreSection';
import CTA from '@/components/CTA';
import { Check } from 'lucide-react';

export default function PricingPage() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen pt-20 pb-20 px-4">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#153c58] mb-4">
          Pricing Plans
        </h1>
        <h2 className="text-2xl font-semibold mb-3">
          Muhammad Islamic School
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          We offer flexible and affordable Quran learning plans designed for
          students of all ages. Choose a plan that fits your schedule and
          learning goals with complete peace of mind.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Basic Plan */}
        <PlanCard
          title="Basic Plan"
          subtitle="For beginners"
          price="$35"
          features={[
            '3 Days / Week',
            '30 Minutes Class',
            'Noorani Qaida',
            'Male / Female Teacher',
          ]}
        />

        {/* Standard Plan */}
        <PlanCard
          title="Standard Plan"
          subtitle="Most chosen"
          price="$50"
          highlight
          features={[
            '5 Days / Week',
            '30 Minutes Class',
            'Quran Reading',
            'Tajweed Basics',
          ]}
        />

        {/* Premium Plan */}
        <PlanCard
          title="Premium Plan"
          subtitle="Advanced learning"
          price="$60"
          features={[
            '5 Days / Week',
            '30 Minutes Class',
            'Quran with Tajweed',
            'Memorization (Hifz)',
          ]}
        />

        {/* Weekend Plan */}
        <PlanCard
          title="Weekend Classes"
          subtitle="Personal Teacher"
          price="$80"
          features={[
            '1-on-1 Live Classes',
            'Flexible Timing',
            'Custom Learning Plan',
            'Weekly Progress Report',
          ]}
        />

      </div>

      {/* Extra Info */}
      <div className="max-w-4xl mx-auto mt-16 text-center text-gray-600 text-sm sm:text-base">
        <p>
          ✔ All classes are conducted online via Zoom or Google Meet  
          <br />
          ✔ Free trial class available before enrollment  
          <br />
          ✔ Monthly fee with no hidden charges  
          <br />
          ✔ Dedicated support team for parents and students
        </p>
      </div>
    </div>


<CourseSection />

<CTA />
    </>
  );
}

/* Reusable Card Component */
function PlanCard({
  title,
  subtitle,
  price,
  features,
  highlight = false,
}: any) {
  return (
    <>
    <div
      className={`rounded-3xl p-6 border shadow-sm bg-white flex flex-col
        ${highlight ? 'border-[#C9A24D] scale-105' : 'border-gray-200'}`}
    >
      {highlight && (
        <span className="self-center mb-3 text-xs font-semibold text-white bg-[#C9A24D] px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-[#153c58] text-center">
        {title}
      </h3>
      <p className="text-sm text-center text-gray-500 mb-6">
        {subtitle}
      </p>

      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-[#153c58]">{price}</span>
        <span className="text-gray-500"> /month</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((item: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-gray-700">
            <Check className="text-[#C9A24D]" size={18} />
            {item}
          </li>
        ))}
      </ul>

      <button className="mt-auto bg-[#153c58] hover:bg-[#102f46] text-white py-3 rounded-xl font-semibold transition">
        Enroll Now
      </button>
    </div>


    </>
  );
}
