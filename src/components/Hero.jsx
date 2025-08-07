import React from 'react';
import RollingGallery from '../animation/RollingGallery/RollingGallery';
import ScrollReveal from './../animation/ScrollReveal/ScrollReveal';
function Hero() {
  return (
    <>
    <section id='home' className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden">

      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/images/herosection.jpg')] bg-cover bg-center">
          <div className="w-full h-full bg-gradient-to-b from-black/70 via-black/30 to-black/80 backdrop-blur-sm"></div>
        </div>
      </div>


      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white text-center">

        <h1 className=" mt-10 text-5xl font-extrabold mb-4">BoostUp Where Power Meets Passion</h1>
        <p className="text-xl text-gray-200">Join the ultimate fitness experience — expert coaching, killer workouts, real results.</p>


        <a
          href="#home"
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg"
        >
          Explore Now
        </a>


        <div className="mt-12 w-full max-w-5xl">
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
      </div>


      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

{/* after hero section */}

<section id='services' className="bg-white text-black body-font">
  <div className="container px-5 py-20 mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
      Welcome to <span className="text-red-600">BoostUp Gym</span>
    </h1>
    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
      Unlock your potential with expert coaching, customized programs, and a community that pushes you forward.
    </p>
  </div>

  {/* Services Section */}
  <div className="container px-5 pb-20 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
      {[
        { name: 'STRENGTH', img: '/images/strength.jpg' },
        { name: 'BHANGRA FITNESS', img: '/images/bhangra.jpg' },
        { name: 'AEROBICS', img: '/images/aerobcs.jpg' },
        { name: 'FREE WEIGHTS', img: '/images/freeweight.jpg' },
        { name: 'YOGA POWER', img: '/images/yoga.jpg' },
        { name: 'KICK BOXING', img: '/images/kickboxing.jpg' },
        { name: 'CROSSFIT', img: '/images/crossfit.jpg' },
      ].map((service, index) => (
        <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
          <div className="h-full  hover:scale-105 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <img
              alt={service.name}
              className="w-full h-56 object-cover object-center"
              src={service.img}
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-black uppercase tracking-wider">
                {service.name}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* facilities section */}


<div id="facilities" className="bg-black py-20 px-5 lg:px-0">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16">
    
    {/* Left Side - Quote */}
    <div className="lg:w-1/2 w-full">
      <blockquote className="text-3xl lg:text-4xl font-bold italic text-white border-l-8 border-red-600 pl-6 leading-relaxed relative">
        <span className="text-5xl text-red-600 absolute -top-4 left-0 select-none">“</span>
        <div className="ml-6">
          Facilities That <span className="text-red-600">Power</span> Your Progress
        </div>
        <span className="text-5xl text-red-600 absolute -bottom-4 left-50 select-none">”</span>
      </blockquote>
    </div>

    {/* Right Side - Facility List */}
    <div className="lg:w-1/2 w-full max-w-xl">
      <h3 className="text-sm font-medium text-red-500 uppercase tracking-wider mb-2">What We Offer</h3>
      <h1 className="text-4xl font-extrabold text-white mb-10 leading-tight">Our Premium Gym Facilities</h1>

      <div className="space-y-8">
        {[
          { title: 'Strength Training Zone', desc: 'Elite equipment for powerlifting, bodybuilding, and resistance workouts.' },
          { title: 'Cardio Studio', desc: 'High-end treadmills, stairmasters & more for heart-pumping endurance.' },
          { title: 'Functional Training Area', desc: 'Train like an athlete with sleds, TRX, kettlebells & battle ropes.' },
          { title: 'Yoga & Mobility Studio', desc: 'Stretch, unwind, and realign with yoga and mobility sessions.' },
          { title: 'Boxing & MMA Arena', desc: 'Punch bags, boxing ring & mats for combat sports and cardio.' },
          { title: 'Steam & Recovery Zone', desc: 'Recharge with steam rooms, massage chairs & recovery tools.' },
        ].map(({ title, desc }, idx) => (
          <div key={idx} className="group">
            <h2 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-red-500 transition duration-300">
              {title}
            </h2>
            <p className="text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* why the gym section */}

<section className="bg-white py-10">
  <div className="container mx-auto px-6 md:px-10 lg:px-20">
    <div className="text-center mb-16">
      <h3 className="text-red-600 font-semibold text-xl uppercase tracking-wider mb-2">
        Why BoostUp Gym?
      </h3>
      <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900">
        Your Transformation Starts Here
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Discover what sets us apart — from cutting-edge equipment to a powerful fitness community.
      </p>
    </div>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: '🏋️‍♂️',
          title: 'State-of-the-Art Equipment',
          desc: 'Train with the latest, professional-grade machines and tools for every workout style.',
        },
        {
          icon: '🤝',
          title: 'Certified Personal Trainers',
          desc: 'Get expert guidance tailored to your goals — from weight loss to muscle gain.',
        },
        {
          icon: '🔥',
          title: 'High-Energy Group Classes',
          desc: 'Stay motivated with yoga, Zumba, HIIT, and more — led by passionate instructors.',
        },
        {
          icon: '🧘‍♀️',
          title: 'Recovery & Wellness',
          desc: 'Relax post-workout with our steam rooms, stretching zones, and wellness options.',
        },
        {
          icon: '⚡',
          title: 'Flexible Memberships',
          desc: 'Join on your terms with plans for all lifestyles — no long-term contracts needed.',
        },
        {
          icon: '🎯',
          title: 'Community-Driven Culture',
          desc: 'Train alongside a positive, empowering community that pushes you to your best.',
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
        >
          <div className="text-5xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


</>
  );
}

export default Hero;
