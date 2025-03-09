import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './App.css';
import ProjectCard from './components/ProjectCard';


const sliderImages = [
  '/pik1.png',
  '/pik0.png',
  '/pik2.png',
  '/pica.png',
  '/prog1.png',
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className={"w-230 min-h-screen flex flex-col bg-gray-100 text-white"}>

      {/** Hero Section */}
      <div className='flex-1'>
        <section>
          <div className="flex flex-col gap-3">
            <h1 className="pb-3 shadow-md">Hello, 👋 I'm Rob Natale</h1>
            <p className="text-xl text-gray-700 mb-6 mt-1">Software Engineer | React Enthusiast | Lifelong Learner</p>
          </div>
          

        </section>
        {/** Links to site and GitHub */}
        <section>
          <div className="flex flex-col gap-1 mb-0">
            <a 
              href="https://sight-productions.com/"
              target="blank"
              className="ml-45 mr-45 bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-600 transition"
            >
              See My Work
            </a>
            <a 
              href="https://github.com/Robn8"
              target="blank"
              className="ml-45 mr-45 bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-600 transition"
            >
              GitHub
            </a>
          </div>
        </section> 

        {/* Image Slider */}

        <div className="max-w-3xl mx-auto mt-10 mb-12">
          <Slider {...sliderSettings}>
            {sliderImages.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Screenshot ${index + 1}`} className="w-full rounded-xl shadow-lg object-cover object-top h-90" />
              </div>
            ))}
          </Slider>
        </div>
      
        
      { /** Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-center mb-12 underline">REACT DEVELOPMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 p-6 rounded-2xl shadow-md">
              <a href="https://github.com/Robn8/Thelonious" target="blank">
              <ProjectCard title="Thelonious" description="A short description." />
              </a>
              </div>
              <div className="bg-gray-200 p-6 rounded-2xl shadow-md">
                <a href="https://ill-defined.com/" target="blank">
                <ProjectCard title="Ill-Defined Music App" description="A short desciption." />
                </a>
              </div>
            </div>
          </div>
        </section>

      
    </div>
    {/** Footer */}
    <footer className="text-center py-2  bg-gray-800 text-white">
          <p>© {new Date().getFullYear()} Rob Natale. All rights reserved.</p>
        </footer>
      </div>
  )
}

export default App
