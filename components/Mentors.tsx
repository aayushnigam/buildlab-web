import React from 'react';
import { motion } from 'framer-motion';

const instructors = [
    {
        name: "Kartik Raj",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Kartik Raj.png",
        fallback: "https://ui-avatars.com/api/?name=Kartik+Raj&background=0D8BFF&color=fff&size=400",
        tags: ["IIT Kanpur"],
        linkedin: "https://www.linkedin.com/in/kartikr23/"
    },
    {
        name: "Aayush Nigam",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Aayush Nigam.png",
        fallback: "https://ui-avatars.com/api/?name=Aayush+Nigam&background=FF5722&color=fff&size=400",
        tags: ["IIIT Guwahati"],
        linkedin: "https://www.linkedin.com/in/aayushnigam22/"
    },
    {
        name: "Pooja Talele",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "/pooja-talele.jpeg",
        fallback: "https://ui-avatars.com/api/?name=Pooja+Talele&background=4CAF50&color=fff&size=400",
        tags: ["BITS PILANI"],
        linkedin: "https://www.linkedin.com/in/poojatalele/"
    },
    {
        name: "Akarsh Sharma",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Akarsh Sharma.png",
        fallback: "https://ui-avatars.com/api/?name=Akarsh+Sharma&background=9C27B0&color=fff&size=400",
        tags: ["HBTU Kanpur"],
        linkedin: "https://www.linkedin.com/in/akarsh29/"
    },
    {
        name: "Sanyam Maheshwari",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Sanyam Maheshwari.png",
        fallback: "https://ui-avatars.com/api/?name=Sanyam+Maheshwari&background=E91E63&color=fff&size=400",
        tags: ["Deloitte"],
        linkedin: "https://www.linkedin.com/in/sanyam-maheshwari/"
    },
    {
        name: "Yash Goyal",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Yash Goyall.png",
        fallback: "https://ui-avatars.com/api/?name=Yash+Goyal&background=FFC107&color=000&size=400",
        tags: ["NMIMS"],
        linkedin: "https://www.linkedin.com/in/yash-goyal-3686311b0/"
    },
    {
        name: "Sagnik Banerjee",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Sagnik  Banerjee.png",
        fallback: "https://ui-avatars.com/api/?name=Sagnik+Banerjee&background=00BCD4&color=fff&size=400",
        tags: ["Urban Company"],
        linkedin: "https://www.linkedin.com/in/sagnik--banerjee/"
    },
    {
        name: "Pranav Bagla",
        role: "Mentor",
        bio: "Expert mentor guiding students through the BuildLab curriculum.",
        img: "public/Pranav Bagla.png",
        fallback: "https://ui-avatars.com/api/?name=Pranav+Bagla&background=795548&color=fff&size=400",
        tags: ["DTU"],
        linkedin: "https://www.linkedin.com/in/baglapranav07/"
    }
];

const Mentors: React.FC = () => {
  return (
    <section id="mentors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background-dark">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
            Top 1% Talent
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Mentors
          </h2>
        </div>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, i) => (
            <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-surface-dark border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(79,138,100,0.2)]"
            >
              <div className="aspect-[3/4] bg-[#0f0f0f] relative overflow-hidden flex items-end justify-center p-6 pb-0 group-hover:bg-[#151515] transition-colors">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-full h-full transform translate-y-4 transition-transform duration-500 group-hover:translate-y-2">
                  <img 
                    alt={instructor.name} 
                    className="w-full h-full object-cover object-top rounded-t-lg shadow-2xl border-t border-l border-r border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src={instructor.img} 
                    onError={(e) => {
                      e.currentTarget.src = instructor.fallback;
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{instructor.name}</h3>
                  {instructor.linkedin && (
                    <a 
                      href={instructor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                      aria-label={`${instructor.name}'s LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-primary-light text-xs font-medium mb-2">{instructor.role}</p>
                <p className="text-sm text-gray-400 mb-6 line-clamp-2">{instructor.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {instructor.tags.map((tag, j) => (
                    <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/5 text-gray-300 border border-white/10 uppercase tracking-wider">
                      <span className="w-1 h-1 rounded-full bg-primary mr-1.5"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mentors;