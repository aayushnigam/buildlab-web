import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="relative pt-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none"></div>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-24">
        {/* Left Content - Text First */}
        <div className="flex flex-col space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              India’s First <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">AI Entrepreneurship</span> <br />
              Program
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              A high-performance 16-week journey designed specifically for students in Grades 9-10 to transform ideas into functional apps.
            </p>
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white">Where Ideas Become Apps</h2>
              <p className="text-gray-400">Move beyond theory and master the "vibe coding" era where natural language becomes the most powerful programming tool.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button 
                onClick={() => window.open('https://wa.me/918955422723?text=Hi%20Aayush', '_blank')}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded font-bold text-base transition-all duration-200 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(79,138,100,0.3)] flex items-center justify-center gap-2"
            >
              SCHEDULE FREE DEMO
              <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
            <button 
                onClick={() => window.open('/BuildLab_Syllabus.pdf', '_blank')}
                className="border border-white/20 hover:border-white text-white bg-transparent hover:bg-white/5 px-8 py-4 rounded font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span className="material-icons-round text-gray-400 group-hover:text-white transition-colors">download</span>
              Download Curriculum
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-80"
          >
             <div className="flex -space-x-3">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAx3T5Shqi8nlbr6bpeREaNr31vzdKWq8h_BpZaclDFRzY6wQCSuGnkoi69KYZhswjgN4-vptt7I2uwILnOcj8qNhjk0F1g_w38krkNRvZ6xEoQyIwF_nxf8qb7zwOaiA_myJAV0h1d0lbduXp8NYsbRMU7DbqUdzOXKMEiB5Putz8yrVrE55AipGvSBafQemAV03bKhpgzukAPT51jVnaa4Q4OTaC5uZg9WM4EmJu7gZFvIpfySJy-aDOdWXbhhl9_AM5w8Si0OX0",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBkL5sPlPe9q-7gEIk0O_-Ef7AfjGu5qaTg9LL8dqef9j0vFI9LKrpY9HK0X57EG9HoJw6s4P1TC5yeho8MylBcHZ4EWpnQ_l0SNamkknLB53j6sk4KOVNCRsiP_aGWfEk1WJLROQAfYsn5DRt1lsMwkoanGHIq5k3V_Gs92mrR4PM9_Q9xTRBGpS5oWHw4mxGzwPpc0NWDd_au1gwBGrIS7YifUNH4QxhJ7IvrIbZQz0u1O9XEpSJOYapbR6aas2Cm2M9ZZ6B2pTM",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCJwwK5gIYWxMa10ckKfPrw3DWiuBVT68qumCYjBfC99g9iBWe6p79z0rDLMBWGgxg1jfbiPA4xp9RRtA9Hd7fsa4aVp6bXrTYCgrxeQoyglHBsCBnfBTGodWV2ChyRK65uMzXM_1lrdaw1TnGJ55itNzPCkxVgDOpkplmJgzn0jnTpPmk9fnSWK8lynCdHqBnA8SPdPQWPKx_VTE6jGyzZvdVx9AqcBjiaijDiIAOg0FtOkfi0PVQswuMsSx3LW8-21LamScT4B-E"
              ].map((src, i) => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background-dark object-cover grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  src={src} 
                  alt="Student" 
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">+12</div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-gray-500 font-medium">Mentored by builders from Top Institutes</p>
              <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="flex items-center gap-1.5">
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/1200px-IIT_Kanpur_Logo.svg.png" alt="IIT Kanpur" className="h-5 w-auto" />
                  <span className="text-xs font-bold tracking-wide">IIT Kanpur</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                <div className="flex items-center gap-1.5">
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png" alt="BITS Pilani" className="h-5 w-auto" />
                  <span className="text-xs font-bold tracking-wide">BITS Pilani</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual - Image Second */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute bottom-0 w-[120%] h-1/3 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-3xl rounded-full translate-y-12"></div>
          <div className="relative w-full max-w-md lg:max-w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 group">
            <img 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlY85hl-lIVgqoBS-xn_SV_fiwnzC0meEft-pi482uQGvKK4s7q5BFqlAujebsrFb0rq5OPM8UkqhRttysV310fKMi_X6C2Q5GLqPaEWGyA42_4-C6rvEZrHp6j06hZ3PRD9lF9CvwfkFKZaTU0MK5eijNA6uEqnH77mW5rlxFJLQ9Sv31lzuBBphFhB3lx71GbvGFOMtqc3Eg9hR7wa7-ZChjS9AqdhltQddUcISr5AWx6nultDekcyKyjUuFsc0wIlmNR5rH-rM" 
              alt="Student Presentation"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-xs font-mono text-primary-300 uppercase">Live Demo</span>
                </div>
                <span className="text-xs text-gray-400">Week 16 Project</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">AI-Powered Sign Language Translator</h3>
              <p className="text-gray-300 text-xs line-clamp-2">Real-time computer vision model built by a 16-year-old student using Python & TensorFlow.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="bg-gray-900/50 border-t border-white/5 py-4 w-full backdrop-blur-sm overflow-hidden relative z-20">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            className="flex space-x-12 px-6"
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-gray-400 font-medium text-sm uppercase tracking-widest inline-flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Curriculum by Top 1% Engineering Talent
                </span>
                <span className="text-gray-400 font-medium text-sm uppercase tracking-widest inline-flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Focus on Zero to One
                </span>
                <span className="text-gray-400 font-medium text-sm uppercase tracking-widest inline-flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Backed by Industry Leaders
                </span>
                <span className="text-gray-400 font-medium text-sm uppercase tracking-widest inline-flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Real World Problem Solving
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;