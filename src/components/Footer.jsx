import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-red-600 mb-2">BoostUp Gym</h2>
          <p className="text-gray-400 text-sm">
            Your fitness journey starts here. Train hard, recover well, and grow stronger — every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About Us</a></li>
            <li><a href="/classes" className="hover:text-red-500 transition">Classes</a></li>
            <li><a href="/pricing" className="hover:text-red-500 transition">Pricing</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider">Connect With Us</h3>
          <div className=" space-x-4 mb-4">
            <p>Krishna Nagar, Krishna Nagar Gamri-136118</p>
            <span>Kurukshetra, Haryana</span>
          </div>
          <p className="text-sm text-gray-400">Phone: +91 9034542004</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} BoostUp Gym. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
