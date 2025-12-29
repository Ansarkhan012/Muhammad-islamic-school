import Link from "next/link"



export default function CTA() {
  return (
       <section className="relative mb-10 py-20 bg-green-900">
  {/* Pattern Overlay */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

  <div className="relative container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Join Our Learning Community
      </h2>

      <p className="text-xl mb-10 text-emerald-100 leading-relaxed">
        Whether you're a complete beginner or looking to perfect your recitation,
        we have the right course and teacher to guide you every step of the way.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <Link
          href="/contact"
          className="bg-white text-green-700 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-lg transition shadow-lg"
        >
          Start Free Trial
        </Link>

        <Link
          href="/contact"
          className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition"
        >
          More Info
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}
