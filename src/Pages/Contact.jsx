// import React from 'react';
// import NutritionIcon from "../Assets/Nutrition Icon.png"
// import Map from "../Assets/Map.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

// const Contact = () => {
//   return (
//     <>
//       {/* Contact Us Section */}
//       <div className="bg-zinc-950 mx-auto max-w-7xl mt-12 h-[360px] p-6 flex flex-col justify-center items-center text-white">
//         <div className="w-full text-center">
//           <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//           <p className="text-base mb-2">
//             We value your feedback, questions, and concerns at Ai Integrator's . Our dedicated team is here to
//             assist you and provide the support you need on your journey.
//           </p>
//           <p className="text-base">
//             Please don't hesitate to reach out to us using any of the following contact methods.
//           </p>

//           {/* Contact Information Section */}
//           <nav className="bg-pink-600 mt-8 flex justify-center items-center space-x-6 py-8 rounded-lg">
//             <p className="w-[300px] bg-zinc-950 text-white py-6 text-center rounded-lg">
//               support@aiintegrator.com
//             </p>
//             <p className="w-[300px] bg-zinc-950 text-white py-6 text-center rounded-lg">
//               +916264601696
//             </p>
//             <p className="w-[300px] bg-zinc-950 text-white py-6 text-center rounded-lg">
//               Somewhere in the World
//             </p>
//           </nav>
//         </div>
//       </div>

//       {/* Form and Image Section */}
//       <div className="flex justify-center mt-16">
//         <div className="max-w-7xl w-full flex space-x-8 p-8 shadow-lg rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-800">
//           {/* Left Side - Contact Form */}
//           <div className="w-1/2 space-y-6">
//             <div>
//               <label className="block text-gray-200 font-semibold mb-2 text-sm">Full Name</label>
//               <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Enter your name" />
//             </div>
//             <div>
//               <label className="block text-gray-200 font-semibold mb-2 text-sm">Email</label>
//               <input type="email" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Enter your email" />
//             </div>
//             <div>
//               <label className="block text-gray-200 font-semibold mb-2 text-sm">Phone Number</label>
//               <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Enter your phone number" />
//             </div>
//             <div>
//               <label className="block text-gray-200 font-semibold mb-2 text-sm">Message</label>
//               <textarea className="w-full border border-gray-300 p-3 rounded-lg bg-white text-white" placeholder="Write your message" rows="4"></textarea>
//             </div>
//             <button className="bg-white text-black py-3 rounded-lg hover:bg-lime-200 w-full">Send Message</button>
//           </div>

//           {/* Right Side - Image */}
//           <div className="w-1/2 flex justify-center items-center">
//             <img src={Map} alt="Map" className="w-full h-96 rounded-lg object-cover " />
//           </div>
//         </div>
//       </div>


//       {/* Join Us Section */}
//       <div className="max-w-7xl mx-auto bg-zinc-950 shadow-lg rounded-lg p-8 flex flex-col mt-12 text-white">
//         <h2 className="text-2xl font-bold mb-4">
//           Ready to leverage cutting-edge technology for a smarter and healthier future with AI INTEGRATOR's ?
//         </h2>

//         <p className="text-lg mb-6">
//           Join us at AI INTEGRATOR and let us guide you on the path to a healthier and happier you.
//         </p>
//         <div className="flex justify-end">
//           <button className="bg-zinc-700 text-white py-2 px-6 rounded-lg hover:bg-pink-600">
//             Join Us Now
//           </button>
//         </div>
//       </div>

//       <nav className=" w-full bg-zinc-950 text-white py-3 h-[150px] mt-20">
//         {/* Navigation Links Section */}
//         <div className="flex ">
//           <div className="flex items-center max-w-5xl mx-auto px-4">
//             <h1 className="flex -ml-32"><img className='size-6 ' src={NutritionIcon} alt="Nutrition Icon" />AI INTEGRATOR'S</h1>
//           </div>

//           {/* Centered Navigation Links */}
//           <div className="w-7/12 ">
//             <ul className="flex gap-1 text-sm">
//               <li className="hover:bg-gray-700 px-4 py-2 rounded">Home</li>
//               <li className="hover:bg-gray-700 px-4 py-2 rounded">Services</li>
//               <li className="hover:bg-gray-700 px-4 py-2 rounded">Features</li>
//               <li className="hover:bg-gray-700 px-4 py-2 rounded">Testimonials</li>
//               <li className="hover:bg-gray-700 px-4 py-2 rounded">Contact</li>
//               {/* <li className="hover:bg-gray-700 px-4 py-2 rounded">Go To Top</li> */}
//             </ul>
//           </div >
//           <div className="mr-10 text-sm "><ul><li className="hover:bg-gray-700 px-4 py-2 rounded ">Go To Top <FontAwesomeIcon icon={faArrowUp} /></li></ul></div>
//         </div>

//         {/* Contact Information Section */}

//         {/* <div className="flex "> */}
//         <div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-zinc-400  border-white  text-black">
//           <div className="flex items-center w-full text-sm px-2 py-1 rounded gap-[40px] ">
//             <p className="mx-1 ">hello@aiintegrators.com</p>
//             <p className="mx-1">+916264601696</p>
//             <p className="mx-1">Somewhere in the World</p>
//             <div className="mx-1"><p >Ai Integrtor's. All rights reserved</p></div>
//           </div>

