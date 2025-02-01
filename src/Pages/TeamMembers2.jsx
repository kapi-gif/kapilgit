import React from 'react';
import T1 from "../Assets/team1.jpg";
import T2 from "../Assets/team2.jpg";
import T3 from "../Assets/team3.jpg";
import T4 from "../Assets/team4.jpg";
import T5 from "../Assets/team5.jpg";
import T6 from "../Assets/team6.jpg";
import T7 from "../Assets/team7.jpg";

const TeamMembers2 = () => {
  return (
    <>
    <div className="bg-zinc-950 m-[50px] p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Our IT Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* App Development Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T1} alt="App Development" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">App Development</h2>
                <p className="text-sm text-center">
                    Our app development team creates innovative, user-friendly mobile apps tailored to your business needs. From idea to execution, we ensure seamless functionality and an engaging user experience.
                </p>
            </div>

            {/* Web Development Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T2} alt="Web Development" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">Web Development</h2>
                <p className="text-sm text-center">
                    We build responsive and high-performance websites that enhance user engagement. Whether you're looking for an e-commerce platform or a corporate site, our team has you covered.
                </p>
            </div>

            {/* Digital Marketing Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T3} alt="Digital Marketing" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">Digital Marketing</h2>
                <p className="text-sm text-center">
                    Our digital marketing strategies drive brand awareness and customer engagement through SEO, PPC, social media, and content marketing to help your business thrive in the online world.
                </p>
            </div>

            {/* Graphic Designing Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T4} alt="Graphic Designing" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">Graphic Designing</h2>
                <p className="text-sm text-center">
                    Our creative team designs visually stunning graphics that capture your brand’s essence. From logos to brochures, we provide designs that leave a lasting impact on your audience.
                </p>
            </div>

            {/* Game Development Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T5} alt="Game Development" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">Game Development</h2>
                <p className="text-sm text-center">
                    We specialize in developing interactive and immersive games for various platforms. Our development process ensures high-quality graphics, smooth gameplay, and engaging user experiences.
                </p>
            </div>

            {/* AI Application Development Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T6} alt="AI Application Development" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">AI Application Development</h2>
                <p className="text-sm text-center">
                    Harness the power of AI to build intelligent applications that automate processes, provide insights, and improve decision-making. Our AI solutions are customized to meet your business needs.
                </p>
            </div>

            {/* Web App Development Service */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                <img src={T7} alt="Web App Development" className="w-40 h-40 mb-4 rounded-lg"/>
                <h2 className="text-xl font-semibold mb-2">Web App Development</h2>
                <p className="text-sm text-center">
                    We develop robust and scalable web applications that help businesses streamline operations and engage customers. Our web apps are designed to be fast, secure, and reliable.
                </p>
            </div>

        </div>
    </div>
    </>
  )
}
export default TeamMembers2;
