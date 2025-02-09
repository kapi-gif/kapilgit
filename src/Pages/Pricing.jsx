// import React from 'react';
// import { motion } from 'framer-motion';
// import M1 from '../Assets/M1.jpg';

// const teamMembers = [
//   { name: 'Narayani Badole', image: M1 },
//   { name: 'Ayushi ', image: '/images/M1.jpg' },
//   { name: 'Amit Verma', image: '/images/member3.jpg' },
//   { name: 'Anuj Verma', image: '/images/member4.jpg' },
//   { name: 'Kapil Likhitkar', image: '/images/member5.jpg' },
//   { name: 'Anuradha Meena', image: '/images/member6.jpg' },
//   { name: 'Rahul Patidar', image: '/images/member7.jpg' },
//   { name: 'Member 8', image: '/images/member8.jpg' },
//   { name: 'Member 9', image: '/images/member9.jpg' },
//   { name: 'Member 10', image: '/images/member10.jpg' },
//   { name: 'Member 11', image: '/images/member11.jpg' },
//   { name: 'Member 12', image: '/images/member12.jpg' },
//   { name: 'Member 13', image: '/images/member13.jpg' },
//   { name: 'Member 14', image: '/images/member14.jpg' },
//   { name: 'Member 15', image: '/images/member15.jpg' },
//   { name: 'Member 16', image: '/images/member16.jpg' }
// ];

// const Team = () => {
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
//             <div className="p-4 text-center">
//               <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;

// import React from 'react';
// import { motion } from 'framer-motion';
// import M1 from '../Assets/M1.jpg';
// import M2 from '../Assets/M2.jpg';
// import M3 from '../Assets/M3.jpg';
// import M5 from '../Assets/M5.jpg';
// import M6 from '../Assets/M6.jpg';
// import M7 from '../Assets/M7.jpg';
// import M8 from '../Assets/M8.jpg';

// const teamMembers = [
//   { name: 'Narayani Badole', image: M1 },
//   { name: 'Ayushi', image: M3 },
//   { name: 'Amit Verma', image: M2 },
//   { name: 'Uttam Yadav', image:M5 },
//   { name: 'Sandip Yadav', image:M6},
//   { name: 'Anuradha', image:M7 },
//   { name: 'Shivang Bhargav', image: M8 },
//   { name: 'Member 8', image: '/images/member8.jpg' },
//   { name: 'Member 9', image: '/images/member9.jpg' },
//   { name: 'Member 10', image: '/images/member10.jpg' },
//   { name: 'Member 11', image: '/images/member11.jpg' },
//   { name: 'Member 12', image: '/images/member12.jpg' },
//   { name: 'Member 13', image: '/images/member13.jpg' },
//   { name: 'Member 14', image: '/images/member14.jpg' },
//   { name: 'Member 15', image: '/images/member15.jpg' },
//   { name: 'Member 16', image: '/images/member16.jpg' }
// ];

// const cardVariants = {
//   offscreen: (index) => ({
//     opacity: 0,
//     y: index % 2 === 0 ? 50 : -50,
//     scale: 0.8,
//   }),
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       bounce: 0.4,
//       duration: 0.8
//     }
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//     transition: { duration: 0.3 }
//   }
// };

// const Team = () => {
//   return (
//     <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-100 min-h-screen">
//       <motion.h1
//         className="text-4xl font-extrabold text-center mb-10 text-indigo-900"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Our Professional Team
//       </motion.h1>

//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform"
//             custom={index}
//             initial="offscreen"
//             whileInView="onscreen"
//             whileHover="hover"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={cardVariants}
//           >
//             <motion.img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-48 object-cover "
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.1, rotate: 2 }}
//               transition={{ duration: 0.4 }}
//             />
//             <motion.div className="p-4 text-center bg-indigo-50">
//               <motion.h2
//                 className="text-xl font-semibold text-indigo-800 relative"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {member.name}
//                 <motion.div
//                   className="h-1 bg-indigo-500 rounded-full w-0 mx-auto mt-1"
//                   whileHover={{ width: '50%' }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.h2>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;



