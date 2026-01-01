import Image from 'next/image';
import Link from 'next/link';

export default function QuranMemorizationPage() {
  return (
    <main className="bg-white">
      
      <section className="bg-[#153c58] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Quran Memorization
          </h1>
          <p className="max-w-2xl mx-auto text-green-100 text-sm md:text-base">
            Memorize the Holy Quran with correct pronunciation, revision plans,
            and guidance from qualified Huffaz.
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
              The <strong>Quran Memorization</strong> course is designed for
              students who wish to memorize the Holy Quran with strong retention
              and accuracy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Students are guided with daily lessons, structured revision, and
              regular assessment to ensure long-term memorization.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/courses/quran-memorization.jpg"
              alt="Quran Memorization Course"
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
              'Daily Quran Memorization Plan',
              'Strong Revision Techniques',
              'Correct Makharij & Tajweed',
              'Surah-by-Surah Memorization',
              'Error Correction & Fluency',
              'Long-Term Retention Methods',
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item}
                </h3>
                <p className="text-sm text-gray-600">
                  Taught with patience, accuracy, and continuous revision.
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
                Children & Students
              </h3>
              <p className="text-gray-600 text-sm">
                Ideal for students aiming to become Hafiz-e-Quran.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Adults
              </h3>
              <p className="text-gray-600 text-sm">
                Memorize Quran at your own pace with proper support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#153c58] mb-10 py-14 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Begin Your Quran Memorization Journey
          </h2>
          <p className="text-green-100 mb-6">
            Join now and memorize the Holy Quran with expert guidance.
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