//         </div>
//       </nav>
//     </>
//   );
// };

// export default Contact;


import React from 'react';
import NutritionIcon from "../Assets/Nutrition Icon.png"
import Map from "../Assets/Map.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      
      <div className='bg-zinc-800 '>
      <div className="bg-zinc-950 mx-auto max-w-7xl  p-6  flex flex-col justify-center items-center text-white h-auto md:h-[360px] mt-12">
        
        <div className="w-full text-center rounded-2xl">
    <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h1>
    <p className="text-sm md:text-base mb-2">
        We value your feedback, questions, and concerns at Ai Integratorz. Our dedicated team is here to
        assist you and provide the support you need on your journey.
    </p>
    <p className="text-sm md:text-base">
        Please don't hesitate to reach out to us using any of the following contact methods.
    </p>

    <nav className="bg-zinc-600 mt-8 flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0 py-6 md:py-8 rounded-lg">
  <p className="w-full md:w-[300px] text-white py-4 md:py-6 text-center rounded-lg glow-on-hover"
     style={{ background: "linear-gradient(to right, #374151, #4b5563)" }}>
    support@aiintegratorz.com
  </p>
  <p className="w-full md:w-[300px] text-white py-4 md:py-6 text-center rounded-lg glow-on-hover"
     style={{ background: "linear-gradient(to right, #374151, #4b5563)" }}>
    +916264601696
  </p>
  <p className="w-full md:w-[300px] text-white py-4 md:py-6 text-center rounded-lg glow-on-hover"
     style={{ background: "linear-gradient(to right, #374151, #4b5563)" }}>
    Somewhere in the World
  </p>
</nav>

<style jsx>{`
.glow-on-hover {
  transition: all 0.3s ease;
  overflow: hidden; /* Prevent glow from spilling out */
}

.glow-on-hover:hover {
  transform: scale(1.02); /* Optional: Scale up slightly on hover */
  /* Neon Glow - Example: Blue */
  box-shadow: 0 0 10px rgba(0, 173, 239, 0.7),
              0 0 20px rgba(0, 173, 239, 0.5),
              0 0 30px rgba(0, 173, 239, 0.3);
}

.glow-on-hover::before { /* Optional Inner Glow */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 173, 239, 0.2); /* Lighter blue inner glow */
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: inherit;
}

.glow-on-hover:hover::before {
  opacity: 1;
}

/* Optional: Change background on hover (if you want to keep it) */
.glow-on-hover:hover {
   background: linear-gradient(to right, #4b5563, #6b7280); /* Example darker gradient */
}

`}</style>
</div>

        
      </div>

      <div className="flex justify-center mt-16 px-4">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 p-6 lg:p-8 shadow-lg rounded-lg text-white bg-gradient-to-r from-neutral-600 to-neutral-900">

          
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Full Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Phone Number</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-gray-200 font-semibold mb-2 text-sm">Message</label>
              <textarea className="w-full border border-gray-300 p-3 rounded-lg bg-white text-black" placeholder="Write your message" rows="4"></textarea>
            </div>
            <button className="bg-white text-black py-3 rounded-lg hover:bg-lime-200 w-full">Send Message</button>
          </div>

          
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img src={Map} alt="Map" className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover" />
          </div>
        </div>
      </div>




      <div className="max-w-7xl mx-auto bg-zinc-950 shadow-lg rounded-lg p-4 sm:p-6 md:p-8 flex flex-col mt-8 md:mt-12 text-white bg-gradient-to-l from-zinc-800 to-zinc-950">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
          Ready to leverage cutting-edge technology for a smarter and healthier future with AI INTEGRATORZ ?
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
          Join us at Ai Intregratorz and let us guide you on the path to a healthier and happier you.
        </p>

        <div className="flex justify-center md:justify-end">
        <button className="relative bg-zinc-500 text-black py-2 px-4 sm:px-6 rounded-lg glow-on-hover">
  Join Us Now
</button>

<style jsx>{`
.glow-on-hover {
  transition: all 0.3s ease;
  overflow: hidden;
}

.glow-on-hover:hover {
  transform: scale(1.05);
  /* Neon Glow - Example: Blue */
  box-shadow: 0 0 10px rgba(0, 173, 239, 0.7), /* Outer glow */
              0 0 20px rgba(0, 173, 239, 0.5), /* Slightly larger glow */
              0 0 30px rgba(0, 173, 239, 0.3); /* Even larger, fainter glow */
}

.glow-on-hover::before { /* Optional Inner Glow */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(126, 185, 8, 0.2); /* Lighter blue inner glow */
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: inherit;
}

.glow-on-hover:hover::before {
  opacity: 1;
}

/* Optional: You can keep the background color change on hover if you like */
.glow-on-hover:hover {
  background-color:rgb(3,233,244,); /* Darker blue background on hover (optional) */
}
`}</style>
        </div>
      </div>


      <nav className="w-full bg-zinc-950 text-white py-4 md:py-3 h-auto mt-10 md:mt-20">
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
        <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto mt-6 p-3 bg-pink-600 text-black rounded-lg">
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

export default Contact;








