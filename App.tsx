import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Curriculum from './components/Curriculum';
import Mentors from './components/Mentors';
import LabExperience from './components/LabExperience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Manifesto />
      <Curriculum />
      <Mentors />
      <LabExperience />
      <Footer />
    </div>
  );
};

export default App;