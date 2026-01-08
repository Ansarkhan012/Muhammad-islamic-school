import CoursesCTA from '@/components/CoursesCTA';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Learn Islamic Studies Online | Muhammad Islamic School",
  description: "Enroll in our online Islamic Studies course to learn about Quran, Hadith, Fiqh, and Islamic history. Suitable for kids and adults seeking comprehensive Islamic education.",
  keywords: [
    "learn islamic studies online",
    "online islamic education",
    "quran hadith fiqh",
  ],
};

export default function LearnIslamicStudiesPage() {
  return (
    <main className="bg-white">
      
      <section className="  py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl text-[#153c58] font-bold mb-4">
            Learn Islamic Studies
          </h1>
          <p className="max-w-2xl mx-auto text-gray-900 text-sm md:text-base">
            Build strong Islamic knowledge with structured lessons covering
            beliefs, worship, manners, and Islamic history — suitable for all
            age groups.
          </p>
        </div>
      </section>

      {/* ABOUT COURSE */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              About This Course
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our <strong>Learn Islamic Studies</strong> course is designed to
              help students understand Islam in a clear, authentic, and
              practical way. The curriculum is based on the Quran and Sunnah,
              taught by qualified Islamic teachers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This course focuses on building correct beliefs (Aqeedah),
              improving character (Akhlaq), and learning how to practice Islam
              in daily life.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/courses/learn-islamic-studies.jpg"
              alt="Learn Islamic Studies"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What You Will Learn
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Basic Aqeedah (Islamic Beliefs)',
              'Five Pillars of Islam',
              'Islamic Manners & Character',
              'Seerah of Prophet Muhammad ﷺ',
              'Islamic History',
              'Daily Islamic Practices',
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Structured lessons taught in an easy and engaging way.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Who Is This Course For?
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Children
              </h3>
              <p className="text-gray-600 text-sm">
                Build strong Islamic foundations from an early age.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Adults & Beginners
              </h3>
              <p className="text-gray-600 text-sm">
                Learn Islam step-by-step in a simple and practical way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CoursesCTA />
      
    </main>
  );
}
