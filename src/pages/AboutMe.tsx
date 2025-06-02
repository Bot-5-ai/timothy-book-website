
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Telescope, GamepadIcon, Trophy, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  const [planets, setPlanets] = useState<{ id: number; x: number; y: number; size: number; type: string; speed: number }[]>([]);
  const [ufos, setUfos] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  
  useEffect(() => {
    // Generate background stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.9 + 0.1,
          speed: Math.random() * 0.05 + 0.01
        });
      }
      setStars(newStars);
    };
    
    // Generate shooting stars
    const generateShootingStars = () => {
      const newShootingStars = [];
      for (let i = 0; i < 12; i++) {
        newShootingStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 60,
          delay: Math.random() * 15
        });
      }
      setShootingStars(newShootingStars);
    };

    // Generate planets
    const generatePlanets = () => {
      const planetTypes = ['jupiter', 'saturn', 'mars', 'venus', 'neptune'];
      const newPlanets = [];
      for (let i = 0; i < 6; i++) {
        newPlanets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 40,
          type: planetTypes[Math.floor(Math.random() * planetTypes.length)],
          speed: Math.random() * 0.02 + 0.005
        });
      }
      setPlanets(newPlanets);
    };

    // Generate UFOs
    const generateUfos = () => {
      const newUfos = [];
      for (let i = 0; i < 4; i++) {
        newUfos.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 80 + 10,
          delay: Math.random() * 20
        });
      }
      setUfos(newUfos);
    };
    
    generateStars();
    generateShootingStars();
    generatePlanets();
    generateUfos();
    
    // Initialize animations
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        once: false
      });
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-[#070b24] text-gray-100 font-roboto relative overflow-hidden">
      {/* Enhanced Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white star"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
        
        {/* Enhanced Shooting Stars */}
        {shootingStars.map((shootingStar) => (
          <div
            key={shootingStar.id}
            className="shooting-star enhanced-meteor"
            style={{
              left: `${shootingStar.x}%`,
              top: `${shootingStar.y}%`,
              animationDelay: `${shootingStar.delay}s`
            }}
          />
        ))}

        {/* Floating Planets */}
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            className={`absolute planet planet-${planet.type}`}
            initial={{ opacity: 0.6, rotate: 0 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              rotate: 360,
              y: [0, -20, 0]
            }}
            transition={{
              duration: 20 + planet.id * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
            }}
          />
        ))}

        {/* UFOs */}
        {ufos.map((ufo) => (
          <motion.div
            key={ufo.id}
            className="ufo"
            initial={{ opacity: 0, x: -100 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              x: ['-100px', `${window.innerWidth + 100}px`],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              delay: ufo.delay,
              ease: "easeInOut"
            }}
            style={{
              left: `${ufo.x}%`,
              top: `${ufo.y}%`,
            }}
          />
        ))}
        
        {/* Enhanced Nebula effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/35 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Navigation */}
      <header className="py-4 px-6 bg-[#040613]/80 border-b border-indigo-900/30 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Telescope className="h-8 w-8 mr-3 text-indigo-400" />
            <h1 className="text-indigo-300 text-2xl font-bold">Timothy Chen</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-indigo-300 transition-colors">Home</Link>
            <Link to="/hatchet" className="text-gray-300 hover:text-indigo-300 transition-colors">Hatchet</Link>
            <Link to="/our-final-invention" className="text-gray-300 hover:text-indigo-300 transition-colors">AI Book</Link>
            <Link to="/about-me" className="text-indigo-300 transition-colors">About Me</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-indigo-300">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Back to Home button */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-black/30 text-indigo-300 border-indigo-500/30 hover:bg-indigo-900/40 backdrop-blur-md">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back Home
          </Button>
        </Link>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <motion.div 
            className="text-center mb-12" 
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 p-2 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-[#070b24] rounded-full flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  alt="Timothy Chen" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-full"></div>
              </div>
              <Star className="absolute -top-2 -right-2 text-yellow-400 animate-pulse" size={20} />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Timothy!</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-indigo-200/80 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Grade 10 Student & Future Astronomer
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Passionate about science, space, and everything beyond! 🚀
            </motion.p>
          </motion.div>
          
          {/* Quick Facts Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.div 
              className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-6 text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-indigo-200 mb-2">Age</h3>
              <p className="text-gray-300">15 years old</p>
              <p className="text-sm text-gray-400">Born July 23, 2009</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-6 text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Telescope className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-indigo-200 mb-2">Dream Career</h3>
              <p className="text-gray-300">Astronomer</p>
              <p className="text-sm text-gray-400">Studying the cosmos</p>
            </motion.div>
            
            <motion.div 
              className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-6 text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-indigo-200 mb-2">Grade</h3>
              <p className="text-gray-300">10th Grade</p>
              <p className="text-sm text-gray-400">High school student</p>
            </motion.div>
          </motion.div>
          
          {/* About Section - Enhanced with more content */}
          <motion.div 
            className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl mb-12" 
            data-aos="fade-up"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
              <i className="fas fa-user-astronaut mr-3"></i>
              About Me
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hey there! I'm Timothy Chen, a 15-year-old high school student with a huge passion for science and astronomy. 
              Ever since I was little, I've been fascinated by the stars, planets, and everything beyond our Earth. 
              My dream is to become an astronomer and maybe even discover something amazing in space someday!
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              What really excites me about astronomy is the endless mystery of it all. Every night when I look up at the sky, 
              I'm reminded that we're just a tiny part of this incredible universe. I love reading about black holes, 
              exoplanets, and the possibility of life beyond Earth. The James Webb Space Telescope images absolutely blow my mind!
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              When I'm not studying or stargazing, you can find me playing badminton or volleyball with friends, 
              or gaming on my computer. I'm really into Plants vs Zombies Garden Warfare 2 and Minecraft - there's something 
              about building and creating worlds that appeals to me, maybe it's similar to how scientists piece together 
              theories about how the universe works!
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              School-wise, I absolutely love physics and chemistry. There's something magical about understanding how 
              things work at the most fundamental level. I'm particularly fascinated by quantum mechanics and how it 
              relates to astrophysics. I'm also learning Python programming because I know it's essential for data 
              analysis in astronomy research.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-200 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-purple-400" />
                  My Interests
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Telescope className="text-purple-400 mr-3 h-5 w-5" />
                    <span>Astronomy & Space Science</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fas fa-atom text-purple-400 mr-3"></i>
                    <span>Physics & Chemistry</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Trophy className="text-purple-400 mr-3 h-5 w-5" />
                    <span>Badminton & Volleyball</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GamepadIcon className="text-purple-400 mr-3 h-5 w-5" />
                    <span>Plants vs Zombies GW2 & Minecraft</span>
                  </motion.li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-200 flex items-center">
                  <i className="fas fa-lightbulb mr-2 text-purple-400"></i>
                  Fun Facts
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🦁</span>
                    <span>Leo ♌ (July 23rd baby!)</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🌙</span>
                    <span>I love staying up late to watch meteor showers</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🔭</span>
                    <span>I have my own telescope and track Jupiter's moons</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">📚</span>
                    <span>Currently reading about gravitational waves</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Goals & Dreams */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <motion.div 
              className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl" 
              data-aos="fade-up" 
              data-aos-delay="100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
                <i className="fas fa-rocket mr-3"></i>
                My Goals
              </h2>
              
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 5 }}>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">🎓 Academic Goals</h3>
                  <p className="text-gray-300">
                    Ace my science courses and get into a great university with a strong astronomy program. 
                    I'm particularly interested in MIT, Caltech, or the University of Toronto.
                  </p>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">🔭 Career Dreams</h3>
                  <p className="text-gray-300">
                    Become a professional astronomer and maybe work at NASA, ESA, or a major observatory. 
                    I'd love to be part of a team that discovers habitable exoplanets.
                  </p>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">🌟 Big Dream</h3>
                  <p className="text-gray-300">
                    Discover a new exoplanet or contribute to finding signs of life beyond Earth! 
                    Maybe even help design future space telescopes.
                  </p>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl" 
              data-aos="fade-up" 
              data-aos-delay="200"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center">
                <i className="fas fa-star mr-3"></i>
                What I'm Learning
              </h2>
              
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/40 rounded-lg mr-4 flex items-center justify-center">
                    <i className="fas fa-calculator text-indigo-300"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-300">Advanced Math & Physics</h3>
                    <p className="text-gray-400">Calculus, differential equations, and quantum mechanics basics</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/40 rounded-lg mr-4 flex items-center justify-center">
                    <i className="fas fa-laptop-code text-indigo-300"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-300">Python Programming</h3>
                    <p className="text-gray-400">Data analysis, matplotlib, and astronomical calculations</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/40 rounded-lg mr-4 flex items-center justify-center">
                    <Telescope className="text-indigo-300 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-300">Observational Astronomy</h3>
                    <p className="text-gray-400">Using telescopes and understanding celestial coordinates</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div 
            className="bg-[#0c1333]/70 backdrop-blur-md border border-indigo-900/30 rounded-xl p-8 shadow-xl text-center"
            data-aos="fade-up"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-indigo-300 flex items-center justify-center">
              <i className="fas fa-paper-plane mr-3"></i>
              Let's Connect!
            </h2>
            
            <p className="text-gray-300 mb-6">
              I love meeting other science enthusiasts and learning from everyone. Feel free to reach out if you want to talk about space, science, or just chat!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#" 
                className="flex items-center px-6 py-3 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-discord mr-2"></i>
                Discord
              </motion.a>
              <motion.a 
                href="#" 
                className="flex items-center px-6 py-3 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram mr-2"></i>
                Instagram
              </motion.a>
              <motion.a 
                href="mailto:timothy.chen@example.com" 
                className="flex items-center px-6 py-3 bg-indigo-900/50 hover:bg-indigo-800/70 text-indigo-200 rounded-lg transition-colors shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope mr-2"></i>
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#040613]/90 border-t border-indigo-900/30 py-8 relative z-10 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-indigo-200 text-sm">
                © 2025 Timothy Chen - Future Astronomer 🚀
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Animations */}
      <style>
        {`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        
        @keyframes enhanced-shooting-star {
          0% {
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(1000px) translateY(1000px) rotate(45deg);
            opacity: 0;
          }
        }
        
        .star {
          animation: twinkle 3s infinite ease-in-out;
        }
        
        .enhanced-meteor {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #fff, transparent);
          animation: enhanced-shooting-star 6s infinite linear;
          box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
        }
        
        .enhanced-meteor::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #a855f7, transparent);
          transform: translateX(-80px);
          box-shadow: 0 0 15px #a855f7;
        }
        
        .enhanced-meteor::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 1px;
          background: linear-gradient(45deg, #60a5fa, transparent);
          transform: translateX(-50px);
        }

        .planet {
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%);
          filter: blur(0.5px);
        }

        .planet-jupiter {
          background: linear-gradient(45deg, #d97706, #f59e0b, #d97706);
        }

        .planet-saturn {
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          position: relative;
        }

        .planet-saturn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: -20%;
          width: 140%;
          height: 2px;
          background: rgba(251, 191, 36, 0.6);
          transform: translateY(-50%);
        }

        .planet-mars {
          background: linear-gradient(45deg, #dc2626, #ef4444);
        }

        .planet-venus {
          background: linear-gradient(45deg, #eab308, #facc15);
        }

        .planet-neptune {
          background: linear-gradient(45deg, #2563eb, #3b82f6);
        }

        .ufo {
          width: 40px;
          height: 20px;
          background: linear-gradient(45deg, #64748b, #94a3b8);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          position: relative;
          filter: drop-shadow(0 0 10px rgba(148, 163, 184, 0.5));
        }

        .ufo::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 10px;
          background: linear-gradient(45deg, #475569, #64748b);
          border-radius: 50%;
        }

        .ufo::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 20px;
          background: conic-gradient(from 0deg, transparent, rgba(34, 197, 94, 0.3), transparent);
          border-radius: 50%;
          animation: ufo-light 2s infinite ease-in-out;
        }

        @keyframes ufo-light {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(1.2); }
        }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
