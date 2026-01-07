'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  User,
  MessageSquare,
  Smartphone,
  Globe,
  Send,
  CheckCircle,
  X,
} from 'lucide-react';

type FormData = {
  name: string;
  mobile: string;
  email: string;
  country: string;
  message: string;
  website?: string; // honeypot
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    mobile: '',
    email: '',
    country: 'USA',
    message: '',
    website: '',
  });

  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check
    if (form.website) return;

    setLoading(true);
    setIsError(false);
  };


  

  return (
    <div className="min-h-screen bg-gray-50 pt-14">
      {/* Popup Code unchanged... */}

      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#C9A24D] font-bold mb-2">Contact</h1>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Muhammad Islamic School</h1>
        <p className='text-gray-600 mt-3 text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl mx-auto px-2'>
          We are proud of ourselves as the premier online platform for E-services worldwide. Our students appreciate our friendly, professional, and cooperative approach to providing Learn Quran Online services.
        </p>
      </div>

      {/* Main Contact Section */}
      <section className="max-w-6xl mb-10 mx-auto px-3 sm:px-4 md:px-5 grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {/* FORM */}
        <div 
          style={{
            backgroundImage: `url('/images/pattern.png')`
          }}
          className="bg-[#153c58] text-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-full overflow-hidden"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
            Quick Admission Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className='hidden'
            />

            <Input 
              icon={<User size={18} className="sm:w-5 sm:h-5" />} 
              name="name" 
              placeholder="Full Name" 
              value={form.name} 
              onChange={handleChange} 
            />
            <Input
              icon={<Smartphone size={18} className="sm:w-5 sm:h-5" />}
              name="mobile"
              placeholder="+923001234567"
              value={form.mobile}
              onChange={handleChange}
            />
            <Input 
              icon={<Mail size={18} className="sm:w-5 sm:h-5" />} 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              value={form.email} 
              onChange={handleChange} 
            />

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base rounded-lg md:rounded-xl bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
            >
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Pakistan</option>
              <option>UAE</option>
            </select>

            <textarea
              name="message"
              rows={3}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 text-sm sm:text-base rounded-lg md:rounded-xl bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
            />

            <button
              disabled={loading}
              className="w-full bg-black py-3 md:py-4 text-sm sm:text-base rounded-lg md:rounded-xl flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              {loading ? 'Sending...' : <>
                <Send size={18} className="sm:w-5 sm:h-5" /> Send Message
              </>}
            </button>
          </form>
        </div>

        {/* INFO */}
        <div 
          style={{
            backgroundImage: `url('/images/pattern.png')`
          }}
          className="bg-[#847645] text-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-full overflow-hidden"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
            More Ways to Reach Us
          </h2>

          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 mb-4 md:mb-6">
            <Image
              src="/images/contact.avif"
              alt="Quran Learning"
              fill
              className="rounded-xl md:rounded-2xl object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>

          <div className="space-y-3 md:space-y-4">
            <InfoItem
              icon={<Phone size={18} className="sm:w-5 sm:h-5" />}
              title="WhatsApp"
              text="+92 308 9250679"
              link="https://wa.me/923089250679"
            />
            <InfoItem
              icon={<Mail size={18} className="sm:w-5 sm:h-5" />}
              title="Email"
              text="nomankhanyusufzai123@gmail.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* Reusable Components */
function Input({ icon, className = '', ...props }: any) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        {icon}
      </span>
      <input
        {...props}
        required
        className={`w-full pl-10 p-3 text-sm sm:text-base rounded-lg md:rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D] ${className}`}
      />
    </div>
  );
}

function InfoItem({ icon, title, text, link }: any) {
  const Wrapper = link ? 'a' : 'div';
  return (
    <Wrapper
      href={link}
      target="_blank"
      className="flex gap-3 items-center bg-white/10 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-white/15 transition-colors"
    >
      <div className="w-8 h-8 md:w-10 md:h-10 bg-green-600 flex items-center justify-center rounded-full flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-sm md:text-base">{title}</p>
        <p className="text-xs md:text-sm truncate">{text}</p>
      </div>
    </Wrapper>
  );
}