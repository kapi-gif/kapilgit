import React from 'react'
import ITIcon from "../Assets/B1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';''


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
                <div className="bg-zinc-950 text-center p-8 h-[400px] m-10 text-white">
                    <img className='size-10 ml-auto mr-auto mt-20' src={ITIcon} alt="IT Icon" />
                    <h1 className="text-2xl font-bold mt-10">Your Journey to IT Excellence</h1>
                    <p className='ml-10 mr-10 p-5'>At AI INTEGRATOR, we provide a comprehensive, tailored approach to help your business leverage cutting-edge technology. Our "How it Works" process is designed to guide you through each phase of your IT transformation, ensuring you receive the support and tools you need for success. Here’s a detailed breakdown of our process.</p>
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

            <div className='bg-zinc-950 h-48 p-14 m-20 ml-14 mr-14 mt-20 text-white'>
                <button className='bg-white text-black hover:bg-pink-500 px-3 py-2 rounded mr-5 float-right transform transition duration-300 ease-in-out' >Request a Demo</button>
                <p className='ml-5 w-9/12 font-semibold text-xl'>
                    Ready to transform your business with AI-driven IT solutions?
                </p>
                <p className='m-5 text-sm'>Join AI INTEGRATOR today and take the first step toward unlocking your business's full potential with technology.</p>
            </div>

            <nav className="w-full bg-zinc-950 text-white py-3 h-[150px] mt-20">
                <div className="flex">
                    <div className="flex items-center max-w-5xl mx-auto px-4">
                    <h1 className="flex -ml-32">AI INTEGRATOR</h1>

                    </div>

                    <div className="w-7/12 ">
                        <ul className="flex gap-1 text-sm">
                            <li className="hover:bg-gray-700 px-4 py-2 rounded transform transition-all duration-200">Home</li>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded transform transition-all duration-200">Services</li>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded transform transition-all duration-200">Solutions</li>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded transform transition-all duration-200">Testimonials</li>
                            <li className="hover:bg-gray-700 px-4 py-2 rounded transform transition-all duration-200">Contact</li>
                        </ul>
                    </div>
                    <div className="mr-10 text-sm "><ul><li className="hover:bg-gray-700 px-4 py-2 rounded transform transition-all duration-200">Go To Top <FontAwesomeIcon icon={faArrowUp} /></li></ul></div>
                </div>

                <div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-pink-600 border-white">
                    <div className="flex items-center w-full text-sm px-2 py-1 rounded gap-3 ">
                        <p className="mx-1">hello@aiintegrator.com</p>
                        <p className="mx-1">+91813232309</p>
                        <p className="mx-1">Somewhere in the World</p>
                        <div className="mx-1"><p>2023 AI INTEGRATOR. All rights reserved</p></div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Process;
