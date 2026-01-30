
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Backend', 'Database', 'Cloud', 'Tools'] as const;

  return (
    <section id="skills" className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4 mono">Tech Stack</h2>
          <h3 className="text-4xl font-bold text-white mb-6">Core Competencies</h3>
          <p className="text-gray-400 max-w-xl">
            Specializing in cloud-native technologies and statically typed languages for building resilient backend infrastructures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-300 border-l-2 border-blue-600 pl-4">{cat}</h4>
              <div className="grid gap-3">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="group p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold group-hover:text-blue-400/80 transition-colors">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
