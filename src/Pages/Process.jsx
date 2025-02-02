import React from 'react'
import ITIcon from "../Assets/B1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import NutritionIcon from "../Assets/Nutrition Icon.png"

const steps = [
    { id: 1, title: "Initial Consultation", description: "We begin by scheduling a consultation to understand your business needs and challenges, either through a virtual meeting or in person. During this session, we will assess your goals and discuss how our IT solutions can best serve you.", icon: "💻" },
    { id: 2, title: "Understanding Your Business", description: "Our team of experts will perform a thorough analysis of your business operations, identifying pain points, opportunities for optimization, and the best IT solutions to streamline your processes.", icon: "📊" },
    { id: 3, title: "Customized IT Solution Plan", description: "Based on the analysis, we will create a tailored IT strategy designed to meet your specific requirements, incorporating the latest technology and industry best practices.", icon: "🖥️" },
    { id: 4, title: "Solution Design and Development", description: "Our developers and engineers will work closely with you to design and implement the right solutions for your business, ensuring seamless integration with your existing infrastructure.", icon: "⚙️" },
    { id: 5, title: "Deployment and Integration", description: "Once the solution is ready, we deploy and integrate it within your existing IT environment, ensuring smooth functionality across all systems and departments.", icon: "🚀" },
    { id: 6, title: "Ongoing Support", description: "Our IT support team is always available to assist with troubleshooting, maintenance, and upgrades, ensuring your systems stay up-to-date and running smoothly.", icon: "📞" },
    { id: 7, title: "System Monitoring", description: "We monitor your systems proactively to identify potential issues before they impact your business, ensuring maximum uptime and reliability.", icon: "🔍" },
    { id: 8, title: "Client Training and Resources", description: "We provide training and resources to ensure your team is well-equipped to make the most of the new systems and tools, empowering them to work efficiently.", icon: "📚" },
    { id: 9, title: "Continuous Improvement", description: "We continually assess and fine-tune your IT solutions, making adjustments as needed to keep up with changes in your business environment and technology landscape.", icon: "🔧" },
    { id: 10, title: "Long-Term IT Partnership", description: "Our ultimate goal is to build a long-term partnership with your business, ensuring we continue to deliver value and adapt your IT strategy as your business grows.", icon: "🌍" },
];

const Process = () => {
    return (
        <>
            <div>
                <div className="bg-zinc-950 text-center p-8 m-4 md:m-10 text-white"> 
                    <img
                        className="size-10 mx-auto mt-16 md:mt-20" 
                        src={ITIcon}
                        alt="IT Icon"
                    />
                    <h1 className="text-2xl font-bold mt-8 md:mt-10 px-4"> 
                        Your Journey to IT Excellence
                    </h1>
                    <p className="px-4 md:px-10 mt-4 text-sm md:text-base"> 
                        At AI INTEGRATOR, we provide a comprehensive, tailored approach to help your business leverage cutting-edge technology. Our "How it Works" process is designed to guide you through each phase of your IT transformation, ensuring you receive the support and tools you need for success. Here’s a detailed breakdown of our process.
                    </p>
                </div>
                <main className="container mx-auto p-4">
                    <section className="text-center mb-8">
                        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
                        <p className='text-xl p-10'>We offer a step-by-step guide to help you implement and optimize IT solutions for your business. Our goal is to simplify the process and make it easy for you to integrate technology into your operations. Here’s how we do it.</p>
                    </section>
                </main>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-14 mr-14">
                {steps.map((step) => (
                    <div key={step.id} className="bg-zinc-950 text-white p-6 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-xl hover:bg-zinc-700 hover:cursor-pointer 
                    border-2 border-pink-800">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="text-2xl">{step.icon}</span>
                            <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="text-sm">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className='bg-zinc-950 p-6 sm:p-8 md:p-12 lg:p-14 mx-4 sm:mx-10 md:mx-14 lg:mx-20 mt-10 md:mt-16 lg:mt-20 text-white rounded-lg w-7xl'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='text-center md:text-left mb-4 md:mb-0'>
                        <p className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                            Ready to transform your business with AI-driven IT solutions?
                        </p>
                        <p className='mt-2 text-sm sm:text-base'>
                            Join AI INTEGRATOR today and take the first step toward unlocking your business's full potential with technology.
                        </p>
                    </div>
                    <button className='bg-white text-black hover:bg-pink-500 px-4 py-2 rounded shadow-md transform transition duration-300 ease-in-out'>
                        Request a Demo
                    </button>
                </div>
            </div>

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


        </>
    );
};

export default Process;
