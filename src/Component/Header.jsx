import React from 'react'
import { Link } from 'react-router-dom'
import NutritionIcon from "../Assets/Nutrition Icon.png"

const Header = () => {
  return (
    <>

    <nav className="bg-zinc-950 text-white py-4">
        <h3 className="flex justify-center items-center m-1.5 ml-[13px] text-2xl">
          Innovate Today, Dominate Tomarrow
        </h3>
        <hr className="my-2 border-t border-gray-400" />
        <ul className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <li className="logo text-2xl gap-2 font-semibold mr-auto ml-[20px] flex"><img className='size-8' src = {NutritionIcon} alt="Nutrition Icon" />AI INTEGRATOR</li>
          <div className="flex space-x-4">
            <Link className="hover:bg-pink-600 px-2 py-2 rounded" to = "/">Home</Link>
            <Link className="hover:bg-pink-600 px-2 py-2 rounded" to = "/about2">About</Link>
            <Link className="hover:bg-pink-600 px-2 py-2 rounded" to = "/TeamMembers2">Services</Link>
            <Link className="hover:bg-pink-600 px-2 py-2 rounded" to = "/process">Process</Link>
            {/* <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/pricing">Pricing</Link> */}
            <Link className="hover:bg-pink-600 px-2 py-2 rounded" to = "/blog">Blog</Link>
            <Link className='' to = "/contact"><button className="bg-lime-600 text-white px-4 py-1 m-2 rounded-md text-sm hover:bg-pink-600">Contact Us</button></Link>
            {/* <Link className="hover:bg-gray-600 px-2 py-2 rounded" to = "/blog">Blog</Link> */}
            
          </div>
          {/* <button className="bg-lime-200 text-black px-4 py-2 rounded-md hover:bg-blue-600">Contact Us</button> */}
        </ul>
      </nav>
  
    </>
  )
}

export default Header
