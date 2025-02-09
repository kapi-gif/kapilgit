
// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import M1 from '../Assets/M1.jpg';
// import M2 from '../Assets/M2.jpg';
// import M5 from '../Assets/M5.jpg';
// import M6 from '../Assets/M6.jpg';

// import M8 from '../Assets/M8.jpg';
// import M9 from '../Assets/M9.jpg';
// import M11 from '../Assets/M11.jpg';
// import M12 from '../Assets/M12.jpg';
// import M13 from '../Assets/M13.jpg';
// import M20 from '../Assets/M20.jpg';
// import M21 from '../Assets/M21.jpg';
// import M30 from '../Assets/M30.jpg';
// import M31 from '../Assets/M31.jpg';
// import M32 from '../Assets/M32.jpg';
// import M33 from '../Assets/M33.jpg';
// import M34 from '../Assets/M34.jpg';
// import FounderImage from '../Assets/Ai4.png';

// const teamMembers = [
//   { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
//   { name: 'Yogesh Rathore', role: 'Full Stack Developer', image: M33 },
//   { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 },
//   { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },
//   { name: 'Amit Verma', role: 'Mern Stack Developer ', image: M11 },
//   { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20 },
//   { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
//   { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },
//   { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30 },
//   { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
//   { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
//   { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },
//   { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
//   { name: 'Anuj Verma', role: 'Backend Developer', image: M32 },
//   { name: 'Vishal Yadav', role: 'Java Developer', image: M34 },
//   { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
  
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 1, staggerChildren: 0.2 },
//   },
// };

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
//       bounce: 0.2,
//       duration: 0.6,
//     },
//   },
//   hover: {
//     scale: 1.08,
//     y: -5,
//     transition: { duration: 0.2 },
//     boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
//   },
// };

// const imageVariants = {
//   hover: {
//     transition: { duration: 0.2 },
//     filter: "grayscale(20%)",
//   },
// };

// const founderImageVariants = {
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.2 },
//     rotate: 5,
//   }
// };

// const founderTextVariants = {
//   hover: {
//     scale: 1.02,
//     transition: { duration: 0.2 },
//   }
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

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Founder's Box */}
//         <motion.div
//           className="col-span-1 sm:col-span-2 md:col-span-3 bg-gray-800 rounded-xl p-6 flex items-center relative overflow-hidden"
//           whileHover="hover"
//           variants={founderTextVariants}
//         >
//           <motion.div
//             className="w-48 h-48 rounded-full overflow-hidden mr-6 transition-all duration-300"
//             variants={founderImageVariants}
//             whileHover="hover"
//           >
//             <img
//               src={FounderImage}
//               alt="Founder"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <div className='ml-[40px]'>
//             <h2 className="text-2xl font-semibold mb-2 text-slate-100">Kanhaiya Meena</h2>
//             <h2 className='text-white'>Founder of AI INTREGRATORZ</h2>
//             <p className='text-gray-300 text-xs'>
//               Kanhaiya Meena is a visionary and dedicated founder.<br/> He has a deep understanding of the AI field and is committed<br/> to taking AI INTEGRATORS to new heights.
//                Under his leadership,<br/> the team is constantly working towards innovation and excellence.<br/> Kanhaiya Meena is not only a great founder but also an inspiring<br/> 
//                person who always motivates his team to do their best. <br/>His positivity and passion are the key to AI INTEGRATORS' success.
//             </p>
//           </div>
//         </motion.div>

//         <AnimatePresence>
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform h-[320px] w-[250px] mx-auto relative group"
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
//                 className="w-[200px] h-[200px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none group-hover:scale-115"
//                 variants={imageVariants}
//                 whileHover={{ scale: 1.15, filter: "grayscale(20%)" }}
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-indigo-300">
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
//       </motion.div>
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
// import M8 from '../Assets/M8.jpg';
// import M9 from '../Assets/M9.jpg';
// import M11 from '../Assets/M11.jpg';
// import M12 from '../Assets/M12.jpg';
// import M13 from '../Assets/M13.jpg';
// import M20 from '../Assets/M20.jpg';
// import M21 from '../Assets/M21.jpg';
// import M30 from '../Assets/M30.jpg';
// import M31 from '../Assets/M31.jpg';
// import M32 from '../Assets/M32.jpg';
// import M33 from '../Assets/M33.jpg';
// import M34 from '../Assets/M34.jpg';
// import FounderImage from '../Assets/Ai4.png';

