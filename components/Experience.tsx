import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4 mono">Career</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Experience</h3>
          <p className="text-gray-400 max-w-xl">
            Multi-tenant SaaS and ERP backends in Go, and lately the AI layer on top.
          </p>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <article key={job.id} className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-xl font-bold text-white">{job.role}</h4>
                  <p className="text-blue-400 font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500 mono whitespace-nowrap">{job.period}</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">{job.summary}</p>
              <ul className="space-y-2 mb-6">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-tight">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
