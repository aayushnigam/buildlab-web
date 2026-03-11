import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background-dark overflow-hidden border-b border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[96px] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto container">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase mb-6"
          >
            The Mission
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8"
          >
            Computer Science <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Reimagined.</span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-1 bg-primary mx-auto mb-8 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <Card 
            icon="groups" 
            title="From Students to Mini-CEOs"
            desc={<>We don't just teach coding, we train solo founders to manage GTM strategies, product design, and business logic.</>}
          />
          <Card 
            icon="auto_awesome" 
            title="AI-Native Building"
            desc={<>Master 25+ cutting-edge tools including <strong className="text-gray-200">Gemini AI Studio</strong>, <strong className="text-gray-200">Claude</strong>, and <strong className="text-gray-200">Midjourney</strong> to achieve 10x efficiency.</>}
          />
          <Card 
            icon="bolt" 
            title="No-Code, High Impact"
            desc={<>Use tools like <strong className="text-gray-200">Bolt.new</strong> and <strong className="text-gray-200">Replit Agent</strong> to build production-grade apps without years of traditional syntax training.</>}
          />
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-gray-500">The Modern Builder's Stack</p>
          <div className="flex justify-center gap-8 mt-6 grayscale opacity-70">
               {/* Simple representations of logos for visual balance */}
               <span className="text-lg font-bold text-gray-400">Gemini</span>
               <span className="text-lg font-bold text-gray-400">Replit</span>
               <span className="text-lg font-bold text-gray-400">n8n</span>
               <span className="text-lg font-bold text-gray-400">Bolt.new</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card: React.FC<{ icon: string; title: string; desc: React.ReactNode; extras?: React.ReactNode }> = ({ icon, title, desc, extras }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: 'rgba(79, 138, 100, 0.5)' }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative p-8 rounded-xl bg-surface-dark border border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 text-center"
  >
    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <span className="material-icons-outlined text-primary text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
      {title}
    </h3>
    {extras}
    <p className="text-gray-400 leading-relaxed text-base">
      {desc}
    </p>
  </motion.div>
);

export default Manifesto;