// import React from 'react';
// import { motion } from 'framer-motion';
// import M1 from '../Assets/M1.jpg';
// import M2 from '../Assets/M2.jpg';
// import M5 from '../Assets/M5.jpg';
// import M6 from '../Assets/M6.jpg';
// import M7 from '../Assets/M7.jpg';
// import M8 from '../Assets/M8.jpg';
// import M9 from '../Assets/M9.jpg';
// import M10 from '../Assets/M10.jpg';
// import M11 from '../Assets/M11.jpg';
// import M12 from '../Assets/M12.jpg';
// import M13 from '../Assets/M13.jpg';
// import M20 from '../Assets/M20.jpg';
// import M21 from '../Assets/M21.jpg';
// import M30 from '../Assets/M30.jpg';
// import M31 from '../Assets/M31.jpg';
// import M32 from '../Assets/M32.jpg';


// const teamMembers = [
//   { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
//   { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30},
//   { name: 'Anuradha Meena', role: 'Full Stack Developer', image:M9 },


//   { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
//   { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20},
//   { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },

//   { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
//   { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
//   { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },

//   { name: 'Amit Verma', role: 'Frontend Developer', image: M11 },
//   { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
//   { name: 'Member 14', role: 'Product Owner', image:M32 },

//   { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
//   // { name: 'Member 16', role: 'Support Engineer', image: '/images/member16.jpg' },
//   { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 }

// ];

// const cardVariants = {
//   offscreen: (index) => ({
//     opacity: 0,
//     y: index % 2 === 0 ? 50 : -50,
//     scale: 0.8,
//   }),
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       bounce: 0.4,
//       duration: 0.8
//     }
//   },
//   hover: {
//     scale: 1.05,
//     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//     transition: { duration: 0.3 }
//   }
// };

// const Team = () => {
//   return (
//     <div className="p-8 bg-gradient-to-l from-zinc-950 to-zinc-700 min-h-screen">
//       <motion.h1
//         className="text-4xl font-extrabold text-center mb-10 text-slate-300"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Our Professional Team
//       </motion.h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform h-[320px] w-[350px] mx-auto"
//             custom={index}
//             initial="offscreen"
//             whileInView="onscreen"
//             whileHover="hover"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={cardVariants}
//           >
//             <motion.img
//               src={member.image}
//               alt={member.name}
//               className="w-[230px] h-[230px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none"
//             />
//             <motion.div
//               className="p-2 text-center bg-indigo-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
//             >
//               <motion.h2 className="text-md font-semibold text-indigo-800">
//                 {member.name}
//               </motion.h2>
//               <motion.p className="text-sm text-gray-600 mt-1">
//                 {member.role}
//               </motion.p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;





// import React from 'react';
// import { motion } from 'framer-motion';
// import M1 from '../Assets/M1.jpg';
// import M2 from '../Assets/M2.jpg';
// import M5 from '../Assets/M5.jpg';
// import M6 from '../Assets/M6.jpg';
// import M7 from '../Assets/M7.jpg';
// import M8 from '../Assets/M8.jpg';
// import M9 from '../Assets/M9.jpg';
// import M10 from '../Assets/M10.jpg';
// import M11 from '../Assets/M11.jpg';
// import M12 from '../Assets/M12.jpg';
// import M13 from '../Assets/M13.jpg';
// import M20 from '../Assets/M20.jpg';
// import M21 from '../Assets/M21.jpg';
// import M30 from '../Assets/M30.jpg';
// import M31 from '../Assets/M31.jpg';
// import M32 from '../Assets/M32.jpg';


// const teamMembers = [
//   { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
//   { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30 },
//   { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },


//   { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
//   { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20 },
//   { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },

//   { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
//   { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
//   { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },

