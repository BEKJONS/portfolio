
import React from 'react';
import { STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          System Online: Ready to scale
        </div>

        <div className="relative mb-6">
          <img
            src="/assets/img/mee.jpg"
            alt="Ozodjon A'zamjonov"
            className="w-32 h-32 rounded-3xl mx-auto border-2 border-gray-800 object-cover shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Ozodjon A'zamjonov
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          More than 2 years of experience in the IT industry, building high-performance <span className="text-white font-medium">distributed systems</span> and <span className="text-white font-medium">robust backends</span> using Go. Specialized in <span className="text-white font-medium">system design</span> and architecture, with implementations across multiple production projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="/assets/pdf/resume.pdf" download className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
            Download CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </a>
          <a href="https://t.me/ozodjons05" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-white font-semibold transition-all">
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-gray-800/50">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
