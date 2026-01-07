import CousreSection from '@/components/CousreSection'
import CTA from '@/components/CTA'
import Free from '@/components/Free'
import Hero from '@/components/Hero'
import Step from '@/components/Step'
import WhyChoose from '@/components/Why'
import Link from 'next/link'

import React from 'react'

export default function page() {
  return (
    <>
    <Hero />
    <Step />
    <Free />
    <WhyChoose />

    <section className="flex flex-col lg:flex-row mb-10 min-h-[60vh]">
  
  
  <div className="flex-1 flex items-center bg-[#153c58] text-white p-10">
    <div className="max-w-lg text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        In This Modern Age of Latest Technologies!
      </h1>
      <p className="text-lg leading-relaxed">
        The fundamentals of the Quran online are accessible to anyone, helping
        students build a strong foundation for advanced Islamic studies.
      </p>
    </div>
  </div>

 
  <div
    className="flex-1 flex items-center bg-center bg-cover relative p-10"
    style={{ backgroundImage: "url('/images/quran.webp')" }}
  >
    
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative max-w-lg">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-6">
        You will find it better than you think.
        <br />
        Book your 3-days free trial classes now
      </h1>

      <Link
        href="/contact"
        className="inline-block bg-[#C9A24D] hover:bg-[#1d5075] text-white transition px-6 py-3 rounded-lg font-semibold"
      >
        Contact
      </Link>
    </div>
  </div>

</section>


<section className="py-20 bg-white">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#b08a00] mb-4">
        Who We Are?
      </h2>
      <div className="w-24 h-1 bg-[#b08a00] mx-auto"></div>
    </div>

    {/* First Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <p className="text-gray-700 leading-relaxed text-lg">
          At Muhammad Islamic School, we understand the challenges
          faced by many Muslim families living in non-Muslim countries where
          finding qualified Quran teachers is difficult. Our academy was
          established with a sincere mission to provide beautifully and
          correctly guided Quran education to students around the world.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          Our teachers are certified, highly experienced, and skilled in
          Tajweed, Hifz, Tafseer, and Arabic grammar. We aim not only to teach
          Quran reading, but to nurture the love of Allah within the hearts of
          our students.
        </p>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/quran-reading.avif"
          alt="Quran Reading"
          className="rounded-2xl shadow-lg max-w-md w-full"
        />
      </div>
    </div>

    {/* Second Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center lg:order-1">
        <img
          src="/images/quran-child.avif"
          alt="Child Reading Quran"
          className="rounded-2xl shadow-lg max-w-md w-full"
        />
      </div>

      <div className="lg:order-2">
        <p className="text-gray-700 leading-relaxed text-lg">
          We acknowledge the necessity of online Quran education platforms,
          especially for Muslim parents who want strong Islamic teachings for
          their children. Our one-on-one online classes ensure personal
          attention, care, and consistent progress tracking.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg mt-6">
          Today, Muhammad Islamic School proudly serves families
          across the UK, USA, Canada, Australia, UAE, and many other countries,
          making Quranic education accessible, authentic, and spiritually
          uplifting for every Muslim home.
        </p>
      </div>
    </div>

  </div>
</section>

<section
  className="relative bg-fixed bg-center bg-cover py-20"
  style={{
    backgroundImage:
      "url('/images/1sts.avif')",
  }}
>
  
  <div className="absolute inset-0 bg-black/60"></div>

 
  <div className="relative max-w-6xl mx-auto px-5 py-16 text-white">
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
    Experience Before Your Email
  </h1>

  <div className="max-w-md mx-auto bg-[#1e3a5f] rounded-xl shadow-lg p-8 text-center space-y-4">
    <h2 className="text-2xl font-semibold">Free Trial</h2>
    <p className="text-gray-300">30 Minutes Class</p>
    <p className="text-gray-300">One to One Class</p>
    <Link
      href="/contact"
      className="inline-block mt-4 bg-[#C9A24D] hover:bg-[#e7bb5c] transition-colors text-white font-semibold px-6 py-3 rounded-lg shadow-md"
    >
      Get Admission Now
    </Link>
  </div>
</div>

</section>



<CousreSection />


<CTA />




    </>
  )
}
