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
import React from 'react';
import { motion } from 'framer-motion';
import M1 from '../Assets/M1.jpg';
import M2 from '../Assets/M2.jpg';
import M5 from '../Assets/M5.jpg';
import M6 from '../Assets/M6.jpg';
import M7 from '../Assets/M7.jpg';
import M8 from '../Assets/M8.jpg';
import M9 from '../Assets/M9.jpg';
import M10 from '../Assets/M10.jpg';
import M11 from '../Assets/M11.jpg';
import M12 from '../Assets/M12.jpg';
import M13 from '../Assets/M13.jpg';
import M20 from '../Assets/M20.jpg';
import M21 from '../Assets/M21.jpg';
import M30 from '../Assets/M30.jpg';
import M31 from '../Assets/M31.jpg';


const teamMembers = [
  { name: 'Preeti Khairwar', role: 'HR Executive ', image: M12 },
  { name: 'Vinay Yadav', role: 'Mern Stack Developer', image: M30},
  { name: 'Anuradha Meena', role: 'Full Stack Developer', image:M9 },
  { name: 'Narayani Badole', role: 'Android Developer', image: M1 },
  
  { name: 'Sakshi Bhadoriya', role: 'Python Developer', image: M20},
  { name: 'Ayushi Sohani', role: 'Android Developer', image: M2 },
  
  { name: 'Uttam Yadav', role: 'Mern Stack Developer', image: M5 },
  { name: 'Sandip Yadav', role: 'Mern Stack Developer', image: M6 },
  { name: 'Shivang Bhargav', role: 'Mern Stack Developer', image: M8 },
  { name: 'Amit Verma', role: 'Frontend Developer', image: M11 },
  
  { name: 'Kedar Yadav', role: 'Frontend Developer', image: M31 },
  { name: 'Member 14', role: 'Product Owner', image: '/images/member14.jpg' },
  { name: 'Member 15', role: 'HR Manager', image: '/images/member15.jpg' },
  { name: 'Member 16', role: 'Support Engineer', image: '/images/member16.jpg' },
  { name: 'Kapil Likhitkar Jhadu Developer', role: 'Sab ka badla lenga re tera Faizal', image: M21 }
  
];

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
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    transition: { duration: 0.3 }
  }
};

const Team = () => {
  return (
    <div className="p-8 bg-gradient-to-l from-zinc-950 to-zinc-700 min-h-screen">
      <motion.h1
        className="text-4xl font-extrabold text-center mb-10 text-slate-300"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Our Professional Team
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform h-[320px] w-[350px] mx-auto"
            custom={index}
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-[230px] h-[230px] object-cover rounded-full mx-auto mt-4 transition-all duration-300 ease-in-out hover:rounded-none"
            />
            <motion.div
              className="p-2 text-center bg-indigo-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
            >
              <motion.h2 className="text-md font-semibold text-indigo-800">
                {member.name}
              </motion.h2>
              <motion.p className="text-sm text-gray-600 mt-1">
                {member.role}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
