import CoursesCTA from '@/components/CoursesCTA';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Quran with Tafseer Online | Understand Quranic Teachings",
  description: "Explore the meanings and explanations of the Quran with our online Tafseer course. Perfect for kids and adults to understand Islamic teachings deeply.",
  keywords: ["quran tafseer online", "learn quran meaning", "understand islamic teachings"],
};


export default function QuranWithTafseerPage() {
  return (
    <main className="bg-white">
      
      <section className=" py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl text-[#153c58] font-bold mb-4">
            Quran with Tafseer
          </h1>
          <p className="max-w-2xl mx-auto text-gray-900 text-sm md:text-base">
            Understand the Holy Quran with authentic Tafseer, historical context,
            and practical lessons for daily life.
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
              The <strong>Quran with Tafseer</strong> course helps students
              understand the message of the Quran beyond recitation by studying
              meanings, explanations, and lessons.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Tafseer is taught using authentic classical sources, explained in a
              simple and relatable way for modern life.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/courses/Tafseer.avif"
              alt="Quran with Tafseer Course"
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
              'Meaning of Quranic Verses',
              'Historical Background (Asbab-un-Nuzool)',
              'Lessons for Daily Life',
              'Basic Arabic Word Meanings',
              'Moral & Spiritual Guidance',
              'Understanding Commands of Allah',
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Explained clearly using authentic Islamic sources.
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
                Students & Adults
              </h3>
              <p className="text-gray-600 text-sm">
                Those who want to understand the Quran deeply and practically.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Islamic Learners
              </h3>
              <p className="text-gray-600 text-sm">
                Ideal for seekers of knowledge and Islamic understanding.
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
