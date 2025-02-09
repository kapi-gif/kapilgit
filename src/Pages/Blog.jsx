
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import B1 from "../Assets/B1.jpg";
import B2 from "../Assets/B2.jpg";
import B3 from "../Assets/B3.jpg";
import B4 from "../Assets/B4.jpg";
import B5 from "../Assets/B5.jpg";
import B6 from "../Assets/B6.jpg";
import B7 from "../Assets/B7.webp";
import B8 from "../Assets/B8.jpg";
import B9 from "../Assets/B9.png";
import NutritionIcon from "../Assets/Nutrition Icon.png";

function Blog() {
  return (
    <>
      
      <motion.div
        className="bg-zinc-900 p-6 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img className="w-20 h-20 mx-auto mt-10" src={NutritionIcon} alt="Nutrition Icon" />
        <h1 className="text-3xl font-bold mb-4 mt-8">Our Blogs</h1>
        <p className="text-sm md:text-base mx-auto max-w-3xl p-4">
          Welcome to the Blog Section of <strong>AI Integratorz</strong>, your trusted source for the latest insights, trends, and expert advice on Artificial Intelligence and technology innovations.
        </p>
      </motion.div>

      {/* Blog Entries Section */}
      <div className="bg-zinc-950 p-4 lg:p-20 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Latest Tech Innovations", img: B1, link: "/blog/tech-innovations", desc: "Discover powerful techniques for building scalable and efficient software solutions." },
            { title: "Software Development Tips", img: B2, link: "/blog/software-development", desc: "Learn how code optimization can enhance software performance." },
            { title: "AI Innovations", img: B3, link: "/blog/ai-innovations", desc: "Explore how machine learning algorithms are revolutionizing software development." },
            { title: "Understanding Cloud Computing", img: B4, link: "/blog/cloud-computing", desc: "Get a comprehensive overview of cloud computing and its role in modern development." },
            { title: "Agile Development", img: B5, link: "/blog/agile-methodologies", desc: "Explore the advantages of Agile methodologies in project management." },
            { title: "Front-End Development", img: B6, link: "/blog/front-end-development", desc: "Learn essential skills and tools required for front-end development." },
            { title: "Cybersecurity Trends", img: B9, link: "/blog/cybersecurity", desc: "Stay ahead with the latest trends in cybersecurity and data protection." },
            { title: "Data Science & AI", img: B8, link: "/blog/data-science", desc: "Understand how data science and AI are shaping the future of technology." },
            { title: "Blockchain & Web3", img: B7, link: "/blog/blockchain-web3", desc: "Dive into the world of blockchain, cryptocurrencies, and the future of Web3." }
          ].map((blog, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-zinc-950 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
                {blog.title}
              </h3>
              <motion.img
                src={blog.img}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-xs text-justify mb-4">{blog.desc}</p>
              <Link to={blog.link}>
                <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500 transition-all duration-300">
                  Read More
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 p-6 text-white text-center">
        <p>&copy; 2025 AI Integratorz . All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Blog;
