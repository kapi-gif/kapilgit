// import React from 'react';
// import { Link } from 'react-router-dom';
// import NutritionIcon from "../Assets/Nutrition Icon.png";

// const Header = () => {
//   return (
//     <nav className="bg-zinc-950 text-white py-4">
//       {/* <h3 className="flex justify-center items-center m-1.5 ml-4 text-2xl text-center md:text-3xl ">
//         Innovate Today, Dominate Tomorrow
//       </h3> */}
//       <h3 className="flex justify-center items-center m-1.5 ml-4 text-2xl text-center md:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
//         Innovate Today, Dominate Tomorrow
//       </h3>
//       {/* <h3 className="flex justify-center items-center m-1.5 ml-4 text-2xl text-center md:text-3xl bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-transparent bg-clip-text">
//   Innovate Today, Dominate Tomorrow
// </h3> */}


//       <hr className="my-2 border-t border-gray-400" />
//       <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4">
//         <li className="logo text-3xl gap-2 font-semibold flex items-center mb-2 md:mb-0">
//           <img className="size-8 mr-2" src={NutritionIcon} alt="Nutrition Icon" />
//           AI INTEGRATORZ
//         </li>
//         <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center w-full md:w-auto justify-center text-lg">
//           <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/">Home</Link>
//           <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/about2">About</Link>
//           <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/TeamMembers2">Services</Link>
//           <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/process">Process</Link>
//           <Link className="hover:bg-pink-600 px-2 py-2 rounded text-center" to="/blog">Blog</Link>
//           <Link to="/contact">
//             <button className="bg-lime-600 text-white px-4 py-1 rounded-md text-sm hover:bg-pink-600">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React from 'react';
import { Link } from 'react-router-dom';
import NutritionIcon from "../Assets/Nutrition Icon.png";

const Header = () => {
  return (
    <nav className="bg-zinc-950 text-white py-4 relative ">
      <h3 className="flex justify-center items-center m-1.5 ml-4 text-2xl text-center md:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-title">
        Innovate Today, Dominate Tomorrow
      </h3>

      <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 to-red-500 animate-underline mt-2"></div> {/* Animated Underline */}

      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4 relative">
        <Link to="/" className="logo text-3xl gap-2 font-semibold flex items-center mb-2 md:mb-0 transition duration-300 hover:scale-105">
          <img className="size-8 mr-2" src={NutritionIcon} alt="Nutrition Icon" />
          AI INTEGRATORZ
        </Link>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center w-full md:w-auto justify-center text-lg mt-[5px]">
          <Link to="/" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center ">Home</Link>
          <Link to="/about2" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">About</Link>
          <Link to="/TeamMembers2" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Services</Link>
          <Link to="/process" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Process</Link>
          <Link to="/blog" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Blog</Link>
          <Link to="/pricing" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Our Team </Link>
          <Link to="/contact">
            <button className="bg-lime-600 text-white px-4 py-1 rounded-md text-sm hover:bg--600 transition duration-300 animate-pulse">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .animate-title {
          animation: color-change 3s linear infinite alternate;
        }

        @keyframes color-change {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }

        .nav-link {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .nav-link:hover {
          // transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .animate-underline {
          animation: underline-move  linear infinite;
        }

        @keyframes underline-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </nav>
  );
};

export default Header;

