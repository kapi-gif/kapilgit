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
// import { FaStar } from 'react-icons/fa';
// import { FaGraduationCap } from 'react-icons/fa';
// import { FaMedal } from 'react-icons/fa';
import { FaCertificate } from 'react-icons/fa';
import NutritionIcon from "../Assets/Nutrition Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>




      {/* <div className="bg-zinc-950 m-4 sm:m-6 md:m-10 lg:m-[50px] h-auto p-4 sm:p-6 md:p-8 text-white flex flex-col justify-between"> */}
      <div className="bg-gradient-to-r from-gray-900 to-zinc-950 
  m-4 sm:m-6 md:m-10 lg:m-[50px] h-auto p-4 sm:p-6 md:p-8 
  text-white flex flex-col justify-between transition-all duration-500 ">
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



      <h1 className="text-center font-bold text-2xl mt-16 mb-5 px-4"> 
        Our Story
      </h1>
      <p className="px-4 md:px-40 text-justify text-sm md:text-base text-center"> 
        Welcome to <span className="font-semibold text-blue-600">AI Integratorz</span>, your trusted partner in transforming businesses through cutting-edge IT solutions. Our team of experienced developers and IT professionals specialize in delivering innovative software, AI-driven technologies, and cloud-based systems tailored to meet the unique needs of your organization. We are committed to driving digital transformation, enhancing operational efficiency, and helping you stay ahead in this rapidly evolving tech landscape.
      </p>


      <div className="bg-gradient-to-r from-gray-900 to-zinc-950  py-16 mt-20 m-10 ">

        <div className="max-w-5xl mx-auto  md:px-8">


        <div>


      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about1}
            alt="about1"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72" 
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0"> 
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20"> 
            Inspiring Transformations Through Technology
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base"> 
            Our IT-driven platform continues to empower individuals to transform their
            lives through personalized nutrition coaching. With an expanding user base
            and a growing team of tech experts and nutritionists, we remain committed to
            our goal of helping people lose weight, improve their health, and lead
            happier, more fulfilling lives. Our journey of inspiring transformations
            continues, one digital interaction at a time.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">January 1, 2025</p> 
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full order-1 md:order-2">
          <img
            src={about2}
            alt='about2'
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72"
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0 order-2 md:order-1"> 
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white mr-0 md:mr-20"> 
            Recognition for Tech-Driven Wellness
          </h2>
          <p className="text-white mb-4 mr-0 md:mr-20 text-sm md:text-base"> 
            Our innovative use of technology in personalized nutrition has earned us
            industry recognition. We've received accolades for our cutting-edge
            platform and its impact on client success, solidifying our position as a
            leader in tech-enabled wellness solutions.
          </p>
          <p className="text-white mr-0 md:mr-20 text-sm md:text-base">January 10, 2023</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-0">
        <div className="w-full">
          <img
            src={about3}
            alt="about3"
            className="rounded-lg shadow-md w-full object-cover h-auto md:h-72" 
          />
        </div>
        <div className="flex flex-col justify-center px-4 md:px-0"> 
          <h2 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white ml-0 md:ml-20"> {/* Adjusted margin */}
            Continued Growth in Digital Wellness
          </h2>
          <p className="text-white mb-4 ml-0 md:ml-20 text-sm md:text-base"> 
            Our platform has now empowered over 5,000 users, a testament to our
            commitment to helping individuals achieve their health and wellness
            goals through technology. This milestone highlights the positive impact
            our digital solutions have made on thousands of lives.
          </p>
          <p className="text-white ml-0 md:ml-20 text-sm md:text-base">January 2, 2025</p> 
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



      <nav className="w-full bg-zinc-950 text-white py-4 md:py-3 h-auto mt-10 md:mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-2">
              <img className="w-8 h-8" src={NutritionIcon} alt="Nutrition Icon" />
              <h1 className="text-lg md:text-xl font-bold">AI INTEGRATORZ</h1>
            </div>


            <div className="w-full md:w-auto mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row justify-center md:gap-4 text-sm space-y-2 md:space-y-0">
                <Link to="/" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Home</Link>
                <Link to="/TeamMembers2" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Services</Link>
                <Link to="/pricing" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Our Team </Link>
                <Link to="/blog" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Blog</Link>
                 <Link to="/contact" className="nav-link hover:bg-pink-600 px-2 py-2 rounded text-center">Contact </Link>
              </ul>
            </div>


            <div className="mt-4 md:mt-0">
              <ul>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-sm flex items-center justify-center">
                  Go To Top <FontAwesomeIcon icon={faArrowUp} className="ml-2" />
                </li>
              </ul>
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto mt-6 p-3 bg-neutral-600 rounded-lg">
                <div className="flex flex-col md:flex-row items-center text-sm gap-4 md:gap-10">
                    <p className="contact-info text-white transition-colors duration-300 px-2 py-1 rounded">Contact: +916264601696</p>
                    <p className="contact-info text-white transition-colors duration-300 px-2 py-1 rounded">Email: info@aiintegratorz.com</p>
                    <p className="contact-info text-white transition-colors duration-300 px-2 py-1 rounded">Address: Sapna Sangeeta Road</p>
                </div>
            </div>


            <style jsx>{`
                .contact-info:hover {
                    color: transparent;
                    background-image: linear-gradient(to right, pink ,yellow);
                    -webkit-background-clip: text;
                    background-clip: text;
                    @apply text-shadow-[0_0_10px_#fff,_0_0_20px_#fff,_0_0_30px_#fff]; /* Tailwind text-shadow */
                }
                .contact-info{
                    @apply text-shadow-[0_0_5px_#fff,_0_0_10px_#fff];
                }

            `}</style>
        </nav>


    </>
  )
}

export default About