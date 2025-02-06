import React from 'react'
import about1 from "../Assets/about1.jpg";
import about2 from '../Assets/about2.jpg';
import about3 from '../Assets/about3.webp';
import about4 from '../Assets/about4.webp';
import about5 from "../Assets/about5.jpg";
import about6 from "../Assets/about6.jpg";
import about7 from "../Assets/about7.jpg";
import about8 from "../Assets/about8.jpg";
import about9 from "../Assets/about9.jpg";
import about10 from "../Assets/about10.jpg";
import { FaStar } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaMedal } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import NutritionIcon from "../Assets/Nutrition Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>




      <div className="bg-zinc-950 m-4 sm:m-6 md:m-10 lg:m-[50px] h-auto p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between">
        <div>
          <img className="w-10 h-10 mx-auto mt-6 sm:mt-8 md:mt-10" src={NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-xl sm:text-2xl font-bold mb-4 flex justify-center items-center mt-4 sm:mt-5 text-center">
            WELCOME TO AI INTEGRATORZ
          </h1>
          <p className="mb-4 p-2 sm:p-4 md:p-5 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
            At AI Integratorz , we are committed to delivering innovative solutions that drive digital transformation.
            Our mission is to empower businesses by providing cutting-edge technology and IT services that enhance
            operational efficiency, streamline processes, and unlock new opportunities for growth.
            <br /><br />
            We specialize in software development, data analytics, AI-driven solutions, and IT consulting, tailored
            to meet the unique needs of each client. Our team of skilled professionals works closely with you to
            understand your goals, challenges, and vision, ensuring that every project is executed with precision
            and excellence.
            Whether you are a startup looking to establish your digital presence or an enterprise seeking to scale
            your operations.
          </p>
        </div>
      </div>



      <h1 className="text-center font-bold text-2xl mt-16 mb-5 px-4"> {/* Added mb and px */}
        Our Story
      </h1>
      <p className="px-4 md:px-40 text-justify text-sm md:text-base"> {/* Added responsive px and text size */}
        Welcome to <span className="font-semibold text-blue-600">AI Integratorz</span>, your trusted partner in transforming businesses through cutting-edge IT solutions. Our team of experienced developers and IT professionals specialize in delivering innovative software, AI-driven technologies, and cloud-based systems tailored to meet the unique needs of your organization. We are committed to driving digital transformation, enhancing operational efficiency, and helping you stay ahead in this rapidly evolving tech landscape.
      </p>


      <div className="bg-zinc-950 py-16 mt-20 m-10 ">

        <div className="max-w-5xl mx-auto  md:px-8">


        <div>
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about1}
            alt="about1"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72" // h-auto for responsiveness
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0"> {/* Added padding */}
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20"> {/* Adjusted margin */}
            Inspiring Transformations Through Technology
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base"> {/* Adjusted margin and text size */}
            Our IT-driven platform continues to empower individuals to transform their
            lives through personalized nutrition coaching. With an expanding user base
            and a growing team of tech experts and nutritionists, we remain committed to
            our goal of helping people lose weight, improve their health, and lead
            happier, more fulfilling lives. Our journey of inspiring transformations
            continues, one digital interaction at a time.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">January 1, 2025</p> {/* Adjusted margin and text size */}
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full order-1 md:order-2">
          <img
            src={about2}
            alt='about2'
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72" // h-auto for responsiveness
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0 order-2 md:order-1"> {/* Added padding and order change */}
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white mr-0 md:mr-20"> {/* Adjusted margin */}
            Recognition for Tech-Driven Wellness
          </h2>
          <p className="text-white mb-4 mr-0 md:mr-20 text-sm md:text-base"> {/* Adjusted margin and text size */}
            Our innovative use of technology in personalized nutrition has earned us
            industry recognition. We've received accolades for our cutting-edge
            platform and its impact on client success, solidifying our position as a
            leader in tech-enabled wellness solutions.
          </p>
          <p className="text-white mr-0 md:mr-20 text-sm md:text-base">January 10, 2023</p> {/* Adjusted margin and text size */}
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about3}
            alt="about3"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72" // h-auto for responsiveness
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0"> {/* Added padding */}
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20"> {/* Adjusted margin */}
            Continued Growth in Digital Wellness
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base"> {/* Adjusted margin and text size */}
            Our platform has now empowered over 5,000 users, a testament to our
            commitment to helping individuals achieve their health and wellness
            goals through technology. This milestone highlights the positive impact
            our digital solutions have made on thousands of lives.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">January 2, 2025</p> {/* Adjusted margin and text size */}
        </div>
      </div>
    </div>

    <div>
      {/* Section 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full order-1 md:order-2">
          <img
            src={about4}
            alt="about4"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0 order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white mr-0 md:mr-20">
            Collaborating Through Technology
          </h2>
          <p className="text-white mb-4 mr-0 md:mr-20 text-sm md:text-base">
            We partner with leading tech companies and integrate cutting-edge tools
            to provide our users with the most effective and personalized
            nutrition solutions available.
          </p>
          <p className="text-white mr-0 md:mr-20 text-sm md:text-base">March 15, 2023</p>
        </div>
      </div>

      {/* Section 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about5}
            alt="about5"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20">
            Personalized Digital Communication
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base">
            We've implemented personalized communication tools within our platform,
            allowing us to connect with users more effectively. This includes targeted messaging,
            individualized feedback, and convenient access to our support team.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">April 1, 2024</p>
        </div>
      </div>

      {/* Section 6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full order-1 md:order-2">
          <img
            src={about6}
            alt="about6"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0 order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white mr-0 md:mr-20">
            Innovating for Clients Story
          </h2>
          <p className="text-white mb-4 mr-0 md:mr-20 text-sm md:text-base">
            Our IT company introduced an advanced web and mobile application platform,
            revolutionizing the way clients interact with technology. The platform
            enabled businesses to automate workflows, analyze data efficiently,
            and deliver an enhanced customer experience through seamless digital solutions.
          </p>
          <p className="text-white mr-0 md:mr-20 text-sm md:text-base">March 20, 2023</p>
        </div>
      </div>
    </div>

    <div>
      {/* Section 7 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about7}
            alt="about7"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20">
            Celebrating Success Stories
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base">
            Our IT company marked a major milestone by successfully delivering
            its 500th project. These success stories highlighted the transformative
            impact of our innovative tech solutions on businesses, inspiring our
            team to push the boundaries of technology and deliver exceptional services.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">September 5, 2023</p>
        </div>
      </div>

      {/* Section 8 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full order-1 md:order-2">
          <img
            src={about8}
            alt="about8"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0 order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white mr-0 md:mr-20">
            Expanding Our Reach
          </h2>
          <p className="text-white mb-4 mr-0 md:mr-20 text-sm md:text-base">
            Our IT company expanded its services globally by launching a cloud-based
            platform, enabling businesses worldwide to access cutting-edge software
            solutions and expert IT support. This milestone enhanced accessibility
            and scalability, empowering enterprises to drive digital transformation.
          </p>
          <p className="text-white mr-0 md:mr-20 text-sm md:text-base">June 10, 2024</p>
        </div>
      </div>

      {/* Section 9 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about9}
            alt="about9"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20">
            Celebrating Success Stories
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base">
            Our IT company marked a significant milestone by completing 500 successful
            projects. These achievements highlight the impact of our innovative
            solutions in transforming businesses, driving efficiency, and enhancing
            digital experiences. This success motivates our team to continue delivering
            cutting-edge technology services.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">September 5, 2024</p>
        </div>
      </div>

      {/* Section 10 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full order-1 md:order-2">
          <img
            src={about10}
            alt="about10"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0 order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white mr-0 md:mr-20">
            Expanding Our Reach
          </h2>
          <p className="text-white mb-4 mr-0 md:mr-20 text-sm md:text-base">
            Our IT company expanded its global reach by launching an advanced online
            platform, enabling businesses worldwide to access our cutting-edge software
            solutions and IT services. This milestone enhanced accessibility, allowing
            clients to collaborate with us seamlessly and leverage our expertise from
            any location.
          </p>
          <p className="text-white mr-0 md:mr-20 text-sm md:text-base">Feb 6, 2025</p>
        </div>
      </div>
    </div>
        </div>
      </div>

      <div className="container mx-auto">
      <h1 className="font-bold text-center text-2xl mt-16 px-4"> 
        Company Achievements
      </h1>
      <p className="px-4 md:px-36 mt-8 text-sm md:text-base text-center"> 
        At AI Integratorz , we take pride in our achievements and the innovative solutions
        we have delivered to our clients. From cutting-edge software development to
        advanced AI-driven applications, our journey has been marked by continuous growth
        and technological excellence. Here are some of our notable milestones.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-white"> 
        <div className="bg-zinc-900 hover:scale-105 transition-transform duration-300 p-4"> 
          <h3 className="flex items-center gap-3">
            <FaStar size={25} color="#4CAF50" /> 500+ Successful Projects
          </h3>
          <p className="text-sm mt-2 "> 
            Our innovative IT solutions have powered businesses worldwide, delivering scalable software,
            AI-driven applications, and seamless digital transformations.
          </p>
        </div>

        <div className="bg-zinc-900 hover:scale-105 transition-transform duration-300 p-4"> 
          <h3 className="flex items-center gap-3"> 
            <FaGraduationCap size={25} color="#4CAF50" /> Recognition for Innovation
          </h3>
          <p className="text-sm mt-2"> {/* Added margin top */}
            Recognized as a leading provider of IT solutions, earning accolades for our cutting-edge approach to software development.
          </p>
        </div>

        <div className="bg-zinc-900 hover:scale-105 transition-transform duration-300 p-4"> 
          <h3 className="flex items-center gap-3"> 
            <FaMedal size={25} color="#4CAF50" /> Positive Client Feedback
          </h3>
          <p className="text-sm mt-2"> 
            We have received numerous testimonials from satisfied clients who have experienced improved business operations through our services.
          </p>
        </div>

        <div className="bg-zinc-900 hover:scale-105 transition-transform duration-300 p-4"> 
          <h3 className="flex items-center gap-3"> 
            <FaCertificate size={25} color="#4CAF50" /> Collaborate With Top Tech Experts
          </h3>
          <p className="text-sm mt-2"> 
            Established partnerships with leading software engineers and IT professionals to provide the best technology solutions and services.
          </p>
        </div>
      </div>


      <div className="bg-zinc-900 mt-8 p-6 text-white"> 
        <h4 className="text-xl font-semibold mb-4"> 
          We Are Proud of Our Achievements
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-between"> 
            <p className="md:w-9/12 text-sm md:text-base"> 
                But our ultimate satisfaction comes from helping our clients grow and excel in the digital world.
                Join AI INTEGRATOR today and embark on your journey toward tech-driven success.
            </p>
            <button className="bg-white text-black hover:bg-pink-600 px-3 py-2 rounded mt-4 md:mt-0"> 
                Request a Demo
            </button>
        </div>
      </div>
    </div>



    <nav className="w-full bg-zinc-950 text-white py-3 mt-20">
      <div className="container mx-auto px-4"> {/* Added container for centering */}
        <div className="flex flex-col md:flex-row items-center justify-between"> {/* Flex for responsiveness */}
          <div className="flex items-center">
            <h1 className="flex">
              <img className="size-6" src={NutritionIcon} alt="Nutrition Icon" />
              AI INTEGRATOR'S
            </h1>
          </div>

          <div className="md:w-7/12 mt-4 md:mt-0"> {/* Added margin top for small screens */}
            <ul className="flex flex-col md:flex-row gap-1 text-sm justify-center"> {/* Flex for responsiveness */}
              <li className="hover:bg-gray-700 px-4 py-2 rounded">Home</li>
              <li className="hover:bg-gray-700 px-4 py-2 rounded">Services</li>
              <li className="hover:bg-gray-700 px-4 py-2 rounded">Features</li>
              <li className="hover:bg-gray-700 px-4 py-2 rounded">Testimonials</li>
              <li className="hover:bg-gray-700 px-4 py-2 rounded">Contact</li>
            </ul>
          </div>

          <div className="mt-4 md:mt-0"> {/* Added margin top for small screens */}
            <ul>
              <li className="hover:bg-gray-700 px-4 py-2 rounded">
                Go To Top <FontAwesomeIcon icon={faArrowUp} />
              </li>
            </ul>
          </div>
        </div>


        <div className="bg-pink-500 mt-6 p-2 border-white text-black rounded"> {/* Removed fixed width and margins */}
          <div className="flex flex-col md:flex-row items-center justify-between px-2 py-1 text-sm"> {/* Flex for responsiveness */}
            <p>hello@aiintegrators.com</p>
            <p>+916264601696</p>
            <p>Somewhere in the World</p>
            <div>
                <p>Ai Integrtor's. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </nav>



    </>
  )
}

export default About