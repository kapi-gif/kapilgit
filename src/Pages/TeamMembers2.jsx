// import React from 'react';
// import T1 from "../Assets/team1.jpg";
// import T2 from "../Assets/team2.jpg";
// import T3 from "../Assets/team3.jpg";
// import T4 from "../Assets/team4.jpg";
// import T5 from "../Assets/team5.jpg";
// import T6 from "../Assets/team6.jpg";
// import T7 from "../Assets/team7.jpg";
// import T8 from '../Assets/T8.jpg';
// // import T9 from '../Assets/T9.jpg';
// import T10 from '../Assets/T10.jpg';
// // import T11 from '../Assets/T11.jpg';


// const TeamMembers2 = () => {
//     return (
//         <>
//             <div className='bg-zinc-950'>
//                 <div className="bg-zinc-950 m-10 p-6">
//                     <h1 className="text-2xl font-bold mb-6 text-center text-white mt-[30px]">Our IT Services</h1>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//                         {/* App Development Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T1} alt="App Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">App Development</h2>
//                             <p className="text-sm text-center">
//                                 Our app development team creates innovative, user-friendly mobile apps tailored to your business needs. From idea to execution, we ensure seamless functionality and an engaging user experience.
//                             </p>
//                         </div>

//                         {/* Web Development Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T2} alt="Web Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">Web Development</h2>
//                             <p className="text-sm text-center">
//                                 We build responsive and high-performance websites that enhance user engagement. Whether you're looking for an e-commerce platform or a corporate site, our team has you covered.
//                             </p>
//                         </div>

//                         {/* Digital Marketing Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T3} alt="Digital Marketing" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">Digital Marketing</h2>
//                             <p className="text-sm text-center">
//                                 Our digital marketing strategies drive brand awareness and customer engagement through SEO, PPC, social media, and content marketing to help your business thrive in the online world.
//                             </p>
//                         </div>

//                         {/* Graphic Designing Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T4} alt="Graphic Designing" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">Graphic Designing</h2>
//                             <p className="text-sm text-center">
//                                 Our creative team designs visually stunning graphics that capture your brand’s essence. From logos to brochures, we provide designs that leave a lasting impact on your audience.
//                             </p>
//                         </div>

//                         {/* Game Development Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T5} alt="Game Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">Game Development</h2>
//                             <p className="text-sm text-center">
//                                 We specialize in developing interactive and immersive games for various platforms. Our development process ensures high-quality graphics, smooth gameplay, and engaging user experiences.
//                             </p>
//                         </div>

//                         {/* AI Application Development Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T6} alt="AI Application Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">AI Application Development</h2>
//                             <p className="text-sm text-center">
//                                 Harness the power of AI to build intelligent applications that automate processes, provide insights, and improve decision-making. Our AI solutions are customized to meet your business needs.
//                             </p>
//                         </div>

//                         {/* Web App Development Service */}
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T7} alt="Web App Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">Web App Development</h2>
//                             <p className="text-sm text-center">
//                                 We develop robust and scalable web applications that help businesses streamline operations and engage customers. Our web apps are designed to be fast, secure, and reliable.
//                             </p>
//                         </div>
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T8} alt="Web App Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">E-commerce Application </h2>
//                             <p className="text-sm text-center">
//                                 We build high-performing e-commerce applications that drive sales and enhance the customer experience. Our solutions are designed for scalability, security, and seamless integration.
//                             </p>
//                         </div>
//                         <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 hover:bg-gray-700">
//                             <img src={T10} alt="Web App Development" className="w-40 h-40 mb-4 rounded-lg" />
//                             <h2 className="text-xl font-semibold mb-2">Custom Sofware Development</h2>
//                             <p className="text-sm text-center">
//                                 We develop custom software solutions tailored to meet your unique business needs, helping you streamline operations and achieve your goals.
//                             </p>
                            
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default TeamMembers2;




import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import T1 from "../Assets/team1.jpg";
import T2 from "../Assets/team2.jpg";
import T3 from "../Assets/team3.jpg";
import T4 from "../Assets/team4.jpg";
import T5 from "../Assets/team5.jpg";
import T6 from "../Assets/team6.jpg";
import T7 from "../Assets/team7.jpg";
import T8 from '../Assets/T8.jpg';
import T10 from '../Assets/T10.jpg';

const TeamMembers2 = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, staggerChildren: 0.2, delayChildren: 0.2 }, // Staggered animation
        },
        exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeInOut" } } // Exit animation
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 100 } }, // Spring effect
        hover: { scale: 1.05, y: -5, transition: { duration: 0.2 } } // Hover effect
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <AnimatePresence> {/* For exit animations */}
            <motion.div
                className='bg-zinc-950'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.div
                    className="bg-zinc-950 m-10 p-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.h1
                        className="text-2xl font-bold mb-6 text-center text-white mt-[30px]"
                        initial={{ opacity: 0, y: -20 }} // Start above the viewport
                        animate={{ opacity: 1, y: 0 }} // Animate into place
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        Our IT Services
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[T1, T2, T3, T4, T5, T6, T7, T8, T10].map((image, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-lg relative overflow-hidden"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <motion.img
                                    src={image}
                                    alt={`Service ${index + 1}`}
                                    className="w-40 h-40 mb-4 rounded-lg"
                                    variants={imageVariants}
                                />
                                <h2 className="text-xl font-semibold mb-2">
                                    {["App Development", "Web Development", "Digital Marketing", "Graphic Designing", "Game Development", "AI Application Development", "Web App Development", "E-commerce Application", "Custom Sofware Development"][index]}
                                </h2>
                                <p className="text-sm text-center">
                                    {/* Replace with your actual descriptions */}
                                    {[
                                        "Our app development team creates innovative, user-friendly mobile apps tailored to your business needs. From idea to execution, we ensure seamless functionality and an engaging user experience.",
                                        "We build responsive and high-performance websites that enhance user engagement. Whether you're looking for an e-commerce platform or a corporate site, our team has you covered.",
                                        "Our digital marketing strategies drive brand awareness and customer engagement through SEO, PPC, social media, and content marketing to help your business thrive in the online world.",
                                        "Our creative team designs visually stunning graphics that capture your brand’s essence. From logos to brochures, we provide designs that leave a lasting impact on your audience.",
                                        "We specialize in developing interactive and immersive games for various platforms. Our development process ensures high-quality graphics, smooth gameplay, and engaging user experiences.",
                                        "Harness the power of AI to build intelligent applications that automate processes, provide insights, and improve decision-making. Our AI solutions are customized to meet your business needs.",
                                        "We develop robust and scalable web applications that help businesses streamline operations and engage customers. Our web apps are designed to be fast, secure, and reliable.",
                                        "We build high-performing e-commerce applications that drive sales and enhance the customer experience. Our solutions are designed for scalability, security, and seamless integration.",
                                        "We develop custom software solutions tailored to meet your unique business needs, helping you streamline operations and achieve your goals."
                                    ][index]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default TeamMembers2;