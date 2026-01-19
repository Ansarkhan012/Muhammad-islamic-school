'use client';

import React, { useState, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Phone,
  Mail,
  User,
  Smartphone,
  MapPin,
  BookOpen,
  Send,
  CheckCircle,
  X,
  AlertCircle,
} from 'lucide-react';

// --- Types & Interfaces ---
type FormData = {
  name: string;
  mobile: string;
  email: string;
  country: string;
  city: string;
  course: string;
  message: string;
  website?: string; // Honeypot
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  link?: string;
}


export default function Contacte() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      country: 'USA',
      city: '',
      course: 'Basic Qaida',
      message: '',
      website: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // Spam protection

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Submission failed');
      }

      setIsError(false);
      setPopupMessage(`JazakAllah ${data.name}! Your request has been received.`);
      setShowPopup(true);
      reset();
    } catch (err: any) {
      setIsError(true);
      setPopupMessage(err.message || 'Something went wrong. Please try WhatsApp.');
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-14 pb-10">
     
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-8 relative shadow-2xl animate-in zoom-in duration-300">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              {isError ? (
                <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              ) : (
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {isError ? 'Oops!' : 'Thank You'}
              </h3>
              <p className="text-gray-600 leading-relaxed">{popupMessage}</p>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl text-[#C9A24D] font-bold mb-2">
          Contact Us
        </h1>
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
          Muhammad Islamic School
        </h2>
        <div className="w-20 h-1 bg-[#C9A24D] mx-auto mt-4 rounded-full" />
        <p className="text-gray-600 mt-5 max-w-2xl mx-auto italic">
          "The best among you are those who learn the Quran and teach it."
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        
        
        <div
          style={{ backgroundImage: `url('/images/pattern.png')` }}
          className="bg-[#153c58] text-white rounded-[2rem] p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Admission</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            <input type="text" className="hidden" {...register('website')} />

            <div>
              <Input
                icon={<User size={18} />}
                placeholder="Full Name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <Input
                  icon={<Smartphone size={18} />}
                  placeholder="+92 300 1234567"
                  {...register('mobile', {
                    required: 'Mobile number required',
                    pattern: {
                      value: /^\+?[1-9]\d{1,14}$/,
                      message: 'Invalid international format',
                    },
                  })}
                />
                {errors.mobile && <ErrorMsg>{errors.mobile.message}</ErrorMsg>}
              </div>
              <div>
                <Input
                  icon={<Mail size={18} />}
                  type="email"
                  placeholder="Email Address"
                  {...register('email', {
                    required: 'Email required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <select
                {...register('country')}
                className="w-full p-3.5 rounded-xl bg-white text-black border-2 border-transparent focus:border-[#C9A24D] outline-none transition-all"
              >
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Pakistan</option>
                <option>UAE</option>
                <option>Australia</option>
              </select>

              <div>
                <Input
                  icon={<MapPin size={18} />}
                  placeholder="City"
                  {...register('city', { required: 'City required' })}
                />
                {errors.city && <ErrorMsg>{errors.city.message}</ErrorMsg>}
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                <BookOpen size={18} />
              </span>
              <select
                {...register('course')}
                className="w-full pl-10 p-3.5 rounded-xl bg-white text-black border-2 border-transparent focus:border-[#C9A24D] outline-none transition-all appearance-none"
              >
                <option>Basic Qaida</option>
                <option>Quran with Tajweed</option>
                <option>Hifz-ul-Quran</option>
                <option>Islamic Studies</option>
              </select>
            </div>

            <textarea
              rows={3}
              placeholder="Any specific requirements or questions?"
              {...register('message')}
              className="w-full p-4 rounded-xl bg-white text-black border-2 border-transparent focus:border-[#C9A24D] outline-none transition-all resize-none"
            />

            <button
              disabled={isSubmitting}
              className="w-full bg-[#C9A24D] hover:bg-[#b08d43] disabled:bg-gray-400 py-4 rounded-xl flex justify-center items-center gap-2 font-bold text-lg shadow-lg active:scale-[0.98] transition-all"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  <Send size={20} /> Submit Admission
                </>
              )}
            </button>
          </form>
        </div>

        {/* INFO CONTAINER */}
        <div
          style={{ backgroundImage: `url('/images/pattern.png')` }}
          className="bg-[#847645] text-white rounded-[2rem] p-8 shadow-xl flex flex-col"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

          <div className="relative w-full h-72 mb-8 group overflow-hidden rounded-2xl">
            <Image
              src="/images/contact.avif"
              alt="Quran Learning"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>

          <div className="space-y-4">
            <InfoItem
              icon={<Phone size={20} />}
              title="WhatsApp / Call"
              text="+92 308 9250679"
              link="https://wa.me/923089250679"
            />
            <InfoItem
              icon={<Mail size={20} />}
              title="Official Email"
              text="muhammadislamicschool12@gmail.com"
              link="mailto:muhammadislamicschool12@gmail.com"
            />
          </div>
          
          <p className="mt-auto text-center text-sm opacity-80 pt-6">
            Available 24/7 for international students.
          </p>
        </div>
      </section>
    </div>
  );
}

// --- Reusable Sub-Components ---

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className = '', ...props }, ref) => (
    <div className="relative group">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#C9A24D] transition-colors">
        {icon}
      </span>
      <input
        ref={ref}
        {...props}
        className={`w-full pl-10 p-3.5 rounded-xl text-black bg-white border-2 border-transparent focus:border-[#C9A24D] outline-none transition-all shadow-sm ${className}`}
      />
    </div>
  )
);
Input.displayName = 'Input';

const ErrorMsg = ({ children }: { children: React.ReactNode }) => (
  <p className="text-red-300 text-xs mt-1 ml-1 flex items-center gap-1">
    <AlertCircle size={12} /> {children}
  </p>
);

function InfoItem({ icon, title, text, link }: InfoItemProps) {
  const Container = link ? 'a' : 'div';
  return (
    <Container
      {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex gap-4 items-center bg-white/10 hover:bg-white/20 p-5 rounded-2xl transition-all border border-white/5 cursor-pointer"
    >
      <div className="w-12 h-12 bg-[#C9A24D] flex items-center justify-center rounded-full shadow-inner shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider opacity-70">{title}</p>
        <p className="text-lg font-medium break-all">{text}</p>
      </div>
    </Container>
  );
}