// const teamMembers = [
//   { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
//   { name: 'Yogesh Rathore', role: 'Full Stack Developer', image: M33 },
//   { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 },
//   { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },
//   { name: 'Amit Verma', role: 'Mern Stack Developer ', image: M11 },
//   { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20 },
//   { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
//   { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },
//   { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30 },
//   { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
//   { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
//   { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },
//   { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
//   { name: 'Anuj Verma', role: 'Backend Developer', image: M32 },
//   { name: 'Vishal Yadav', role: 'Java Developer', image: M34 },
//   { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 1, staggerChildren: 0.2 },
//   },
// };

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
//       bounce: 0.2,
//       duration: 0.6,
//     },
//   },
//   hover: {
//     scale: 1.08,
//     y: -5,
//     transition: { duration: 0.2 },
//     boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
//   },
// };

// const imageVariants = {
//   hover: {
//     transition: { duration: 0.2 },
//     filter: "grayscale(20%)",
//   },
// };

// const founderImageVariants = {
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.2 },
//     rotate: 5,
//   }
// };

// const founderTextVariants = {
//   hover: {
//     scale: 1.02,
//     transition: { duration: 0.2 },
//   }
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

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Founder's Box */}
//         <motion.div
//           className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-gray-800 rounded-xl p-6 flex items-center relative overflow-hidden"
//           whileHover="hover"
//           variants={founderTextVariants}
//         >
//           <motion.div
//             className="w-48 h-48 rounded-full overflow-hidden mr-6 transition-all duration-300"
//             variants={founderImageVariants}
//             whileHover="hover"
//           >
//             <img
//               src={FounderImage}
//               alt="Founder"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <div>
//             <h2 className="text-2xl font-semibold mb-2 text-slate-100">Kanhaiya Meena</h2>
//             <h2 className='text-white'>Founder of AI INTREGRATORZ</h2>
//             <p className='text-gray-300 text-xs'>
//               Kanhaiya Meena is a visionary and dedicated founder.<br /> He has a deep understanding of the AI field and is committed<br /> to taking AI INTEGRATORS to new heights.
//               Under his leadership,<br /> the team is constantly working towards innovation and excellence.<br /> Kanhaiya Meena is not only a great founder but also an inspiring<br />
//               person who always motivates his team to do their best. <br />His positivity and passion are the key to AI INTEGRATORS' success.
//             </p>
//           </div>
//         </motion.div>

//         <AnimatePresence>
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform relative group"
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
//                 className="w-[200px] h-[200px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none group-hover:scale-115"
//                 variants={imageVariants}
//                 whileHover={{ scale: 1.15, filter: "grayscale(20%)" }}
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-indigo-300">
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
//       </motion.div>
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
// import M8 from '../Assets/M8.jpg';
// import M9 from '../Assets/M9.jpg';
// import M11 from '../Assets/M11.jpg';
// import M12 from '../Assets/M12.jpg';
// import M13 from '../Assets/M13.jpg';
// import M20 from '../Assets/M20.jpg';
// import M21 from '../Assets/M21.jpg';
// import M30 from '../Assets/M30.jpg';
// import M31 from '../Assets/M31.jpg';
// import M32 from '../Assets/M32.jpg';
// import M33 from '../Assets/M33.jpg';
// import M34 from '../Assets/M34.jpg';
// import FounderImage from '../Assets/Ai4.png';

// const teamMembers = [
//   { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
//   { name: 'Yogesh Rathore', role: 'Full Stack Developer', image: M33 },
//   { name: 'Kapil Likhitkar ', role: 'Mern Stack Developer', image: M21 },
//   { name: 'Amit Verma', role: 'Mern Stack Developer ', image: M11 },
//   { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },
  