//   { name: 'Amit Verma', role: 'Frontend Developer', image: M11 },
//   { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
//   { name: 'Member 14', role: 'Product Owner', image: M32 },

//   { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
//   { name: 'Member 16', role: 'Support Engineer', image: '/images/member16.jpg' },
//   { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 }

// ];
// const cardVariants = {
//     offscreen: (index) => ({
//       opacity: 0,
//       y: index % 2 === 0 ? 50 : -50,
//       scale: 0.8,
//     }),
//     onscreen: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: 'spring',
//         bounce: 0.4,
//         duration: 0.8
//       }
//     },
//     hover: {
//       scale: 1.05,
//       boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//       transition: { duration: 0.3 }
//     }
//   };
// const Team = () => {
//   return (
//     <div className="p-8 bg-gradient-to-l from-zinc-950 to-zinc-700 min-h-screen">
//       {/* ... (your heading) */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform h-[320px] w-[350px] mx-auto relative" // Added relative for absolute positioning
//             custom={index}
//             initial="offscreen"
//             whileInView="onscreen"
//             whileHover="hover"
//             viewport={{ once: true, amount: 0.7 }}
//             variants={cardVariants}
//           >
//             <motion.img
//               src={member.image}
//               alt={member.name}
//               className="w-[230px] h-[230px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none"
//             />
//             <div 
//               className="absolute bottom-0 left-0 right-0 p-2 text-center bg-indigo-50" // Absolute positioning and removed opacity transition
//             >
//               <h2 className="text-md font-semibold text-indigo-800">
//                 {member.name}
//               </h2>
//               <p className="text-sm text-gray-600 mt-1">
//                 {member.role}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Team;


// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import M1 from '../Assets/M1.jpg';
// import M2 from '../Assets/M2.jpg';
// import M5 from '../Assets/M5.jpg';
// import M6 from '../Assets/M6.jpg';
// import M7 from '../Assets/M7.jpg';
// import M8 from '../Assets/M8.jpg';
// import M9 from '../Assets/M9.jpg';
// import M10 from '../Assets/M10.jpg';
// import M11 from '../Assets/M11.jpg';
// import M12 from '../Assets/M12.jpg';
// import M13 from '../Assets/M13.jpg';
// import M20 from '../Assets/M20.jpg';
// import M21 from '../Assets/M21.jpg';
// import M30 from '../Assets/M30.jpg';
// import M31 from '../Assets/M31.jpg';
// import M32 from '../Assets/M32.jpg';

// const teamMembers = [
//   { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
//   { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30 },
//   { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },
//   { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
//   { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20 },
//   { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },
//   { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
//   { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
//   { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },
//   { name: 'Amit Verma', role: 'Frontend Developer', image: M11 },
//   { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
//   { name: 'Member 14', role: 'Product Owner', image: M32 },
//   { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
//   { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 },
// ];

// const cardVariants = {
//   offscreen: (index) => ({
//     opacity: 0,
//     y: index % 2 === 0 ? 50 : -50,
//     scale: 0.8,
//   }),
//   onscreen: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: 'spring',
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.3 },
//   },
// };

// const imageVariants = {
//   hover: {
//     scale: 1.1,
//     transition: { duration: 0.3 },
//   },
// };

// const Team = () => {
//   return (
//     <div className="p-8 bg-gradient-to-l from-zinc-950 to-zinc-700 min-h-screen">
//       <div className="max-w-7xl mx-auto mb-16 text-center">
//         <h1 className="text-4xl font-extrabold text-slate-300 mb-4">
//           Our Professional Team
//         </h1>
//         <p className="text-lg text-gray-400">
//           We are a team of dedicated professionals passionate about building
//           innovative solutions. Learn more about our talented members below.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         <AnimatePresence>
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform h-[320px] w-[350px] mx-auto relative"
//               custom={index}
//               initial="offscreen"
//               whileInView="onscreen"
//               whileHover="hover"
//               exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
//               viewport={{ once: true, amount: 0.7 }}
//               variants={cardVariants}
//             >
//               <motion.img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-[230px] h-[230px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none"
//                 variants={imageVariants}
//                 whileHover="hover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-indigo-50">
//                 <h2 className="text-md font-semibold text-indigo-800">
//                   {member.name}
//                 </h2>
//                 <p className="text-sm text-gray-600 mt-1">
//                   {member.role}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Team;



