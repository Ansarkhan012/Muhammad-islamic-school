// app/about/page.js
import { CheckCircle, Users, BookOpen, Globe, Award, Heart, BookIcon, UserCog, Proportions, PanelRight } from 'lucide-react';
import Link from 'next/link';
import CTA from './CTA';

export default function AboutPage() {
    const leadin =[
        {name:"Quality Based Training",iconss:<BookIcon />},
        {name:"Arab and Non Arab Teachers",iconss:<UserCog  />},
        {name:"Certificate of Appraisal",iconss:<Award/>},
        {name:"Monthly Student Report",iconss:<PanelRight />},
    ]
  return (
    <div className="min-h-screen">
     
      <section className="relative py-16 md:py-24 overflow-hidden ">
  <div className="container mx-auto px-4 relative">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      
      <div className="lg:w-1/2 md:pl-10 text-center lg:text-left">
  <h1 className="text-3xl md:text-5xl  font-bold text-gray-900 mb-6">
    About <span className="text-[#C9A24D]">Muhammad Islamic School</span>
  </h1>

  <p className=" md:text-md text-gray-700 mb-8 leading-relaxed">
    Muhammad Islamic School is a trusted online Islamic educational institution
    committed to spreading authentic Quranic knowledge across the world. 
    Since 2010, we have been providing high-quality Quran education through 
    certified and experienced teachers who focus on proper Tajweed, understanding,
    and spiritual growth.  
    <br /><br />
    Our mission is to make Quran learning accessible, engaging, and meaningful
    for students of all ages, while maintaining strong Islamic values, discipline,
    and compassion in every lesson we deliver.
  </p>
</div>

      
      
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
         
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-300 rounded-full opacity-20"></div>
          
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/structured.webp" 
              className="w-full h-auto object-cover"
              alt="Islamic School Structure"
              
            />
          </div>
          
          
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-emerald-100">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-[#C9A24D] mr-3" />
              <div>
                <div className="text-sm text-gray-600">Since</div>
                <div className="text-2xl font-bold text-[#C9A24D]">2019</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -left-6 bg-[#C9A24D] text-white p-3 rounded-full shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
        </div>
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

 
  <div className="relative max-w-6xl mx-auto px-5 text-white">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
      Leading Quran Online School
    </h1>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {leadin.map((lead, index) => (
        <div
          key={index}
          className="border p-6 rounded-xl text-center hover:bg-white/20 transition"
        >
          <div className="flex justify-center mb-4 text-[#C9A24D]">
            {lead.iconss}
          </div>
          <p className="font-semibold">{lead.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-5">
   
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
      What Makes Us <span className='text-[#C9A24D]'>Different</span> From Others
    </h2>

    
    <div className="grid md:grid-cols-3 gap-8">
      
      
      <div className="p-8 rounded-2xl border border-gray-200 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_60%)]">
        <h3 className="text-xl font-semibold text-[#153c58] mb-4">
          Monitoring System & Schedule
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Individuals of any age are eligible to enrol in this course, spanning
          from 5 to 70 years. The program is specifically tailored for children
          aged five and older.
        </p>
      </div>

      
      <div className="p-8 rounded-2xl border border-gray-200 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_60%)]">
        <h3 className="text-xl font-semibold text-[#153c58] mb-4">
          Student Monthly Test Report
        </h3>
        <p className="text-gray-700 leading-relaxed">
          All individuals, regardless of age, are eligible to apply for this
          course, spanning from 5 to 70 years. Specifically tailored for children
          aged five and older.
        </p>
      </div>

      
      <div className="p-8 rounded-2xl border border-gray-200 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_60%)]">
        <h3 className="text-xl font-semibold text-[#153c58] mb-4">
          Comparison of Results
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Regardless of your age, individuals aged 5–70 are eligible to enrol in
          this course. It is specifically tailored for children aged five and
          older.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="flex flex-col lg:flex-row min-h-[60vh]">
  
  
  <div className="flex-1 flex items-center justify-center bg-[#153c58] text-white p-10">
    <h1 className="text-3xl py-10 md:text-4xl font-bold text-center">
      Noorani Qaida Online
    </h1>
  </div>

  
  <div
    className="flex-1 flex flex-col justify-center p-10 text-white bg-center bg-cover relative"
    style={{
      backgroundImage:
        "url('/images/quran.webp')",
    }}
  >
    
    <div className="absolute inset-0 bg-black/60"></div>

    
    <div className="relative">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Plays a Key Role in Other Courses
      </h1>

      <p className="text-lg mb-6 max-w-md">
        The fundamentals of the Quran online are accessible to anyone, helping
        students build a strong foundation for advanced Islamic studies.
      </p>

      <Link
        href="/contact"
        className="inline-block bg-[#153c58] hover:bg-[#1d5075] transition px-6 py-3 rounded-lg font-semibold"
      >
        Contact
      </Link>
    </div>
  </div>

</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-5 space-y-20">

    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center mb-6">
          
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          To become the most trusted online Islamic educational platform globally,
          recognized for our commitment to authentic knowledge, qualified teachers,
          and transformative learning experiences. Our vision is to build a global
          community rooted in Quranic values, understanding, and practice.
        </p>
      </div>

      
      <div>
        <img
          src="/images/quran.webp"
          alt="Our Vision"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </div>

    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
      <div className="order-2 lg:order-1">
        <img
          src="/images/quran1.webp"
          alt="Our Mission"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      <div className="order-1 lg:order-2">
        <div className="flex items-center mb-6">
          
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          To make authentic Quranic education accessible to Muslims worldwide,
          regardless of their location or background. We aim to nurture learners
          with strong Islamic foundations, enabling them to recite and understand
          the Quran with proper Tajweed and confidence.
        </p>
      </div>
    </div>

  </div>
</section>





      {/* Our Story */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
      <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
    </div>

    <div className="max-w-4xl mx-auto">
      <p className="text-gray-700 text-lg leading-relaxed">
        Muhammad Islamic School was founded in 2019 by a group of dedicated Islamic scholars
        and educators who recognized the growing need for accessible and authentic Quranic
        education in the digital age. What began as a humble initiative with only three
        teachers and a small group of students has steadily evolved into a globally trusted
        online Islamic educational institution, now serving thousands of learners across
        more than 25 countries worldwide. Throughout this journey, our mission has remained
        unchanged: to make the blessed knowledge of the Quran available to every Muslim,
        regardless of location, background, or age. Today, we proudly stand as a community
        of over 50 qualified and certified teachers, offering a structured curriculum and
        proven teaching methodology designed to nurture proper Tajweed, understanding, and
        spiritual connection with the Quran. By combining traditional Islamic values with
        modern online learning tools, Muhammad Islamic School continues to guide students
        of all ages toward meaningful and lifelong engagement with the Quran.
      </p>
    </div>
  </div>
</section>


      
      

      {/* CTA Section */}
      <CTA/>
    </div>
  );
}