import React from "react";

const courses = [
  {
    title: "Learn Basic Noorani Qaida Online",
    image: "/images/norani.webp",
  },
  {
    title: "Learn to Recite Quran Online",
    image: "/images/courses/quran.avif",
  },
  {
    title: "Quran Memorization Online",
    image: "/images/courses/quran-memorization.jpg",
  },
  {
    title: "Quran Reading with Tajweed",
    image: "/images/courses/Reciting.avif",
  },
  {
    title: "Quran with Tafseer Online",
    image: "/images/courses/Tafseer.avif",
  },
  {
    title: "Islamic Studies for Kids & Adults",
    image: "/images/courses/learn-islamic-studies.jpg",
  },
];

function CourseSection() {
  return (
    <section className="py-20 bg-[#f7f3e8]">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  leading-snug">
             <span className="text-[#b08a00]">Muhammad Islamic School</span> Offers Many <br />
            Courses to Learn the Quran Online
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {courses.map((course, index) => (
            <div
              key={index}
              style={{
                backgroundImage: "url('images/pattern.png')"
              }}
              className="bg-[#b08a00] rounded-3xl p-6  w-full max-w-sm shadow-lg text-center text-white"
            >
              <div className="bg-white rounded-2xl overflow-hidden mb-28">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-6">
                {course.title}
              </h3>

              <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#b08a00] transition">
                Read More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CourseSection;
