import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Mentors', href: '#mentors' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const scrollPosition = window.scrollY + 150; // Offset for navbar height and visual focus
      
      let current = '';
      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = link.href.substring(1);
            }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
        const offset = 80; // Height of the navbar
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
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 glass-nav bg-[#050505]/90 backdrop-blur-md border-b border-white/5 h-20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <a 
                href="#"
                onClick={(e) => handleLinkClick(e, '#root')}
                className="flex-shrink-0 flex items-center cursor-pointer group"
            >
              <div className="flex items-center font-extrabold text-2xl tracking-tighter">
                <span className="text-primary transition-colors group-hover:text-primary-light">&lt;/BUILD&gt;</span>
                <span className="text-white transition-colors group-hover:text-gray-200">LAB</span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full hover:bg-white/5 ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {item.name}
                        {isActive && (
                            <motion.div
                                layoutId="navbar-active"
                                className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </a>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => window.open('https://wa.me/918955422723?text=Hi%20Aayush', '_blank')}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(79,138,100,0.3)] hover:shadow-[0_0_30px_rgba(79,138,100,0.5)] active:scale-95"
              >
                Partner With Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="material-icons-round text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-2xl font-bold py-4 border-b border-white/10 ${
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                  <button 
                    onClick={() => window.open('https://wa.me/918955422723?text=Hi%20Aayush', '_blank')}
                    className="w-full bg-primary py-4 rounded-xl font-bold text-white text-lg shadow-lg shadow-primary/20"
                  >
                      Partner With Us
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;