import React from 'react';

function Contact() {
  return (
    <section id='contact' className="relative z-10 overflow-hidden bg-white py-10 dark:bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-base uppercase">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mt-2">
            Get in Touch with Us
          </h2>
          
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Location Card */}
          <div className="flex items-start bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl mr-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
                <path d="M30.6 11.8L17.7 3.5c-1.05-.65-2.4-.65-3.4 0L1.4 11.8c-.5.35-.65 1.05-.35 1.55s1.05.65 1.55.35l.85-.55v12.65c0 1.75 1.4 3.15 3.15 3.15h18.8c1.75 0 3.15-1.4 3.15-3.15V13.15l.85.55c.2.1.4.2.6.2.35 0 .75-.2.95-.5.35-.55.2-1.25-.35-1.6z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-1">Our Location</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Krishna Nagar, Gamri-136118, Kurukshetra, Haryana
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-start bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl mr-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
                <path d="M24.3 31.15c-1.35 0-2.9-.35-4.6-1C16.3 28.8 12.55 26.2 9.2 22.85 5.85 19.5 3.25 15.75 1.9 12.3.4 8.6.55 5.55 2.3 3.85l4.2-2.5c1.05-.6 2.4-.3 3.1.7l2.95 4.4c.7 1.05.4 2.45-.6 3.15L10.35 10.7c1.3 2.1 5 7.25 10.9 10.95l1.1-1.6c.85-1.2 2.2-1.55 3.3-.8l4.4 2.95c1 .7 1.3 2.05.7 3.1l-2.5 4.2c-.9.95-2.2 1.45-3.6 1.45z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-1">Phone Number</h4>
              <p className="text-gray-600 dark:text-gray-400">+91 9034542004</p>
            </div>
          </div>

          {/* Gym Open Card */}
          <div className="flex items-start bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl mr-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
                <path d="M4 10h2v12H4V10zm22 0h2v12h-2V10zM8 12h2v8H8v-8zm14 0h2v8h-2v-8zM12 14h8v4h-8v-4zM0 12h2v8H0v-8zm30 0h2v8h-2v-8z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-1">Open Hours</h4>
              <p className="text-gray-600 dark:text-gray-400">Mon - Sat: 5 AM - 10 PM</p>
              <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
