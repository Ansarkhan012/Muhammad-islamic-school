'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'COURSES', href: '/courses' },
    { name: 'FEES', href: '/fees' },
    { name: 'CONTACT', href: '/contact' },

  ];

  const coursesDropdown = [
    { name: 'Learn Islamic Studies', href: '/courses/learn-islamic-studies' },
    { name: 'Namaz & Dua', href: '/courses/namaz-dua' },
    { name: 'Learn Qaida', href: '/courses/learn-qaida' },
    { name: 'Quran Memorization', href: '/courses/quran-memorization' },
    { name: 'Quran Reading with Tajweed', href: '/courses/quran-reading-with-tajweed' },
    { name: 'Quran Reciting', href: '/courses/quran-reciting' },
    { name: 'Quran with Tafseer', href: '/courses/quran-with-tafseer' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg bg-white">
      {/* TOP BAR */}
      <div
        className="bg-[#153c58] text-white py-3"
        style={{
          backgroundImage: "url('/images/pattern.png')",
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-[#C9A24D]" />
            <a
              href="mailto:muhammadislamicschool12@gmail.com"
              className="text-[10px] md:text-sm hover:text-green-200"
            >
              muhammadislamicschool12@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-[#C9A24D]" />
            <span className="text-[10px] md:text-sm font-medium">
              +92 308 9250679
            </span>
          </div>
        </div>
      </div>

     
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">

  {/* LEFT – LOGO */}
  <Link href="/" className="flex items-center space-x-3">
    <Image
      src="/images/N-logo.png"
      alt="Muhammad Islamic School"
      width={50}
      height={50}
      priority
    />
    <div>
      <h1 className="text-md md:text-2xl font-bold bg-[#153c58] bg-clip-text text-transparent">
        Muhammad
      </h1>
      <p className="text-xs text-gray-600 font-medium">
        Islamic School
      </p>
    </div>
  </Link>

  {/* CENTER – NAV LINKS */}
  <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
    {navItems.map((item) =>
      item.name === 'COURSES' ? (
        <div key={item.name} className="relative group">
          <span className="px-5 py-2.5 flex items-center gap-1 rounded-lg font-medium text-sm text-gray-800 hover:text-[#C9A24D] cursor-pointer">
            COURSES
            <ChevronDown size={16} />
          </span>

          <div className="absolute left-12 top-full  w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
            <div className="bg-white border border-amber-300 ">
              {coursesDropdown.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="block px-4 py-3  text-sm text-gray-700 hover:bg-[#153c58] hover:text-[#fff1d4]"
                >
                  {course.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Link
          key={item.name}
          href={item.href}
          className="px-5 py-2.5 rounded-lg font-medium text-sm text-gray-800 hover:text-[#C9A24D]"
        >
          {item.name}
        </Link>
      )
    )}
  </nav>

 
  <div className="hidden lg:block">
    <Link
      href="/contact"
      className="bg-[#153c58] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
    >
      FREE TRIAL
    </Link>
  </div>

  {/* MOBILE MENU BUTTON */}
  <button
    className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>

</div>


        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg p-4 space-y-2">
            {navItems.map((item) =>
              item.name === 'COURSES' ? (
                <div key={item.name}>
                  <button
                    onClick={() => setOpenCourses(!openCourses)}
                    className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-[#fffbf2]"
                  >
                    COURSES
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openCourses ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openCourses && (
                    <div className="mt-1 ml-4 space-y-1">
                      {coursesDropdown.map((course) => (
                        <Link
                          key={course.name}
                          href={course.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenCourses(false);
                          }}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-[#fffbf2] hover:text-[#C9A24D]"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium
                    'text-gray-800 hover:bg-green-50 hover:text-[#C9A24D]'
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </header>
  );
}
