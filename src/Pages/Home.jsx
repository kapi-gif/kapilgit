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
import Heart from "../Assets/Heart icon.png";
import B11 from "../Assets/B11.jpg";
import B12 from "../Assets/B12.jpg";
import B13 from "../Assets/B13.jpg";
import B14 from "../Assets/B14.jpg";
import B15 from "../Assets/B15.jpg";



const Home = () => {
  return (
    <>
      <div className="bg-zinc-900 -mt-16 ">



        {/* Main Content Section */}
        <div className="flex max-w-7xl mx-auto mt-16 px-16 justify-between items-center">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={B15}
              alt="Mindful Eating Blog"
              className="w-full h-[500px] object-cover rounded-lg mb-6 mx-auto mt-5"
            />
          </div>

          {/* Text Section */}
          <div className="w-1/2 pl-16">
            <div className="text-2xl gap-2 mt-10 font-bold mb-6 text-white border-b-2 border-white inline-block">
              Empowering Your Business with
            </div>

            {/* <div className="w-[200px] h-[2px] bg-lime-50 mb-6 mx-auto"></div> */}
            <h1 className="text-5xl font-extrabold mb-6 text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              AI INTEGRATOR'S
            </h1>


            <div className="text-1 mb-6 text-left text-lg text-white">
              Welcome to AI Integrator's, your trusted partner in providing cutting-edge IT solutions for businesses of all sizes.
              From custom software development to IT consulting, we are committed to delivering high-performance services
              tailored to your business needs. Leverage our expertise to optimize your operations and drive growth with the
              latest technologies. Join us today and revolutionize the way you do business.
            </div>

            {/* Buttons */}
            <div className="flex space-x-8">
              <button className="bg-lime-500 text-black px-10 py-3 rounded-md hover:bg-lime-700 text-m">
                Get Started Today
              </button>
              <button className="bg-yellow-500 text-black px-10 py-3 rounded-md hover:bg-yellow-700 text-m">
                Book a Demo
              </button>
            </div>
          </div>

        </div>

        <section className="max-w-6xl mx-auto px-16 mt-28 bg-lime-50">
          <h2 className="flex justify-center items-center text-4xl font-bold mb-4 p-6">Features</h2>
          <h5 className="flex justify-center items-center text-sm font-semibold mb-8 text-center">
            Welcome to AI Integrator's, a leading IT solutions provider offering innovative services to help businesses grow through cutting-edge technology and personalized solutions.
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-6 justify-center mx-auto ">
            {/* Feature 1 */}
            <div className="w-[480px] text-center mx-auto ">
              <h3 className="font-bold gap-3 text-sm bg-zinc-950 py-3 px-6 flex text-white"><FaStar size={25} color="#4CAF50" /> Custom Software Development</h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm bg-zinc-950 h-[150px] p-6 text-white">
                At AI Integrator, we provide custom software solutions tailored to meet the unique needs of your business. Our expert developers create scalable, efficient, and user-friendly applications that drive success.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="w-[480px] text-center mx-auto">
              <h3 className="gap-3 font-bold text-sm bg-zinc-950 text-white py-3 px-6 flex"><MdAnalytics size={30} color="#4CAF50" /> Data Analytics and Insights</h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm bg-zinc-950 text-white h-[150px] p-6">
                Leverage the power of data analytics to make informed business decisions. Our AI-driven analytics tools help you gain deep insights into your data, optimize processes, and enhance operational efficiency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="w-[480px] text-center mx-auto">
              <h3 className="gap-3 font-bold text-sm bg-zinc-950 text-white py-3 px-6 flex"><FaCertificate size={25} color="#4CAF50" /> IT Consultancy and Strategy</h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm bg-zinc-950 text-white h-[150px] p-6">
                Our experienced IT consultants provide strategic guidance to help your business implement the latest technologies, streamline operations, and achieve long-term growth.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="w-[480px] text-center mx-auto">
              <h3 className="gap-3 font-bold text-sm bg-zinc-950 text-white py-3 px-6 flex"><FaGraduationCap size={30} color="#4CAF50" /> Expert IT Support</h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm bg-zinc-950 text-white h-[150px] p-6">
                AI Integrator offers round-the-clock IT support to ensure that your systems run smoothly. Our team of experts is available to address issues and provide ongoing maintenance to keep your business running without interruption.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="w-[480px] text-center mx-auto">
              <h3 className="gap-3 font-bold text-sm bg-zinc-950 text-white py-3 px-6 flex"><FaAppleAlt size={25} color="#4CAF50" /> Cloud Computing Solutions</h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm bg-zinc-950 text-white h-[150px] p-6">
                Unlock the power of cloud technology with AI Integrator's cloud computing solutions. We help businesses migrate to the cloud, improve scalability, and reduce infrastructure costs.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="w-[480px] text-center mx-auto">
              <h3 className="gap-3 font-bold text-sm bg-zinc-950 text-white py-3 px-6 flex"><FaMedal size={25} color="#4CAF50" /> AI and Automation Services</h3>
              <p className="text-gray-700 mt-2 mb-6 text-sm bg-zinc-950 text-white h-[150px] p-6">
                Embrace the future with AI and automation services from AI Integrator. We provide AI-driven solutions to optimize processes, increase productivity, and reduce costs.
              </p>
            </div>
          </div>
        </section>



        {/* Blogs Section */}
        <div className="text-center mt-8 max-w-7xl mx-auto px-4 ">
          <h2 className="text-2xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xs font-semibold text-white mb-8">
            Our blog explores the fusion of AI, technology, and wellness, providing insights from experts in the field.
          </p>


          <div className="grid md:grid-cols-2 gap-8 ">
            {/* Blog Post 1 */}
            <div className="bg-lime-50 p-4 text-center w-[480px] mx-auto  hover:bg-lime-300">
              <img src={B13} alt="Web Development Blog" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-black-700 text-lg font-semibold mb-2">Web Development</h3>
              <h1 className="text-xl font-bold mb-2">The Power of Web Development in Today’s Digital World</h1>
              <p className="text-gray-600 text-sm">
                Explore how web development shapes modern businesses and enhances user experience across the web.
              </p>
            </div>



            {/* Blog Post 2 */}
            <div className="bg-lime-50 p-4 text-center w-[480px] mx-auto  hover:bg-lime-300">
              <img src={B14} alt="AI Development Blog" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-black-700 text-lg font-semibold mb-2">AI Development</h3>
              <h1 className="text-xl font-bold mb-2">Transforming Industries with Artificial Intelligence</h1>
              <p className="text-gray-600 text-sm">
                Explore how AI development is revolutionizing industries and improving decision-making, automation, and innovation in today's world.
              </p>
            </div>


            {/* Blog Post 3 */}
            <div className="bg-lime-50 p-4 text-center w-[480px] mx-auto hover:bg-lime-300">
              <img src={B12} alt="Mobile App Development Blog" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-black-700 text-lg font-semibold mb-2">Mobile App Development</h3>
              <h1 className="text-xl font-bold mb-2">Building Intuitive and Scalable Mobile Apps</h1>
              <p className="text-gray-600 text-sm">
                Discover the key principles of mobile app development, from user experience to performance optimization, for creating innovative mobile solutions.
              </p>
            </div>


            {/* Blog Post 4 */}
            <div className="bg-lime-50 p-4 text-center w-[480px] mx-auto hover:bg-lime-300 ">
              <img src={B11} alt="Graphic Designing Blog" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-black-700 text-lg font-semibold mb-2">Graphic Designing</h3>
              <h1 className="text-xl font-bold mb-2">Creating Visually Engaging Designs</h1>
              <p className="text-gray-600 text-sm">
                Dive into the world of graphic design and learn the principles of creating impactful visuals that communicate messages effectively.
              </p>
            </div>


          </div>
        </div>

        {/* Testimonials Section */}
        <section className="bg-lime-200 py-16 mt-16 ml-[90px] mr-10 max-w-7xl">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Testimonials</h2>
            <p className="text-lg font-bold mb-8 text-zinc-950">
              Our clients share their experiences with AI Integrator and how our IT solutions have transformed their businesses.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Testimonial 1 */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg">
                <p className="text-gray-700 italic mb-4 text-white">
                  "AI Integrator's custom software solutions have streamlined our processes and boosted efficiency across the board. The team's expertise in AI and cloud technologies is unparalleled!"
                </p>
                <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">James Williams</h5>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg">
                <p className="text-gray-700 italic mb-4 text-white">
                  "The AI-driven solutions we implemented with AI Integrator have helped us make data-driven decisions, enhancing our productivity and growth. Their support has been top-notch!"
                </p>
                <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">Sophia Martinez</h5>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-zinc-900 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-teal-700 hover:shadow-lg">
                <p className="text-gray-700 italic mb-4 text-white">
                  "AI Integrator's team delivered a highly innovative web solution that perfectly fits our needs. Their dedication to delivering high-quality IT services was evident throughout the project."
                </p>
                <h5 className="text-teal-400 font-semibold hover:text-white transition-colors duration-300">Michael Roberts</h5>
              </div>

            </div>
          </div>
        </section>

        <nav className=" w-full bg-zinc-800 text-white py-3 h-[150px] mt-14">
          {/* Navigation Links Section */}
          <div className="flex ">
            <div className="flex items-center max-w-5xl mx-auto px-4">
              <h1 className="flex -ml-32"><img className='size-6 ' src={NutritionIcon} alt="Nutrition Icon" />AI INTEGRATOR</h1>
            </div>

            {/* Centered Navigation Links */}
            <div className="w-7/12 ">
              <ul className="flex gap-1 text-sm">
                <li className="hover:bg-gray-700 px-4 py-2 rounded">Home</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded">Services</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded">Features</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded">Testimonials</li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded">Contact</li>
                {/* <li className="hover:bg-gray-700 px-4 py-2 rounded">Go To Top</li> */}
              </ul>
            </div >
            <div className="mr-10 text-sm "><ul><li className="hover:bg-gray-700 px-4 py-2 rounded ">Go To Top <FontAwesomeIcon icon={faArrowUp} /></li></ul></div>
          </div>

          {/* Contact Information Section */}

          {/* <div className="flex "> */}
          <div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-zinc-600  border-white ">
            <div className="flex items-center w-full text-sm px-2 py-1 rounded gap-40 ml-[20px] ">
              <p className="mx-1 ">hello@aiintegrator.com</p>
              <p className="mx-1">+91813232309</p>
              <p className="mx-1">Somewhere in the World</p>
              <div className="mx-1"><p > All rights reserved</p></div>
            </div>

          </div>
        </nav>
      </div>

    </>
  );
};

export default Home;
