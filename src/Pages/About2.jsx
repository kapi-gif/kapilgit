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




      <div className="bg-zinc-950 m-[50px] h-[500px] p-6 flex flex-col justify-between text-white">
        <div>
          <img className='size-10 ml-auto mr-auto mt-20' src={NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-2xl font-bold mb-4 flex justify-center items-center mt-11">WELCOME TO AI INTEGRATOR'S</h1>
          <p className="mb-4 p-5 text-lg">
            At AI Integrator, we are committed to delivering innovative solutions that drive digital transformation. Our mission is to empower businesses by providing cutting-edge technology and IT services that enhance operational efficiency, streamline processes, and unlock new opportunities for growth.
            We specialize in software development, data analytics, AI-driven solutions, and IT consulting, tailored to meet the unique needs of each client. Our team of skilled professionals works closely with you to understand your goals, challenges, and vision, ensuring that every project is executed with precision and excellence.
            Whether you are a startup looking to establish your digital presence or an enterprise seeking to scale your operations, we are here to support you every step of the way. At AI Integrator, we believe in leveraging the power of technology to solve real-world problems and deliver sustainable results.
            Join our community of forward-thinking companies and let us help you navigate the complexities of the digital world. Together, we can build solutions that drive success, innovation, and growth.
          </p>

        </div>
      </div>


      <h1 className='text-center font-bold text-2xl mt-16 m-5'>Our Story</h1>
      <p className='px-40 text-justify'>
        Welcome to <span className="font-semibold text-blue-600">AI Integrator</span>, your trusted partner in transforming businesses through cutting-edge IT solutions. Our team of experienced developers and IT professionals specialize in delivering innovative software, AI-driven technologies, and cloud-based systems tailored to meet the unique needs of your organization. We are committed to driving digital transformation, enhancing operational efficiency, and helping you stay ahead in this rapidly evolving tech landscape.
      </p>


      <div className="bg-zinc-950 py-16 mt-20 m-10 ">

        <div className="max-w-5xl mx-auto  md:px-8">


          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            {/* Image Section */}


            <div className="w-full ">
              <img
                src={about1}
                alt="about1"
                className="rounded-lg shadow-md w-full object-cover h-72 -ml-1 "
              />
            </div>


            {/* Text Section */}
            <div className="flex flex-col justify-center ">
              <h2 className="text-xl ml-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Inspiring Transformations Through Technology
              </h2>
              <p className="text-white mb-4 ml-20">
                Our IT-driven platform continues to empower individuals to transform their
                lives through personalized nutrition coaching. With an expanding user base
                and a growing team of tech experts and nutritionists, we remain committed to
                our goal of helping people lose weight, improve their health, and lead
                happier, more fulfilling lives. Our journey of inspiring transformations
                continues, one digital interaction at a time.
              </p>
              <p className="text-white ml-20">July 1, 2025</p>
            </div>
          </div>


          {/* Bottom Section with Text and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

            {/* Text Section */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-xl mr-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Recognition for Tech-Driven Wellness
              </h2>
              <p className="text-white mb-4 mr-20">
                Our innovative use of technology in personalized nutrition has earned us
                industry recognition.  We've received accolades for our cutting-edge
                platform and its impact on client success, solidifying our position as a
                leader in tech-enabled wellness solutions.
              </p>
              <p className="text-white mr-20">March 10, 2023</p>
            </div>

            {/* Image Section */}
            <div className="w-full order-1 md:order-2">
              <img
                src={about2}
                alt='about2'
                className="rounded-lg shadow-md w-full object-cover h-72 ml-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  items-center">
            {/* Image Section */}
            <div className="w-full">
              <img
                src={about3}
                alt="about3"
                className="rounded-lg shadow-md w-full object-cover h-72 -ml-1"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl ml-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Continued Growth in Digital Wellness
              </h2>
              <p className="text-white mb-4 ml-20">
                Our platform has now empowered over 5,000 users, a testament to our
                commitment to helping individuals achieve their health and wellness
                goals through technology. This milestone highlights the positive impact
                our digital solutions have made on thousands of lives.
              </p>
              <p className="text-white ml-20">November 2, 2021</p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  items-center">
            {/* Text Section */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-xl mr-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Collaborating Through Technology
              </h2>
              <p className="text-white mb-4 mr-20">
                We partner with leading tech companies and integrate cutting-edge tools
                to provide our users with the most effective and personalized
                nutrition solutions available.
              </p>
              <p className="text-white mr-20">July 15, 2019</p>
            </div>
            {/* Image Section */}
            <div className="w-full order-1 md:order-2">
              <img
                src={about4}
                alt="about4"
                className="rounded-lg shadow-md w-full object-cover h-72 ml-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="w-full">
              <img
                src={about5}
                alt="about5"
                className="rounded-lg shadow-md w-full object-cover h-72 -ml-1"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl ml-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Personalized Digital Communication
              </h2>
              <p className="text-white mb-4 ml-20">
                We've implemented personalized communication tools within our platform,
                allowing us to connect with users more effectively.  This includes targeted messaging,
                individualized feedback, and convenient access to our support team.
              </p>
              <p className="text-white ml-20">April 1, 2018</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Text Section */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-xl mr-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Innovating for Clients Story
              </h2>
              <p className="text-white mb-4 mr-20">
                Our IT company introduced an advanced web and mobile application platform,
                revolutionizing the way clients interact with technology. The platform
                enabled businesses to automate workflows, analyze data efficiently,
                and deliver an enhanced customer experience through seamless digital solutions.
              </p>
              <p className="text-white mr-20">January 20, 2017</p>
            </div>

            {/* Image Section */}
            <div className="w-full order-1 md:order-2">
              <img
                src={about6}
                alt="about6"
                className="rounded-lg shadow-md w-full object-cover h-72 ml-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="w-full">
              <img
                src={about7}
                alt="about7"
                className="rounded-lg shadow-md w-full object-cover h-72 -ml-1"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl ml-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Celebrating Success Stories
              </h2>
              <p className="text-white mb-4 ml-20">
                Our IT company marked a major milestone by successfully delivering
                its 500th project. These success stories highlighted the transformative
                impact of our innovative tech solutions on businesses, inspiring our
                team to push the boundaries of technology and deliver exceptional services.
              </p>
              <p className="text-white ml-20">September 5, 2015</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Text Section */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-xl mr-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Expanding Our Reach
              </h2>
              <p className="text-white mb-4 mr-20">
                Our IT company expanded its services globally by launching a cloud-based
                platform, enabling businesses worldwide to access cutting-edge software
                solutions and expert IT support. This milestone enhanced accessibility
                and scalability, empowering enterprises to drive digital transformation.
              </p>
              <p className="text-white mr-20">June 10, 2014</p>
            </div>

            {/* Image Section */}
            <div className="w-full order-1 md:order-2">
              <img
                src={about8}
                alt="about8"
                className="rounded-lg shadow-md w-full object-cover h-72 ml-1"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="w-full">
              <img
                src={about9}
                alt="about9"
                className="rounded-lg shadow-md w-full object-cover h-72 -ml-1"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl ml-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Celebrating Success Stories
              </h2>
              <p className="text-white mb-4 ml-20">
                Our IT company marked a significant milestone by completing 500 successful
                projects. These achievements highlight the impact of our innovative
                solutions in transforming businesses, driving efficiency, and enhancing
                digital experiences. This success motivates our team to continue delivering
                cutting-edge technology services.
              </p>
              <p className="text-white ml-20">September 5, 2015</p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
            {/* Text Section */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="text-xl mr-20 font-semibold mb-4 underline underline-offset-8 decoration-lime-600 text-white">
                Expanding Our Reach
              </h2>
              <p className="text-white mb-4 mr-20">
                Our IT company expanded its global reach by launching an advanced online
                platform, enabling businesses worldwide to access our cutting-edge software
                solutions and IT services. This milestone enhanced accessibility, allowing
                clients to collaborate with us seamlessly and leverage our expertise from
                any location.
              </p>
              <p className="text-white mr-20">June 10, 2014</p>
            </div>

            {/* Image Section */}
            <div className="w-full order-1 md:order-2">
              <img
                src={about10}
                alt="about10"
                className="rounded-lg shadow-md w-full object-cover h-72 ml-1 "
              />
            </div>
          </div>

        </div>
      </div>

      <h1 className='font-bold text-center text-2xl items-center'>Company Achievements</h1>
      <p className='px-36 m-8'>
        At AI Integrator, we take pride in our achievements and the innovative solutions
        we have delivered to our clients. From cutting-edge software development to
        advanced AI-driven applications, our journey has been marked by continuous growth
        and technological excellence. Here are some of our notable milestones.
      </p>


      <div className='bg-zinc-900 ml-10 w-5/12 h-28 text-white hover:scale-105 transition-transform duration-300'>
        <h3 className='px-3 py-4 ml-5 gap-3 flex'>
          <FaStar size={25} color="#4CAF50" />  500+ Successful Projects
        </h3>
        <p className='px-4 text-sm'>
          Our innovative IT solutions have powered businesses worldwide, delivering scalable software,
          AI-driven applications, and seamless digital transformations.
        </p>
      </div>



      <br />

      <div className='bg-zinc-900 -mt-32 mr-10 ml-10 w-5/12 h-28 float-right text-white hover:scale-105 transition-transform duration-300'>
        <h3 className='px-3 py-4 ml-5 gap-3 flex'>
          <FaGraduationCap size={25} color="#4CAF50" /> Recognition for Innovation
        </h3>
        <p className='px-4 text-sm'>
          Recognized as a leading provider of IT solutions, earning accolades for our cutting-edge approach to software development.
        </p>
      </div>


      <br />

      <div className='bg-zinc-900 ml-10 w-5/12 h-28 text-white hover:scale-105 transition-transform duration-300'>
        <h3 className='px-3 py-4 ml-5 gap-3 flex'>
          <FaMedal size={25} color="#4CAF50" /> Positive Client Feedback
        </h3>
        <p className='px-4 text-sm'>
          We have received numerous testimonials from satisfied clients who have experienced improved business operations through our services.
        </p>
      </div>


      <div className='bg-zinc-900 -mt-28 mr-10 ml-10 w-5/12 text-white h-28 float-right hover:scale-105 transition-transform duration-300'>
        <h3 className='px-3 py-4 ml-5 gap-3 flex'>
          <FaCertificate size={25} color="#4CAF50" /> Collaborate With Top Tech Experts
        </h3>
        <p className='px-4 text-sm'>
          Established partnerships with leading software engineers and IT professionals to provide the best technology solutions and services.
        </p>
      </div>


      <div className='bg-zinc-900 h-40 m-10 text-white'>
        <h4 className='p-5 text-xl font-semibold'>We Are Proud of Our Achievements</h4>
        <button className='bg-white text-black hover:bg-pink-600 px-3 py-2 rounded mr-5 float-right ...'>Request a Demo</button>
        <p className='ml-5 w-9/12'>
          But our ultimate satisfaction comes from helping our clients grow and excel in the digital world.
          Join AI INTEGRATOR today and embark on your journey toward tech-driven success.
        </p>
      </div>




      <nav className=" w-full bg-zinc-950 text-white py-3 h-[150px] mt-20">
        {/* Navigation Links Section */}
        <div className="flex gap-[20px]">
          <div className="flex items-center max-w-5xl mx-auto px-4 ">
            <h1 className="flex -ml-36"><img className='size-6 ' src={NutritionIcon} alt="Nutrition Icon" />AI INTEGRATOR'S</h1>
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
  )
}

export default About