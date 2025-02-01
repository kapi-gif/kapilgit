
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './Component/About';
import Header from './Component/Header';
// import TeamMembers from './Component/TeamMembers';
import Process from './Pages/Process';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import About2 from './Pages/About2';
import Pricing from './Pages/Pricing';
import TeamMembers2 from './Pages/TeamMembers2';
import Contact from './Pages/Contact';
// import Footer from './Component/Footer';
// import Footer from './Component/Footer';



function App() {
  return (
    <div>

      <div>
      <Header />
    
      {/* <About2 />
      <Pricing />
      <TeamMembers2 /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about2' element={<About2 />} />
          <Route path='/TeamMembers2' element={<TeamMembers2 />} />
          <Route path='/process' element={<Process />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      {/* <div>
        <Footer />
      </div> */}

      
      {/* <Header /> */}
      {/* <About /> */}
      {/* <TeamMembers /> */}

      {/* <div>
      <div className="bg-lime-50 text-center p-8 h-56 m-10">
      <h1 className="text-2xl font-bold">Your Journey to Health and Wellness</h1>
      <p className='ml-10 mr-10 p-5'>At Nutritionist, we believe in providing a personalized and conprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge , and tools you need to succeed . Here's a detailed breakdown of our process.  </p>
      </div>
      <main className="container mx-auto p-4">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <p className='text-sm p-10'>We provide a step-by-step guide on how to get started on your journey towards better health and nutrition. We are here to simplify the process and make it easy for you to navigate our platform and access the resources you need to achieve your goals. Here's how it works.</p>
        </section>
        <Process />
      </main>
    </div> */}

    </div>
  );
}

export default App;
