import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Telescope, GamepadIcon, Trophy, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  const [ufos, setUfos] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  const [planets, setPlanets] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);
  
  useEffect(() => {
    // Generate background stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
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
          delay: Math.random() * 8
        });
      }
      setShootingStars(newShootingStars);
    };
    
    // Generate UFOs
    const generateUfos = () => {
      const newUfos = [];
      for (let i = 0; i < 3; i++) {
        newUfos.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 40,
          delay: Math.random() * 15
        });
      }
      setUfos(newUfos);
    };
    
    // Generate planets
    const generatePlanets = () => {
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
      const newPlanets = [];
      for (let i = 0; i < 5; i++) {
        newPlanets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setPlanets(newPlanets);
    };
    
    generateStars();
    generateShootingStars();
    generateUfos();
    generatePlanets();
    
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
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
            className="shooting-star"
            style={{
              left: `${shootingStar.x}%`,
              top: `${shootingStar.y}%`,
              animationDelay: `${shootingStar.delay}s`
            }}
          />
        ))}
        
        {/* UFOs */}
        {ufos.map((ufo) => (
          <div
            key={ufo.id}
            className="ufo"
            style={{
              left: `${ufo.x}%`,
              top: `${ufo.y}%`,
              animationDelay: `${ufo.delay}s`
            }}
          />
        ))}
        
        {/* Planets */}
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            className="absolute rounded-full planet"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1, 0.8],
              rotate: 360
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              background: `radial-gradient(circle at 30% 30%, ${planet.color}, ${planet.color}80)`,
              boxShadow: `0 0 20px ${planet.color}40`
            }}
          />
        ))}
        
        {/* Enhanced Nebula effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
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
              <p className="text-xs text-purple-300 mt-1">♌ Leo</p>
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
          
          {/* Enhanced About Section */}
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
              Hey there! I'm Timothy Chen, a 15-year-old high school student with an absolutely massive passion for science and astronomy. 
              Ever since I was about 7 years old, I've been completely fascinated by the stars, planets, black holes, and everything beyond our Earth. 
              It all started when my dad showed me Saturn through a small telescope - seeing those rings with my own eyes was the moment I knew I wanted to spend my life exploring the universe.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              My dream is to become a professional astronomer and astrophysicist, working at places like NASA, SpaceX, or major observatories around the world. 
              I'm especially interested in exoplanet research and the search for extraterrestrial life. The thought that we might discover signs of life on other worlds during my lifetime gives me chills - in the best way possible! 
              I spend hours reading research papers about the James Webb Space Telescope discoveries and follow every major space mission.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              When I'm not studying astronomy or doing homework, you can find me playing badminton or volleyball with my friends at school. 
              I love the strategy and teamwork these sports require - it's like problem-solving but with your whole body! I'm also pretty into gaming, 
              especially space exploration games like Kerbal Space Program and No Man's Sky. Gaming helps me relax and connect with friends online, 
              and honestly, some of these games have taught me more about orbital mechanics than my textbooks!
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              At school, science classes are definitely my favorite - particularly physics and chemistry. I love understanding how the universe works at both 
              the smallest and largest scales. Right now I'm diving deep into calculus and advanced physics to prepare for university applications. 
              My goal is to get into a top-tier astronomy program, maybe at Caltech, MIT, or the University of Toronto. 
              Being a Leo, I guess I naturally love being challenged and reaching for the stars - literally!
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
                    <span>Astronomy & Astrophysics</span>
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
                    <span>Space Gaming & Technology</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fas fa-satellite text-purple-400 mr-3"></i>
                    <span>Exoplanet Research</span>
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
                    <span className="text-purple-400 mr-3">🎂</span>
                    <span>Leo ♌ (July 23rd) - ambitious and loves challenges!</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🌙</span>
                    <span>I stay up all night during meteor shower events</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🎮</span>
                    <span>Kerbal Space Program taught me orbital mechanics</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">📚</span>
                    <span>Reading about JWST discoveries and black holes</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🛸</span>
                    <span>Hopeful we'll find alien life in my lifetime</span>
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
                    Ace my science courses and get into a great university with a strong astronomy program
                  </p>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">🔭 Career Dreams</h3>
                  <p className="text-gray-300">
                    Become a professional astronomer and maybe work at NASA or a major observatory
                  </p>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <h3 className="text-xl font-bold text-purple-300 mb-2">🌟 Big Dream</h3>
                  <p className="text-gray-300">
                    Discover a new exoplanet or contribute to finding signs of life beyond Earth!
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
                    <h3 className="text-lg font-bold text-purple-300">Advanced Math</h3>
                    <p className="text-gray-400">Calculus and physics calculations</p>
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
                    <h3 className="text-lg font-bold text-purple-300">Programming</h3>
                    <p className="text-gray-400">Python for data analysis</p>
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
                    <h3 className="text-lg font-bold text-purple-300">Telescope Operation</h3>
                    <p className="text-gray-400">Learning to use different telescopes</p>
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
        
        @keyframes shooting-star {
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
        
        @keyframes ufo-float {
          0% {
            transform: translateX(-50px) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateX(50vw) translateY(-20px) rotate(180deg);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(0) rotate(360deg);
            opacity: 0;
          }
        }
        
        .star {
          animation: twinkle 3s infinite ease-in-out;
        }
        
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #fff, transparent);
          animation: shooting-star 6s infinite linear;
        }
        
        .shooting-star::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 1px;
          background: linear-gradient(45deg, #fff, transparent);
          transform: translateX(-80px);
        }
        
        .shooting-star::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 1px;
          background: linear-gradient(45deg, #a855f7, transparent);
          transform: translateX(-50px);
        }
        
        .ufo {
          position: absolute;
          width: 40px;
          height: 20px;
          background: linear-gradient(to bottom, #4ade80, #22c55e);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: ufo-float 20s infinite linear;
          box-shadow: 0 0 10px #4ade80, inset 0 2px 5px rgba(255,255,255,0.3);
        }
        
        .ufo::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 10px;
          background: radial-gradient(circle, #60a5fa, #3b82f6);
          border-radius: 50%;
        }
        
        .ufo::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(to right, transparent, rgba(64, 224, 208, 0.5), transparent);
          border-radius: 50%;
        }
        
        .planet {
          position: relative;
        }
        
        .planet::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          width: 30%;
          height: 30%;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          filter: blur(2px);
        }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
