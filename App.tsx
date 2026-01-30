
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      
      {/* Testimonial / Experience Highlight Section */}
      <section className="py-24 px-4 bg-gray-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 text-blue-500/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H15.017C14.4647 22 14.017 21.5523 14.017 21ZM1 15V9C1 8.44772 1.44772 8 2 8H5C6.10457 8 7 7.10457 7 6V5C7 3.89543 6.10457 3 5 3H2C1.44772 3 1 3.44772 1 4V7C1 7.55228 0.552285 8 0 8C-0.552285 8 -1 7.55228 -1 7V4C-1 1.79086 0.790861 0 3 0H6C8.20914 0 10 1.79086 10 4V6C10 8.20914 8.20914 10 6 10H3C2.44772 10 2 10.4477 2 11V15C2 17.2091 3.79086 19 6 19H7C7.55228 19 8 19.4477 8 20C8 20.5523 7.55228 21 7 21H6C2.13401 21 -1 17.866 -1 14V11C-1 10.4477 -0.552285 10 0 10C0.552285 10 1 10.4477 1 11V15Z" />
          </svg>
          <blockquote className="text-3xl md:text-4xl font-medium text-white italic mb-10 leading-snug">
            "Software engineering is not just about writing code; it's about building resilient systems that solve real-world problems at scale."
          </blockquote>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg text-white">Ozodjon A'zamjonov</span>
            <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Backend Architect</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
