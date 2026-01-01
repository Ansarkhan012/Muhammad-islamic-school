import Image from 'next/image';
import Link from 'next/link';

export default function QuranRecitingPage() {
  return (
    <main className="bg-white">
     
      <section className="bg-[#153c58] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Quran Reciting
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-sm md:text-base">
            Learn beautiful and confident Quran recitation with proper rhythm,
            fluency, and voice control under expert teachers.
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
              The <strong>Quran Reciting</strong> course focuses on improving
              fluency, rhythm, and confidence while reciting the Holy Quran.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Students are trained to recite with clarity, smooth flow, and
              correct pauses while maintaining Tajweed principles.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/courses/quran-reciting.jpg"
              alt="Quran Reciting Course"
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
              'Fluent Quran Recitation',
              'Voice Modulation & Rhythm',
              'Correct Pauses (Waqf)',
              'Confidence in Public Recitation',
              'Error Correction Techniques',
              'Beautifying the Recitation',
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Focused training for smooth and confident recitation.
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
                Students
              </h3>
              <p className="text-gray-600 text-sm">
                Improve fluency and confidence in Quran recitation.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Adults & Imams
              </h3>
              <p className="text-gray-600 text-sm">
                Perfect recitation for leading prayers and public reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#153c58] mb-10 py-14 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Improve Your Quran Recitation
          </h2>
          <p className="text-green-100 mb-6">
            Join today and recite the Holy Quran with confidence and beauty.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-100 transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </main>
  );
}
