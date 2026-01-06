export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: "url('/images/pattern.png')" }}
      className="bg-[#153c58] text-white"
    >
      <div className="container mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 – Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/images/noman-logo.jpeg"
                className="w-12 h-12 rounded-lg"
                alt="Logo"
              />
              <div>
                <h1 className="text-xl font-bold">Muhammad</h1>
                <p className="text-sm text-gray-300">Islamic School</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Providing high-quality online Quran education worldwide with
              certified teachers and one-on-one classes.
            </p>

            <div className="flex space-x-3">
              {["Facebook", "Twitter", "YouTube"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-[#C9A24D] p-3 rounded-lg hover:bg-[#9f7e37] transition"
                >
                  <span className="sr-only">{item}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/courses" className="hover:text-white">Courses</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Free Trial</a></li>
            </ul>
          </div>

          {/* Column 3 – Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Our Courses</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Noorani Qaida</li>
              <li>Quran Recitation</li>
              <li>Quran with Tajweed</li>
              <li>Quran Memorization</li>
              <li>Islamic Studies</li>
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li>📧 nomankhanyusufzai123@gmail.com</li>
              <li>📞 +92 308 9250679</li>
              <li>📍 Worldwide Online Classes</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Muhammad Islamic School. All rights reserved.
      </div>
    </footer>
  );
}
