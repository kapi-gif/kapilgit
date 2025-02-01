import React from "react";
import NutritionIcon from "../Assets/Nutrition Icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  // const plans = [
  //   {
  //     name: "Basic Plan",
  //     description: "Up to 50% off on Yearly Plan",
  //     features: [
  //       "Personalized nutrition plan",
  //       "Access to our mobile app",
  //       "Email support",
  //       "Regular check-ins",
  //     ],
  //     price: "$49/month",
  //   },
  //   {
  //     name: "Premium Plan",
  //     description: "Up to 50% off on Yearly Plan",
  //     features: [
  //       "All Basic Plan features",
  //       "One-on-one video consultations",
  //       "Recipe recommendations",
  //       "Priority email support",
  //     ],
  //     price: "$79/month",
  //   },
  //   {
  //     name: "Ultimate Plan",
  //     description: "Up to 50% off on Yearly Plan",
  //     features: [
  //       "All Premium Plan features",
  //       "Unlimited video consultations",
  //       "Advanced tracking tools",
  //       "Priority phone support",
  //     ],
  //     price: "$99/month",
  //   },
  // ];

  return (

    <>

       {/* Contact Us Section */}

<div className="bg-lime-50 m-[50px] h-[400px] p-6 flex flex-col justify-between">
        <div> 
          <img className='size-10 ml-auto mr-auto mt-20' src = {NutritionIcon} alt="Nutrition Icon" />
          <h1 className="text-2xl font-bold mb-4 flex justify-center items-center mt-11">Our Pricing</h1>
          <p className="mb-4 m-20  mt-6 ">At Nutrionist, we offer flexible pricing options to accomodate your unique requirements and budget.Our goal is to provide you with exceptional personalized nutrition 
                                                                         coaching that is accessible  and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle.</p>
        </div>
        </div>

      <div className="m-[100px]">
  {/* Monthly, Yearly, and Discount Section */}
  <div className="flex flex-col items-center mb-6 ">
    <div className="flex space-x-4 mt-2 ">
      <button className="py-2 px-4 bg-green-800 text-white rounded">Monthly</button>
      <button className="py-2 px-4  text-black rounded  border-2 border-black">Yearly</button>
    </div>
    <div className="mt-2">
      <h5 className="text-black-600 font-semibold">Save 50% On Yearly</h5>
    </div>
  </div>

        {/* Plans Section */}
        <div className="flex justify-center space-x-20">
          {/* Ultimate Plan - Tallest */}
          <div className="bg-lime-50 p-6 rounded-lg shadow-md w-[330px] h-[450px] flex flex-col justify-between">
            <h1 className="text-lg font-bold">Basic Plan</h1>
            <p className="text-sm">upto 50% off On Yearly Plan</p>
            <p className="text-sm mt-4 bg-lime-100">Personalized nutrition Plan tailored to your goals and dietary preferences</p>
            <p className="text-sm mt-4 bg-lime-100">Access to our mobile app for for convenient meal tracking and progress monitoring</p>
            <p className="text-sm mt-4 bg-lime-100">Email support to address your questions and concerns.</p>
            <p className="text-sm mt-4 bg-lime-100">Regular check-ins with a dedicated nutrionist to review your progress and provide guidance.</p>
            <p className="text-lg font-semibold text-center mt-4">$99/month</p>
            <button className="mt-4 w-full py-2 bg-lime-300 hover:bg-lime-500 text-black rounded">Choose Plan</button>
          </div>

          {/* Premium Plan - Medium height */}
          <div className="bg-lime-50 p-6 rounded-lg shadow-md w-[330px] h-[500px] flex flex-col justify-between">
            <h1 className="text-lg font-bold">Premium Plan</h1>
            <p className="text-sm">Upto 50% off on Yearly Plan</p>
            <p className="text-sm mt-4 bg-lime-100">All Basic Plan features</p>
            <p className="text-sm mt-4 bg-lime-100">One-on-one video consultations with your dedicated nutrionist for more personalized guidance and support.</p>
            <p className='text-sm mt-4 bg-lime-100'>Reecipe recommendations and meal planning assistance.</p>
            <p className="text-sm mt-4 bg-lime-100">Priority email support for quicker responses to your inquiries.</p>
            <p className='text-sm mt-4 bg-lime-100'>Educational resources and guides to deepen your understanding of nutrition and healty habits</p>
            <p className="text-lg font-semibold text-center mt-4">$79/month</p>
            <button className="mt-4 w-full py-2 bg-lime-300 hover:bg-lime-500 text-black rounded">Choose Plan</button>
          </div>

          {/* Basic Plan - Shortest */}
          <div className="bg-lime-50 p-6 rounded-lg shadow-md w-[330px] h-[600px] flex flex-col justify-between">
            <h1 className="text-lg font-bold">Ultimate Plan</h1>
            <p className="text-sm">Upto 50% off on Yearly Plan</p>
            <p className="text-sm mt-4 bg-lime-100">All the features included in the plus plan.</p>
            <p className="text-sm mt-4 bg-lime-100">Unlimited access to video consultations with your dedicated nutrionist for ongoing support and accountability.</p>
            <p className='text-sm mt-4 bg-lime-100'>Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals</p>
            <p className='text-sm mt-4 bg-lime-100'>Customized meal plans and recipe suggestions based on your preferences and nutrional needs.</p>
            <p className='text-sm mt-4 bg-lime-100'>Priority Email and phone support  for immediate assistance.</p>
            <p className="text-lg font-semibold text-center mt-4">$49/month</p>
            <button className="mt-4 w-full py-2 bg-lime-300 hover:bg-lime-500 text-black rounded">Choose Plan</button>
          </div>
        </div>
      </div>

      <div className="mx-[70px] h-[560px] border border-gray-300 p-4 bg-lime-50">
  {/* Header with Buttons */}
  <div className="grid grid-cols-4 text-center border-b border-gray-300 bg-green-900">
    <button className="py-2 font-bold border-r border-gray-300 text-white">Features</button>
    <button className="py-2 font-bold border-r border-gray-300 text-white">Free Plan</button>
    <button className="py-2 font-bold border-r border-gray-300 text-white">Free Plan</button>
    <button className="py-2 font-bold text-white">Free Plan</button>
  </div>

  {/* Features and Checkmarks Table */}
  <div className="grid grid-cols-4 text-center border-t border-gray-300 text-xs">
    {/* First Column - Features */}
    <div className="flex flex-col items-start border-r border-gray-300 ">
      {[
        'Personalized Nutrition Plan',
        'Mobile App Access',
        'Email Support',
        'One-on-One Video Consultations',
        'Recipe Recommendations and Meal Planning',
        'Priority Support',
        'Educational Resources and Guides',
        'Advanced Progress Tracking Tools',
        'Customized Meal Plans and Recipe Suggestions',
        'Phone Support'
      ].map((feature, index) => (
        <p key={index} className="py-4 border-b border-gray-300 px-2">
          {feature}
        </p>
      ))}
    </div>

    {/* Other Columns - Checkmarks */}
    {[...Array(3)].map((_, idx) => (
      <div key={idx} className="flex flex-col items-center border-r border-gray-300">
        {Array(10).fill().map((_, i) => (
          <p key={i} className="py-4 border-b border-gray-300">✔️</p>
        ))}
      </div>
    ))}
  </div>
</div>
<div className="flex items-start mx-[70px] space-x-8">
  {/* FAQ Section */}
  <div>
    <div className="flex flex-col items-center text-center ml-[300px]">
      <h1 className="text-2xl font-bold mt-[70px] ">FAQ</h1>
      <p className="mt-4 text-xs">
        We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.
      </p>
    </div>

    <div className="mx-[8px] h-[320px] w-[800px] bg-lime-50 p-4 mt-[60px] border-4 border-lime-50 ">
      <div className="space-y-4">
        <div className="flex justify-between items-center text-left my-4">
          <p className="w-full">How can nutrition coaching help me lose weight?</p>
          <span className="cursor-pointer text-xs">
            <div className="bg-gray-800 text-white p-1">+</div>
          </span>
        </div>
        <div className="border-b border-gray-400 w-full"></div>

        <div className="flex justify-between items-center text-left my-4">
          <p className="w-full">Can I still enjoy my favorite foods while on a nutrition plan?</p>
          <span className="cursor-pointer text-xs">
            <div className="bg-gray-800 text-white p-1">+</div>
          </span>
        </div>
        <div className="border-b border-gray-400 w-full"></div>

        <div className="flex justify-between items-center text-left my-4">
          <p className="w-full">How often will I have contact with my nutritionist?</p>
          <span className="cursor-pointer text-xs">
            <div className="bg-gray-800 text-white p-1">+</div>
          </span>
        </div>
        <div className="border-b border-gray-400 w-full"></div>

        <div className="flex justify-between items-center text-left my-4">
          <p className="w-full">How long will it take to see results?</p>
          <span className="cursor-pointer text-xs">
            <div className="bg-gray-800 text-white p-1">+</div>
          </span>
        </div>
        <div className="border-b border-gray-400 w-full"></div>

        <div className="flex justify-between items-center text-left my-4">
          <p className="w-full">Are the meal plans and recipes provided suitable for vegetarians or vegans?</p>
          <span className="cursor-pointer text-xs">
            <div className="bg-gray-800 text-white p-1">+</div>
          </span>
        </div>
        <div className="border-b "></div>
      </div>
    </div>
  </div>

  {/* Ask Your Question Section */}
  <div className="bg-lime-50 h-[320px] w-[500px] p-4 flex flex-col items-center text-center space-y-4 mt-[210px]">
  <img className='size-20 ml-auto mr-auto mt-10' src = {NutritionIcon} alt="Nutrition Icon" />
    <h1 className="text-lg font-semibold text-green-900 mt-[130px]">Ask Your Question</h1>
    <p className="text-sm">Feel free to ask questions anytime</p>
    <button className="mt-2 bg-lime-300 hover:bg-lime-500  text-black px-4 py-2 rounded">Ask A Question</button>
  </div>
</div>
    

<nav className=" w-full bg-green-950 text-white py-3 h-[150px] mt-24">
  {/* Navigation Links Section */}
  <div className="flex ">
  <div className="flex items-center max-w-5xl mx-auto px-4">
    <h1 className="flex -ml-32"><img className='size-6 ' src = {NutritionIcon} alt="Nutrition Icon" />Nutritionist</h1>
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
<div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-green-900  border-white ">
  <div className="flex items-center w-full text-sm px-2 py-1 rounded gap-3 ">
    <p className="mx-1 ">hello@squareup.com</p>
    <p className="mx-1">+91813232309</p>
    <p className="mx-1">Somewhere in the World</p>
   <div className="mx-1"><p >2023 Nutritionist. All rights reserved</p></div>
  </div>

</div>
</nav>

</>
  );
};

export default Pricing;

