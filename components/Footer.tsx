import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark">
      {/* CTA Section */}
      <div id="contact" className="relative bg-gradient-to-br from-[#1a251e] via-[#16201a] to-[#0d120f] border-t border-white/5 pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="#558b63" strokeWidth="2"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[600px] bg-primary opacity-5 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Zero Hassle for <br className="hidden sm:block"/> Your School.
          </h2>
          <div className="flex flex-col items-center justify-center space-y-4 mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-2xl">
              BuildLab provides all instructors, materials, and curriculum; schools provide only one classroom for 3 hours on Saturdays.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Contact buildlab.live or call [our contact line] to join the exclusive shortlist of schools for the next cohort.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="group relative bg-primary hover:bg-primary-hover text-white transition-all duration-300 ease-out font-bold text-lg sm:text-xl py-5 px-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(79,138,100,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(79,138,100,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/40 active:translate-y-0 active:scale-95">
              <span className="flex items-center gap-3">
                PARTNER WITH BUILDLAB
                <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-background-dark border-t border-white/10 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center font-extrabold text-2xl tracking-tighter mb-2">
                <span className="text-primary">&lt;/BUILD&gt;</span>
                <span className="text-white">LAB</span>
              </div>
              <p className="text-gray-400 text-sm font-light">
                Empowering the next generation of builders.
              </p>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['Curriculum', 'Success Stories', 'Pricing'].map((link) => (
                <a key={link} href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              {['Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" aria-label={social} className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-all duration-300 text-gray-400 border border-white/10 hover:border-primary/50">
                    {social === 'Twitter' ? (
                        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    ) : (
                        <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.6.6 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                    )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-8"></div>
          
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
            <p>© 2024 BuildLab, Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;