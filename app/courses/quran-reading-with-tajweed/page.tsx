import CoursesCTA from '@/components/CoursesCTA';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from "next";

export default function QuranReadingWithTajweedPage() {
  return (
    <main className="bg-white">
      
      <section className=" py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl text-[#153c58] font-bold mb-4">
            Quran Reading with Tajweed
          </h1>
          <p className="max-w-2xl mx-auto text-gray-900 text-sm md:text-base">
            Learn to read the Holy Quran fluently with correct pronunciation,
            Makharij, and Tajweed rules under expert guidance.
          </p>
        </div>
      </section>

      
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              About This Course
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The <strong>Quran Reading with Tajweed</strong> course is designed
              for students who want to read the Quran correctly as it was
              revealed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This course focuses on proper letter pronunciation, rules of
              Tajweed, and smooth recitation to improve confidence and fluency.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/courses/quran.avif"
              alt="Quran Reading with Tajweed"
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
              'Arabic Letters & Makharij',
              'Basic & Advanced Tajweed Rules',
              'Fluent Quran Reading',
              'Stopping (Waqf) & Starting Rules',
              'Common Recitation Mistakes',
              'Confidence in Quran Recitation',
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Practical training with individual correction.
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
                Beginners
              </h3>
              <p className="text-gray-600 text-sm">
                Those who are starting Quran reading from basics.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Students & Adults
              </h3>
              <p className="text-gray-600 text-sm">
                Improve Tajweed and correct reading mistakes.
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
