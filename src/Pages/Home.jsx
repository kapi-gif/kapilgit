import React from "react";
import NutritionIcon from "../Assets/Nutrition Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import { FaAppleAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";


import B11 from "../Assets/B11.jpg";
import B12 from "../Assets/B12.jpg";
import B13 from "../Assets/B13.jpg";

import B14 from "../Assets/B14.jpg";
import B16 from '../Assets/B16.jpg'
import B17 from '../Assets/B17.avif'
import B18 from '../Assets/B18.avif'
import K1 from '../Assets/K1.avif'
import K2 from '../Assets/K2.webp'
import { motion } from "framer-motion";

import B15 from '../Assets/B15.jpg'
import Sudesh from '../Assets/Sudesh.png'




const Home = () => {
  return (
    <>
      <div className="bg-zinc-900 -mt-16 ">



        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row max-w-8xl mx-auto mt-16 px-4 md:px-16 justify-between items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={Sudesh}
              alt="Mindful Eating Blog"
              className="w-full h-60 md:h-96 lg:h-[500px] object-scale-down rounded-2xl mb-6 mx-auto mt-5 border-2  border-gray-500"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-16">
          <div className="text-2xl gap-2 mt-4 md:mt-10 font-bold mb-4 border-b-2 border-white inline-block 
  bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent 
  transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600">
  Empowering Your Business with
</div>





            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              AI INTEGRATORZ
            </h1>

            <div className="text-base md:text-lg mb-4 text-left text-white">
              Welcome to AI Integrator's, your trusted partner in providing cutting-edge IT solutions for businesses of all sizes.
              From custom software development to IT consulting, we are committed to delivering high-performance services
              tailored to your business needs. Leverage our expertise to optimize your operations and drive growth with the
              latest technologies. Join us today and revolutionize the way you do business.
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-lime-500 text-black px-6 py-3 rounded-md text-sm md:text-base glow-on-hover">
                Get Started Today
              </button>

              <style jsx>{`
.glow-on-hover {
  transition: all 0.3s ease;
}

.glow-on-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(127, 255, 0, 0.5); /* Lime green glow */
}

.glow-on-hover::before { /* Optional inner glow */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(127, 255, 0, 0.2); /* Lighter lime inner glow */
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: inherit;
}

.glow-on-hover:hover::before {
  opacity: 1;
}
`}</style>
              <button className="relative px-6 py-3 rounded-md text-sm md:text-base overflow-hidden bg-yellow-500 text-black glow-on-hover">
                Book a Demo
              </button>

              <style jsx>{`.glow-on-hover {
  transition: all 0.3s ease; /* Transition for smooth hover effect */
}.glow-on-hover:hover {
  transform: scale(1.05); /* Slightly scale up on hover */
  box-shadow: 0 0 10px rgba(255, 255, 0, 0.5); /* Yellow glow */
}

/* Optional: Add a subtle inner glow */.glow-on-hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 0, 0.2); /* Subtle yellow inner glow */
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none; /* Prevent interference with hover effect */
  border-radius: inherit; /* Match the button's rounded corners */
}.glow-on-hover:hover::before {
  opacity: 1;
}


`}</style>
            </div>
          </div>
        </div>


        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-12 min-h-screen py-8 text-white relative bg-gradient-to-r from-gray-700 via-gray-500 to-gray-900">

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Features</h2>
          <h5 className="text-center text-sm sm:text-base md:text-lg font-semibold mb-6 sm:mb-8 px-4 md:px-12 text-slate-200">
            Welcome to AI Integratorz, a leading IT solutions provider offering innovative services to help businesses grow through cutting-edge technology and personalized solutions.
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6">
            {[
              { icon: <FaStar size={25} color="#4CAF50" />, title: "Custom Software Development", desc: "At AI Integrator, we provide custom software solutions tailored to meet the unique needs of your business. Our expert developers create scalable, efficient, and user-friendly applications that drive success." },
              { icon: <MdAnalytics size={30} color="#4CAF50" />, title: "Data Analytics and Insights", desc: "Leverage the power of data analytics to make informed business decisions. Our AI-driven analytics tools help you gain deep insights into your data, optimize processes, and enhance operational efficiency." },
              { icon: <FaCertificate size={25} color="#4CAF50" />, title: "IT Consultancy and Strategy", desc: "Our experienced IT consultants provide strategic guidance to help your business implement the latest technologies, streamline operations, and achieve long-term growth." },
              { icon: <FaGraduationCap size={30} color="#4CAF50" />, title: "Expert IT Support", desc: "AI Integrator offers round-the-clock IT support to ensure that your systems run smoothly. Our team of experts is available to address issues and provide ongoing maintenance to keep your business running without interruption." },
              { icon: <FaAppleAlt size={25} color="#4CAF50" />, title: "Cloud Computing Solutions", desc: "Unlock the power of cloud technology with AI Integrator's cloud computing solutions. We help businesses migrate to the cloud, improve scalability, and reduce infrastructure costs." },
              { icon: <FaMedal size={25} color="#4CAF50" />, title: "AI and Automation Services", desc: "Embrace the future with AI and automation services from AI Integrator. We provide AI-driven solutions to optimize processes, increase productivity, and reduce costs." }
            ].map((feature, index) => (
              <div key={index} className="relative w-full text-center bg-zinc-950 text-slate-300 p-4 sm:p-6 rounded-lg shadow-md overflow-hidden">
                {/* Moving Border Effect */}
                <div className="absolute inset-0 border-[3px] border-transparent rounded-lg before:absolute before:inset-0 before:rounded-lg before:border-[3px] before:border-transparent before:animate-moving-border"></div>
                {/* Feature Content */}
                <h3 className="flex items-center justify-center gap-3 font-bold text-base md:text-lg py-2 relative">
                  {feature.icon} {feature.title}
                </h3>
                <p className="text-sm md:text-base mt-2 mb-4 relative">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>





        

        <div className="text-center mt-[90px] max-w-8xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-blue-500">Our</span>
            <span className="text-purple-500"> Services</span>
          </h2>

          <p className="text-lg font-semibold text-slate-200 mb-8">
            We provide web development, AI development, mobile app development, and graphic design services.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[20px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {[
              { img: B13, title: "Web Development", subtitle: "The Power of Web Development", desc: "Explore how web development shapes modern businesses and enhances user experience." },
              { img: B14, title: "AI Development", subtitle: "Transforming Industries with AI", desc: "Explore how AI is revolutionizing industries and improving decision-making." },
              { img: B12, title: "Mobile App Development", subtitle: "Building Intuitive Mobile Apps", desc: "Discover the key principles of mobile app development for creating innovative solutions." },
              { img: B11, title: "Graphic Designing", subtitle: "Creating Engaging Designs", desc: "Dive into the world of graphic design and learn the principles of creating impactful visuals." },
              { img: K1, title: "Digital Marketing", subtitle: "Creating Engaging Designs", desc: "Dive into the world of graphic design and learn the principles of creating impactful visuals." },
              { img: K2, title: "Game Development", subtitle: "Building Immersive Games", desc: "Explore the fundamentals of game development and create engaging gaming experiences." },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl mt-[10px]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"
                />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <h1 className="text-xl font-bold mb-2">{service.subtitle}</h1>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <section className="bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-900 py-16 mt-[200px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
          <div className="max-w-6xl mx-auto text-center">

            
            <motion.h2
              initial={{ x: -100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
              viewport={{ once: false, amount: 0.3 }} 
              className="text-4xl font-bold mb-6 bg-gradient-to-l from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(100,149,237,0.7)]"
            >
              Our Testimonials
            </motion.h2>

            <p className="text-lg font-bold mb-8 text-slate-200">
              Our clients share their experiences with AI Integratorz and how our IT solutions have transformed their businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonials */}
              {[
                {
                  text: "AI Integratorz custom software solutions have streamlined our processes and boosted efficiency across the board. The team's expertise in AI and cloud technologies is unparalleled!",
                  name: "James Williams",
                },
                {
                  text: "The AI-driven solutions we implemented with AI Integratorz have helped us make data-driven decisions, enhancing our productivity and growth. Their support has been top-notch!",
                  name: "Sophia Martinez",
                },
                {
                  text: "AI Integratorz team delivered a highly innovative web solution that perfectly fits our needs. Their dedication to delivering high-quality IT services was evident throughout the project.",
                  name: "Michael Roberts",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }} // Left se appear hoga
                  whileInView={{ x: 0, opacity: 1 }} // Normal position par aayega
                  transition={{ duration: 0.6, delay: index * 0.2 }} // Smooth transition
                  viewport={{ once: false, amount: 0.2 }} // Har baar trigger hoga jab 20% section visible hoga
                  className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg"
                >
                  <p className="text-gray-700 italic mb-4 text-white">{testimonial.text}</p>
                  <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">
                    {testimonial.name}
                  </h5>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <nav className="w-full bg-zinc-950 text-white py-4 md:py-3 h-auto mt-10 md:mt-10">
          {/* Navigation Container */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">

            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img className="w-8 h-8" src={NutritionIcon} alt="Nutrition Icon" />
              <h1 className="text-lg md:text-xl font-bold">AI INTEGRATORZ</h1>
            </div>

            {/* Navigation Links */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row justify-center md:gap-4 text-sm space-y-2 md:space-y-0">
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center">Home</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center">Services</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center">Features</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center">Testimonials</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center">Contact</li>
              </ul>
            </div>

            {/* Go To Top Button */}
            <div className="mt-4 md:mt-0">
              <ul>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-sm flex items-center justify-center">
                  Go To Top <FontAwesomeIcon icon={faArrowUp} className="ml-2" />
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto mt-6 p-3 bg-neutral-600 text-black rounded-lg">
            <div className="flex flex-col md:flex-row items-center text-sm gap-4 md:gap-10">
              <p>Contact: +916264601696 </p>
              <p>Email: info@aiintegratorz.com</p>
              <p>Address: Sapna Sangeeta Road </p>
            </div>
          </div>
        </nav>


      </div>

    </>
  );
};

export default Home;