import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import M1 from '../Assets/M1.jpg';
import M2 from '../Assets/M2.jpg';
import M5 from '../Assets/M5.jpg';
import M6 from '../Assets/M6.jpg';

import M8 from '../Assets/M8.jpg';
import M9 from '../Assets/M9.jpg';
import M11 from '../Assets/M11.jpg';
import M12 from '../Assets/M12.jpg';
import M13 from '../Assets/M13.jpg';
import M20 from '../Assets/M20.jpg';
import M21 from '../Assets/M21.jpg';
import M30 from '../Assets/M30.jpg';
import M31 from '../Assets/M31.jpg';
import M32 from '../Assets/M32.jpg';
import M33 from '../Assets/M33.jpg';
import M34 from '../Assets/M34.jpg';
import FounderImage from '../Assets/Ai4.png';

const teamMembers = [
  { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
  { name: 'Yogesh Rathore', role: 'Full Stack Developer', image: M33 },
  { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 },
  { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },
  { name: 'Amit Verma', role: 'Mern Stack Developer ', image: M11 },
  { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20 },
  { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
  { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },
  { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30 },
  { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
  { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
  { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },
  { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
  { name: 'Anuj Verma', role: 'Backend Developer', image: M32 },
  { name: 'Vishal Yadav', role: 'Java Developer', image: M34 },
  { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  offscreen: (index) => ({
    opacity: 0,
    y: index % 2 === 0 ? 50 : -50,
    scale: 0.8,
  }),
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.08,
    y: -5,
    transition: { duration: 0.2 },
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
  },
};

const imageVariants = {
  hover: {
    transition: { duration: 0.2 },
    filter: "grayscale(20%)",
  },
};

const founderImageVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
    rotate: 5,
  }
};

const founderTextVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  }
};

const Team = () => {
  return (
    <div className="p-8 bg-gradient-to-l from-zinc-950 to-zinc-700 min-h-screen">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-300 mb-4">
          Our Professional Team
        </h1>
        <p className="text-lg text-gray-400">
          We are a team of dedicated professionals passionate about building
          innovative solutions. Learn more about our talented members below.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Founder's Box */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-3 bg-gray-800 rounded-xl p-6 flex items-center relative overflow-hidden"
          whileHover="hover"
          variants={founderTextVariants}
        >
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden mr-6 transition-all duration-300"
            variants={founderImageVariants}
            whileHover="hover"
          >
            <img
              src={FounderImage}
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className='ml-[40px]'>
            <h2 className="text-2xl font-semibold mb-2 text-slate-100">Kanhaiya Meena</h2>
            <h2 className='text-white'>Founder of AI INTREGRATORZ</h2>
            <p className='text-gray-300 text-xs'>
              Kanhaiya Meena is a visionary and dedicated founder.<br/> He has a deep understanding of the AI field and is committed<br/> to taking AI INTEGRATORS to new heights.
               Under his leadership,<br/> the team is constantly working towards innovation and excellence.<br/> Kanhaiya Meena is not only a great founder but also an inspiring<br/> 
               person who always motivates his team to do their best. <br/>His positivity and passion are the key to AI INTEGRATORS' success.
            </p>
          </div>
        </motion.div>

        <AnimatePresence>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform h-[320px] w-[250px] mx-auto relative group"
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.7 }}
              variants={cardVariants}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-[200px] h-[200px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none group-hover:scale-115"
                variants={imageVariants}
                whileHover={{ scale: 1.15, filter: "grayscale(20%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-indigo-300">
                <h2 className="text-md font-semibold text-indigo-800">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Team;