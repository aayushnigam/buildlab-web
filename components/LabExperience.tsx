import React from 'react';

const LabExperience: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-24 bg-background-dark">
      <div className="absolute inset-0 z-0">
        <img 
            alt="Lab Background" 
            className="w-full h-full object-cover object-center" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL-GYAyYcP9Wwo-46bt2NwPinIz5IbHlIz_C0FfHM7yKa59NpivxQ6fY9-nLMep6VpkFCzBsMc3kJT_eVrueygkME7yQmy3cDJ47gU3oZIpZDNCibjZUyUllYR1CNUQb7BPHN1y2fwZ_yaK-JvjJijjRoIuVKuOi7wgnf3HO8dK6Hf0nIN4arBi8jdzMx0piIQiGQqjr9Mut8ZhqEgKX2ShPgiCvXTm8_t8D04Z6t_ZPe_JQwPWXq9xzwsYJ0qTZxul9zgOJ2i9Iw" 
        />
        <div className="absolute inset-0 bg-background-dark/85 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-transparent opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(101,158,114,0.5)]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">The Lab Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Your School’s <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Innovation Lab.</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
            We turn your existing computer lab into a startup incubator every Saturday.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 gap-6 sm:gap-12 shadow-2xl hover:bg-white/10 transition-colors">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">16</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary/90">Weeks</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-primary shadow-[0_0_8px_rgba(101,158,114,0.6)]"></div>
            <div className="block sm:hidden w-12 h-px bg-primary shadow-[0_0_8px_rgba(101,158,114,0.6)]"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">25+</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary/90">AI Tools</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-primary shadow-[0_0_8px_rgba(101,158,114,0.6)]"></div>
            <div className="block sm:hidden w-12 h-px bg-primary shadow-[0_0_8px_rgba(101,158,114,0.6)]"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">1</span>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary/90">Working Startup</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default LabExperience;