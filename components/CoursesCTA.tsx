import Link from 'next/link'
import React from 'react'

function CoursesCTA() {
  return (
    <section className="bg-[#153c58] mb-10 py-14 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Learning Islamic Studies Today
          </h2>
          <p className="text-[#fff1d2] mb-6">
            Enroll now and strengthen your Islamic knowledge with qualified
            teachers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#C9A24D] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A24D] hover:text-white transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>
  )
}

export default CoursesCTA