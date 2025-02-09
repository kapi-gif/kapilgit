import React from 'react'

const Footer = () => {
  return (
    <>
      <nav className=" w-full bg-zinc-950 text-white py-3 h-[150px]">
  {/* Navigation Links Section */}
  <div className="flex ">
  <div className="flex items-center max-w-5xl mx-auto px-4">
    <h1 className="flex -ml-32"><img className='size-6 ' src = {NutritionIcon} alt="Nutrition Icon" />Nutritionist</h1>
    </div>

    <div className="w-7/12 ">
    <ul className="flex gap-1 text-sm">
      <li className="hover:bg-gray-700 px-4 py-2 rounded">Home</li>
      <li className="hover:bg-gray-700 px-4 py-2 rounded">Services</li>
      <li className="hover:bg-gray-700 px-4 py-2 rounded">Features</li>
      <li className="hover:bg-gray-700 px-4 py-2 rounded">Testimonials</li>
      <li className="hover:bg-gray-700 px-4 py-2 rounded">Contact</li>
      
    </ul>
  </div >
  <div className="mr-10 text-sm "><ul><li className="hover:bg-gray-700 px-4 py-2 rounded ">Go To Top <FontAwesomeIcon icon={faArrowUp} /></li></ul></div>
  </div>
  
  {/* Contact Information Section */}

  {/* <div className="flex "> */}
<div className="flex w-11/12 ml-14 -mr-16 items-center mt-6 p-2 bg-teal-800  border-white ">
  <div className="flex items-center w-full text-sm px-2 py-1 rounded gap-3 ">
    <p className="mx-1 ">hello@squareup.com</p>
    <p className="mx-1">+91813232309</p>
    <p className="mx-1">Somewhere in the World</p>
   <div className="mx-1"><p >2023 Nutritionist. All rights reserved</p></div>
  </div>

  {/* <div className="flex"><p>2023 Nutritionist. All rights reserved</p></div> */}

</div>
</nav>
    </>
  )
}

export default Footer
