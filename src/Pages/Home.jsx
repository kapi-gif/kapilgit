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
// import B15 from "../Assets/B15.jpg";
// import B16 from '../Assets/B16.jpg'
// import B17 from '../Assets/B17.avif'
import B18 from '../Assets/B18.avif'


const Home = () => {
  return (
    <>
      <div className="bg-zinc-900 -mt-16 ">



        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row max-w-8xl mx-auto mt-16 px-4 md:px-16 justify-between items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={B18}
              alt="Mindful Eating Blog"
              className="w-full h-60 md:h-96 lg:h-[500px] object-cover rounded-lg mb-6 mx-auto mt-5"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-16">
            <div className="text-2xl gap-2 mt-4 md:mt-10 font-bold mb-4 text-white border-b-2 border-white inline-block">
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
              <button className="bg-lime-500 text-black px-6 py-3 rounded-md hover:bg-lime-700 text-sm md:text-base">
                Get Started Today
              </button>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 text-sm md:text-base">
                Book a Demo
              </button>
            </div>
          </div>
        </div>


        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-12 bg-gray-600 min-h-screen py-8 text-white ">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Features</h2>
          <h5 className="text-center text-sm sm:text-base md:text-lg font-semibold mb-6 sm:mb-8 px-4 md:px-12 text-slate-200">
            Welcome to AI Integratorz , a leading IT solutions provider offering innovative services to help businesses grow through cutting-edge technology and personalized solutions.
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
              <div key={index} className="w-full text-center bg-zinc-950 text-slate-300 p-4 sm:p-6 rounded-lg shadow-md hover:bg-zinc-700 hover:border-4 hover:border-lime-400 transition duration-300 ease-in-out">
                <h3 className="flex items-center justify-center gap-3 font-bold text-base md:text-lg py-2">
                  {feature.icon} {feature.title}
                </h3>
                <p className="text-sm md:text-base mt-2 mb-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>


        <div className="text-center mt-[90px] max-w-8xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-lg font-semibold text-slate-200 mb-8">
            We provide web development, AI development, mobile app development, and graphic design services.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[20px]">

            <div className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl mt-[60px]">
              <img
                src={B13}
                alt="Web Development Blog"
                className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"
              />
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <h1 className="text-xl font-bold mb-2">The Power of Web Development</h1>
              <p className="text-gray-400 text-sm">
                Explore how web development shapes modern businesses and enhances user experience.
              </p>
            </div>

            <div className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl mt-[60px]">
              <img src={B14} alt="AI Development Blog"
               className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"/>
              <h3 className="text-lg font-semibold mb-2">AI Development</h3>
              <h1 className="text-xl font-bold mb-2">Transforming Industries with AI</h1>
              <p className="text-gray-400 text-sm">
                Explore how AI is revolutionizing industries and improving decision-making.
              </p>
            </div>

            <div className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl mt-[60px]">
              <img src={B12} alt="Mobile App Development Blog" 
              className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"/>
              <h3 className="text-lg font-semibold mb-2">Mobile App Development</h3>
              <h1 className="text-xl font-bold mb-2">Building Intuitive Mobile Apps</h1>
              <p className="text-gray-400 text-sm">
                Discover the key principles of mobile app development for creating innovative solutions.
              </p>
            </div>

            <div className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl">
              <img src={B11} alt="Graphic Designing Blog" 
              className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"/>
              <h3 className="text-lg font-semibold mb-2">Graphic Designing</h3>
              <h1 className="text-xl font-bold mb-2">Creating Engaging Designs</h1>
              <p className="text-gray-400 text-sm">
                Dive into the world of graphic design and learn the principles of creating impactful visuals.
              </p>
            </div>

            <div className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl">
              <img src={B11} alt="Graphic Designing Blog" 
              className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"/>
              <h3 className="text-lg font-semibold mb-2">Graphic Designing</h3>
              <h1 className="text-xl font-bold mb-2">Creating Engaging Designs</h1>
              <p className="text-gray-400 text-sm">
                Dive into the world of graphic design and learn the principles of creating impactful visuals.
              </p>
            </div>

            <div className="bg-gray-600 p-4 text-center max-w-[410px] mx-auto overflow-hidden relative transition duration-300 ease-in-out transform hover:scale-90 rounded-2xl">
              <img src={B11} alt="Graphic Designing Blog"
              className="w-full h-40 object-cover rounded-lg mb-4 transform transition duration-500 hover:scale-110"/>
              <h3 className="text-lg font-semibold mb-2">Graphic Designing</h3>
              <h1 className="text-xl font-bold mb-2">Creating Engaging Designs</h1>
              <p className="text-gray-400 text-sm">
                Dive into the world of graphic design and learn the principles of creating impactful visuals.
              </p>
            </div>

          </div>
        </div>

        <section className="bg-gray-600 py-16 mt-[200px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white ">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Testimonials</h2>
            <p className="text-lg font-bold mb-8 text-slate-200">
              Our clients share their experiences with AI Integratorz and how our IT solutions have transformed their businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Testimonial 1 */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg">
                <p className="text-gray-700 italic mb-4 text-white">
                  "AI Integratorz custom software solutions have streamlined our processes and boosted efficiency across the board. The team's expertise in AI and cloud technologies is unparalleled!"
                </p>
                <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">James Williams</h5>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg">
                <p className="text-gray-700 italic mb-4 text-white">
                  "The AI-driven solutions we implemented with AI Integratorz have helped us make data-driven decisions, enhancing our productivity and growth. Their support has been top-notch!"
                </p>
                <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">Sophia Martinez</h5>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg">
                <p className="text-gray-700 italic mb-4 text-white">
                  "AI Integratorz team delivered a highly innovative web solution that perfectly fits our needs. Their dedication to delivering high-quality IT services was evident throughout the project."
                </p>
                <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">Michael Roberts</h5>
              </div>

            </div>
          </div>
        </section>

        <nav className="w-full bg-zinc-950 text-white py-4 md:py-3 h-auto mt-10 md:mt-10">
          {/* Navigation Container */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">

            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img className="w-8 h-8" src={NutritionIcon} alt="Nutrition Icon" />
              <h1 className="text-lg md:text-xl font-bold">AI INTEGRATOR'S</h1>
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
          <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto mt-6 p-3 bg-pink-600 text-black rounded-lg">
            <div className="flex flex-col md:flex-row items-center text-sm gap-4 md:gap-10">
              <p>Contact: +916264601696 </p>
              <p>Email: info@aiintegrators.com</p>
              <p>Address: Sapna Sangeeta Road </p>
            </div>
          </div>
        </nav>


      </div>

    </>
  );
};

export default Home;
