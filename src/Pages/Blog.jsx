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
import NutritionIcon from "../Assets/Nutrition Icon.png"

function Blog() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-zinc-900 p-6 text-white text-center">
        <img className="w-20 h-20 mx-auto mt-10" src={NutritionIcon} alt="Nutrition Icon" />
        <h1 className="text-3xl font-bold mb-4 mt-8">Our Blogs</h1>
        <p className="text-sm md:text-base mx-auto max-w-3xl p-4">
          Welcome to the Blog Section of <strong>AI Integrator's</strong>, your trusted source for the latest insights, trends, and expert advice on Artificial Intelligence and technology innovations. Explore our blog to discover in-depth articles on AI development, machine learning, data science, and cutting-edge IT solutions shaping the future.
        </p>
      </div>

      {/* Blog Entries Section */}
      <div className="bg-zinc-950 p-4 lg:p-20 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Blog 1 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Latest Tech Innovations
            </h3>
            <img
              src={B1}
              alt="Software Development Strategies"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              10 Effective Strategies for Scalable Software Solutions
            </h4>
            <p className="text-xs text-justify mb-4">
              Discover powerful techniques for building scalable and efficient software solutions. Learn best practices in coding, project management, and deploying robust applications with AI Integrators.
            </p>
            <Link to="/blog/software-development-strategies">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Software Development Tips
            </h3>
            <img
              src={B2}
              alt="Code Optimization"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              The Role of Code Optimization in Software Performance
            </h4>
            <p className="text-xs text-justify mb-4">
              Learn how code optimization can enhance software performance, with practical tips for writing efficient code and reducing system overhead.
            </p>
            <Link to="/blog/code-optimization">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              AI Innovations
            </h3>
            <img
              src={B3}
              alt="Machine Learning Algorithms"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              The Benefits of Machine Learning Algorithms in Modern Software
            </h4>
            <p className="text-xs text-justify mb-4">
              Explore how machine learning algorithms are revolutionizing software development. Learn about practical applications, efficiency improvements, and tips for integrating AI into your projects.
            </p>
            <Link to="/blog/machine-learning-algorithms">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 4 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Understanding Cloud Computing
            </h3>
            <img
              src={B4}
              alt="Cloud Computing"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              Understanding Cloud Computing: Benefits and Best Practices
            </h4>
            <p className="text-xs text-justify mb-4">
              Get a comprehensive overview of cloud computing and its role in modern software development. Discover the best platforms and how to optimize your cloud infrastructure for performance.
            </p>
            <Link to="/blog/cloud-computing">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 5 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Agile Development
            </h3>
            <img
              src={B5}
              alt="Agile Development"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              The Benefits of Agile Development
            </h4>
            <p className="text-xs text-justify mb-4">
              Explore the advantages of Agile development methodologies. Learn how Agile can improve project management, collaboration, and the overall software development process.
            </p>
            <Link to="/blog/agile-development">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 6 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Front-End Development
            </h3>
            <img
              src={B6}
              alt="Front-End Development"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              Mastering Front-End Development: Essential Skills and Tools
            </h4>
            <p className="text-xs text-justify mb-4">
              Learn the essential skills and tools required for front-end development. Discover how to build user-friendly and responsive web applications.
            </p>
            <Link to="/blog/front-end-development">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Backend Develpment
            </h3>
            <img
              src={B5}
              alt="Agile Development"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              The Benefits of Game Development
            </h4>
            <p className="text-xs text-justify mb-4">
              Learn the core concepts of backend development, including server-side scripting, database management, and API integration for creating scalable applications.
            </p>
            <Link to="/blog/agile-development">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          {/* Blog 6 */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Game Development
            </h3>
            <img
              src={B2}  // Yaha apko Game Development image import karni hogi
              alt="Game Development"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              Unleashing Creativity in Game Development
            </h4>
            <p className="text-xs text-justify mb-4">
              Discover the fundamentals of game development, from coding mechanics to designing immersive gameplay experiences using popular game engines.
            </p>
            <Link to="/blog/game-development">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 underline text-center text-lime-600">
              Graphic Designing
            </h3>
            <img
              src={B6}  // Graphic design ke liye image import karna hoga
              alt="Graphic Designing"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-bold mb-2 text-center">
              Exploring Creative Tools and Design Techniques
            </h4>
            <p className="text-xs text-justify mb-4">
              Dive into the world of graphic design. Learn about creative tools, design principles, and how to create visually stunning graphics that captivate audiences.
            </p>
            <Link to="/blog/graphic-designing">
              <button className="block mx-auto px-6 py-2 bg-pink-600 rounded hover:bg-lime-500">
                Read More
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-800 p-6 text-white text-center">
        <p>&copy; 2025 AI Integrator's. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Blog;
