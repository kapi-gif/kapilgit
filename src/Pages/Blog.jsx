import React from 'react';
import { Link } from 'react-router-dom';
import B1 from "../Assets/B1.jpg";
import B2 from "../Assets/B2.jpg";
import B3 from "../Assets/B3.jpg";
import B4 from "../Assets/b4.avif";
import B5 from "../Assets/B5.jpg";
import B6 from "../Assets/B6.jpg";
import B7 from "../Assets/B7.jpg";
import B8 from "../Assets/B8.jpg";
import B9 from "../Assets/B9.jpg";
import B10 from "../Assets/B10.jpg";
import NutritionIcon from "../Assets/Nutrition Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Blog() {
  return (
    <>


      {/* Our Blogs Section */}
      <div className="bg-zinc-950 m-[50px] h-[400px] p-6 flex flex-col justify-between text-white">
        <div>
          <img className='size-10 ml-auto mr-auto mt-20' src={NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-2xl font-bold mb-4 flex justify-center items-center mt-11">Our Blogs</h1>
          <p className="mb-6 mx-10 mt-2 p-4  rounded-lg shadow-md">
            Welcome to the Blog Section of <strong>AI Integrator's</strong>, your trusted source for the latest insights, trends, and expert advice on Artificial Intelligence and technology innovations. Here, we provide engaging and informative content that empowers you to stay ahead in the rapidly evolving tech landscape. Explore our blog to discover in-depth articles on AI development, machine learning, data science, and cutting-edge IT solutions shaping the future.
          </p>

        </div>

        {/* Bottom Navigation Bar */}
        <nav className="bg-zinc-800 py-3 text-white h-[70px] rounded-md mt-2">
          <ul className="flex justify-between items-center px-4 h-full">
            <li className="hover:bg-gray-600 px-4 py-2 rounded">All</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">AI Trends With Ml</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Machine Learning</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Data Science Development</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">Tech Tutorials</li>
            <li className="hover:bg-gray-600 px-4 py-2 rounded">AI Solutions</li>
          </ul>
        </nav>

      </div>

      <div className="bg-zinc-950 p-4 mx-[70px] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">
              Latest Tech Innovations
            </h3>
            <img src={B1} alt="Software Development Strategies" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">
              10 Effective Strategies for Scalable Software Solutions
            </h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Discover powerful techniques for building scalable {"\n"}
                and efficient software solutions. Learn best practices {"\n"}
                in coding, project management, and deploying robust {"\n"}
                applications with AI Integrators.
              </p>
              <Link to="/blog/software-development-strategies" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-9 hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>


          {/* Second Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">
              Software Development Tips
            </h3>
            <img src={B2} alt="Code Optimization" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">
              The Role of Code Optimization in Software Performance
            </h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Learn how code optimization can enhance software {"\n"}
                performance, with practical tips for writing efficient {"\n"}
                code and reducing system overhead.
              </p>
              <Link to="/blog/code-optimization" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-12 hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>


        </div>
      </div>




      {/* Healthy Eating Blogs */}
      <div className="bg-zinc-950 text-white p-4 mx-[70px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">
              AI Innovations
            </h3>
            <img src={B3} alt="Machine Learning Algorithms" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">
              The Benefits of Machine Learning Algorithms in Modern Software
            </h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Explore how machine learning algorithms are revolutionizing {"\n"}
                software development. Learn about practical applications, {"\n"}
                efficiency improvements, and tips for integrating AI {"\n"}
                into your projects.
              </p>
              <Link to="/blog/machine-learning-algorithms" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-2 hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>

          {/* Second Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">
              AI Innovations
            </h3>
            <img src={B4} alt="Understanding Cloud Computing" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">
              Understanding Cloud Computing: Benefits and Best Practices
            </h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Get a comprehensive overview of cloud computing {"\n"}
                and its role in modern software development. {"\n"}
                Discover the best platforms and how to optimize {"\n"}
                your cloud infrastructure for performance.
              </p>
              <Link to="/blog/cloud-computing" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-14 hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>

        </div>
      </div>


      
      {/* Software Development Blogs */}
      <div className="bg-zinc-950 text-white p-4 mx-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">Software Development</h3>
            <img src={B5} alt="Agile Development" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">The Benefits of Agile Development</h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Explore the advantages of Agile development{"\n"}
                methodologies. Learn how Agile can improve 
                project {"\n"}management, collaboration, and the {"\n"}
                overall software development process.
              </p>
              <Link to="/blog/agile-development" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-12 hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>

          {/* Second Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">Software Development</h3>
            <img src={B6} alt="Front-End Development" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">Mastering Front-End Development: Essential Skills and Tools</h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Learn the essential skills and tools required {"\n"}
                for front-end development.  Discover how to {"\n"}
                build user-friendly and responsive web {"\n"}
                applications.
              </p>
              <Link to="/blog/front-end-development" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-[90px] hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Motivation Blogs */}

      {/* Professional Development Blogs */}
      <div className="bg-zinc-950 text-white p-4 mx-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">Professional Development</h3>
            <img src={B7} alt="Career Growth" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">Strategies for Career Advancement in Tech</h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Discover effective strategies for career {"\n"}
                advancement in the technology industry. Learn {"\n"}
                how to develop in-demand skills, build your {"\n"}
                network, and position yourself for leadership {"\n"}
                roles.
              </p>
              <Link to="/blog/career-advancement" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-[74px] hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>

          {/* Second Blog */}
          <div>
            <h3 className="text-lg font-semibold mb-2 underline underline-offset-8 decoration-lime-600 p-3">Professional Development</h3>
            <img src={B8} alt="Tech Skills" className="w-[320px] h-40 object-cover rounded-md mb-2 ml-[140px]" />
            <h3 className="font-bold text-md mb-2">Top Tech Skills to Learn in 2025</h3>

            {/* Container for Paragraph and Button */}
            <div className="flex items-start">
              <p className="text-xs whitespace-pre-wrap">
                Stay ahead of the curve by learning the most {"\n"}
                in-demand tech skills. Explore the latest {"\n"}
                technologies and programming languages that {"\n"}
                will shape the future of the tech industry.
              </p>
              <Link to="/blog/top-tech-skills" className="ml-2">
                <button className="px-6 py-2 bg-pink-600 rounded ml-20 hover:bg-lime-500">Read More</button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Navigation Bar */}

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
        <div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-pink-500  border-white  text-black">
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
}

export default Blog;