import CoursesCTA from '@/components/CoursesCTA';
import Image from 'next/image';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Noorani Qaida Online for Kids & Beginners",
  description:
    "Start Quran reading with our online Noorani Qaida course. Perfect for kids and beginners to learn Arabic letters, pronunciation, and basic Tajweed.",
  keywords: [
    "learn noorani qaida online",
    "noorani qaida for kids",
    "basic arabic qaida",
    "qaida with tajweed",
  ],
};

export default function LearnNooraniQaidaPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl text-[#153c58] font-bold mb-4">
            Learn Noorani Qaida
          </h1>
          <p className="max-w-2xl mx-auto text-gray-900 text-sm md:text-base">
            Begin your Quran journey by learning Noorani Qaida with correct
            pronunciation, Arabic letters, and basic Tajweed — ideal for kids
            and beginners.
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
              Our <strong>Noorani Qaida</strong> course is specially designed for
              students who want to learn Quran reading from the basics. This
              course focuses on Arabic letters, correct pronunciation
              (Makharij), and foundational Tajweed rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With step-by-step lessons taught by qualified Quran teachers,
              students gain confidence to read the Quran fluently and
              accurately.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/norani.webp"
              alt="Learn Noorani Qaida Online"
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
              'Arabic Letters Recognition',
              'Correct Pronunciation (Makharij)',
              'Joining Letters',
              'Harakat (Zabar, Zer, Pesh)',
              'Tanween & Sukoon',
              'Basic Tajweed Rules',
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Simple, structured lessons to build a strong Quran reading
                  foundation.
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
                Kids
              </h3>
              <p className="text-gray-600 text-sm">
                Perfect for children starting their Quran learning journey.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Adults & Beginners
              </h3>
              <p className="text-gray-600 text-sm">
                Ideal for beginners who want to learn Quran reading from
                scratch.
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