//   { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20 },
//   { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
//   { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },
//   { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30 },
//   { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
//   { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
//   { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },
//   { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
//   { name: 'Anuj Verma', role: 'Backend Developer', image: M32 },
//   { name: 'Vishal Yadav', role: 'Java Developer', image: M34 },
//   { name: 'Rahul Patidar', role: 'Java Developer', image: M13 },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 1, staggerChildren: 0.2 },
//   },
// };

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
//       bounce: 0.2,
//       duration: 0.6,
//     },
//   },
//   hover: {
//     scale: 1.08,
//     y: -5,
//     transition: { duration: 0.2 },
//     boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)"
//   },
// };

// const imageVariants = {
//   hover: {
//     transition: { duration: 0.2 },
//     filter: "grayscale(20%)",
//   },
// };

// const founderImageVariants = {
//   hover: {
//     scale: 1.05,
//     transition: { duration: 0.2 },
//     rotate: 5,
//   }
// };

// const founderTextVariants = {
//   hover: {
//     scale: 1.02,
//     transition: { duration: 0.2 },
//   }
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

//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Founder's Box */}
//         <motion.div
//           className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-gray-800 rounded-xl p-6 flex flex-wrap items-center relative overflow-hidden"
//           whileHover="hover"
//           variants={founderTextVariants}
//         >
//           <motion.div
//             className="w-48 h-48 rounded-full overflow-hidden mr-6"
//             variants={founderImageVariants}
//             whileHover="hover"
//           >
//             <img
//               src={FounderImage}
//               alt="Founder"
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <div className="flex-grow">
//             <h2 className="text-2xl font-semibold mb-2 text-slate-100">Kanhaiya Meena</h2>
//             <h2 className='text-white'>Founder of AI INTREGRATORZ</h2>
//             <p className='text-gray-300 text-xs break-words'>
//               Kanhaiya Meena is a visionary and dedicated founder.<br /> He has a deep understanding of the AI field and is committed<br /> to taking AI INTEGRATORS to new heights.
//               Under his leadership,<br /> the team is constantly working towards innovation and excellence.<br /> Kanhaiya Meena is not only a great founder but also an inspiring<br />
//               person who always motivates his team to do their best. <br />His positivity and passion are the key to AI INTEGRATORS' success.
//             </p>
//           </div>
//         </motion.div>

//         <AnimatePresence>
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform relative group"
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
//                 className="w-[200px] h-[200px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none group-hover:scale-115"
//                 variants={imageVariants}
//                 whileHover={{ scale: 1.15, filter: "grayscale(20%)" }}
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-indigo-300">
//                 <h2 className="text-md font-semibold text-indigo-800 break-words">
//                   {member.name}
//                 </h2>
//                 <p className="text-sm text-gray-600 mt-1 break-words">
//                   {member.role}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//     );
//     };
    
//    export default Team;
    


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
  { name: 'Amit Verma', role: 'Mern Stack Developer ', image: M11 },
  { name: 'Anuradha Meena', role: 'Full Stack Developer', image: M9 },
  
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
          className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-gray-800 rounded-xl p-6 flex flex-wrap items-center relative overflow-hidden"
          whileHover="hover"
          variants={founderTextVariants}
        >
          <motion.div
            className="w-48 h-48 rounded-full overflow-hidden mr-6"
            variants={founderImageVariants}
            whileHover="hover"
          >
            <img
              src={FounderImage}
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold mb-2 text-slate-100">Kanhaiya Meena</h2>
            <h2 className='text-white'>Founder of AI INTREGRATORZ</h2>
            <p className='text-gray-300 text-xs break-words'>
              Kanhaiya Meena is a visionary and dedicated founder.<br /> He has a deep understanding of the AI field and is committed<br /> to taking AI INTEGRATORS to new heights.
              Under his leadership,<br /> the team is constantly working towards innovation and excellence.<br /> Kanhaiya Meena is not only a great founder but also an inspiring<br />
              person who always motivates his team to do their best. <br />His positivity and passion are the key to AI INTEGRATORS' success.
            </p>
          </div>
        </motion.div>

        <AnimatePresence>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform relative group"
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
                <h2 className="text-md font-semibold text-indigo-800 break-words">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1 break-words">
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