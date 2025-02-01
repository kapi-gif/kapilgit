import React from 'react';
import NutritionIcon from "../Assets/Nutrition Icon.png"
import Map from "../Assets/Map.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      {/* Contact Us Section */}
      <div className="bg-zinc-950 mx-auto max-w-7xl mt-12 h-[360px] p-6 flex flex-col justify-center items-center text-white">
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-base mb-2">
            We value your feedback, questions, and concerns at Ai Integrator's . Our dedicated team is here to
            assist you and provide the support you need on your journey.
          </p>
          <p className="text-base">
            Please don't hesitate to reach out to us using any of the following contact methods.
          </p>

          {/* Contact Information Section */}
          <nav className="bg-pink-600 mt-8 flex justify-center items-center space-x-6 py-8 rounded-lg">
            <p className="w-[300px] bg-zinc-950 text-white py-6 text-center rounded-lg">
              support@aiintegrator.com
            </p>
            <p className="w-[300px] bg-zinc-950 text-white py-6 text-center rounded-lg">
              +916264601696
            </p>
            <p className="w-[300px] bg-zinc-950 text-white py-6 text-center rounded-lg">
              Somewhere in the World
            </p>
          </nav>
        </div>
      </div>

      {/* Form and Image Section */}
      <div className="flex justify-center mt-16">
        <div className="max-w-7xl w-full flex space-x-8 p-8 shadow-lg rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-800">
          {/* Left Side - Contact Form */}
          <div className="w-1/2 space-y-6">
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Full Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Phone Number</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Message</label>
              <textarea className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Write your message" rows="4"></textarea>
            </div>
            <button className="bg-white text-black py-3 rounded-lg hover:bg-lime-200 w-full">Send Message</button>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img src={Map} alt="Map" className="w-full h-96 rounded-lg object-cover " />
          </div>
        </div>
      </div>


      {/* Join Us Section */}
      <div className="max-w-7xl mx-auto bg-zinc-950 shadow-lg rounded-lg p-8 flex flex-col mt-12 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to leverage cutting-edge technology for a smarter and healthier future with AI INTEGRATOR's ?
        </h2>

        <p className="text-lg mb-6">
          Join us at AI INTEGRATOR and let us guide you on the path to a healthier and happier you.
        </p>
        <div className="flex justify-end">
          <button className="bg-zinc-700 text-white py-2 px-6 rounded-lg hover:bg-pink-600">
            Join Us Now
          </button>
        </div>
      </div>

      <nav className=" w-full bg-zinc-950 text-white py-3 h-[150px] mt-20">
        {/* Navigation Links Section */}
        <div className="flex ">
          <div className="flex items-center max-w-5xl mx-auto px-4">
            <h1 className="flex -ml-32"><img className='size-6 ' src={NutritionIcon} alt="Nutrition Icon" />AI INTEGRATOR'S</h1>
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
        <div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-zinc-400  border-white  text-black">
          <div className="flex items-center w-full text-sm px-2 py-1 rounded gap-[40px] ">
            <p className="mx-1 ">hello@aiintegrators.com</p>
            <p className="mx-1">+916264601696</p>
            <p className="mx-1">Somewhere in the World</p>
            <div className="mx-1"><p >Ai Integrtor's. All rights reserved</p></div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Contact;
