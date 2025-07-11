import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 px-6 py-12 lg:py-20 text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Download Now
            <br />
            <span className="text-white/90 text-3xl sm:text-4xl">Lorem Ipsum</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-white/80">
            Enhance your productivity with our modern app. Start your journey today!
          </p>

          <Link
            to="/"
            className="inline-flex items-center bg-white text-orange-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-100 transition"
          >
            <svg
              fill="currentColor"
              className="mr-2"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Download now
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-6 py-8">
          <img
            className="w-72 sm:w-96 lg:w-full object-cover"
            src="https://images.unsplash.com/photo-1581092334403-0185b141f6c1?auto=format&fit=crop&w=800&q=80"
            alt="Hero illustration"
          />
        </div>
      </section>

      {/* Secondary Image Section */}
      <div className="flex justify-center mt-16">
        <img
          className="w-48 sm:w-72 md:w-96 rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80"
          alt="Secondary illustration"
        />
      </div>

      {/* Bottom Heading */}
      <h1 className="text-center text-3xl sm:text-5xl font-semibold mt-12 text-gray-800">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
