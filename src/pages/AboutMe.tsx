import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Telescope, GamepadIcon, Trophy, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }[]>([]);
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);
  const [planets, setPlanets] = useState<{ id: number; x: number; y: number; size: number; color: string; speed: number }[]>([]);
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
      for (let i = 0; i < 15; i++) {
        newShootingStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 60,
          delay: Math.random() * 12
        });
      }
      setShootingStars(newShootingStars);
    };

    // Generate planets
    const generatePlanets = () => {
      const newPlanets = [];
      const planetColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
      for (let i = 0; i < 8; i++) {
        newPlanets.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 15 + 10,
          color: planetColors[Math.floor(Math.random() * planetColors.length)],
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
          y: Math.random() * 80,
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
      {/* Enhanced Space background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
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
        
        {/* Planets */}
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            className="absolute rounded-full opacity-60 planet"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
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
        
        {/* Enhanced Galaxy/Nebula effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/35 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/25 via-transparent to-transparent"></div>
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
          {/* Profile Header - No image, space-themed */}
          <motion.div 
            className="text-center mb-12" 
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 p-2 relative flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-[#070b24] rounded-full flex items-center justify-center relative overflow-hidden">
                <Telescope className="w-20 h-20 text-indigo-300" />
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
              Grade 10 Student & Aspiring Astronomer
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Passionate about exploring the mysteries of the universe and everything beyond! 🚀✨
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
          
          {/* Enhanced About Section with much more information */}
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
              Hello! My name is Timothy Chen, and I am currently a 15-year-old student in Grade 10. The problem with me is that I'm totally enamored with space and astronomy. Like, totally captivated. Looking up at the night sky and wondering what else might be out there has always been a part of me as a child. It all started when I was eight years old and used a telescope to see Saturn for the first time. Are those rings really visible to me? In that moment, everything changed for me.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
             My long-term objective is to study to be a professional astronomer and add to our expanding knowledge of the universe. What really motivates me about studying exoplanets is the chance that we may discover planets that may support life. I read a lot about the current state of the Mars missions and the most recent findings from the James Webb Space Telescope. It seems that we are living in the era of space exploration!
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I enjoy playing sports to stay active when I'm not stargazing or watching space documentaries. The sports I enjoy playing are badminton and volleyball because they require quick thinking, strategy, and teamwork skills that I believe will be useful in scientific research as well. I also like to play video games, particularly sandbox and creative games like Minecraft that let me build and explore. Making worlds and solving puzzles whether in a game or figuring out how the universe functions has a very fulfilling quality.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
             I'm doing exceptionally well academically in physics and chemistry, which form the foundation of all my later classes. I'm already planning my college career, looking into astronomy and astrophysics programs, and strive to work for NASA or ESA eventually. It may sound ambitious, but I truly believe that understanding our place in the universe is among the most important things that humans can achieve.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-200 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-purple-400" />
                  What I'm Really Into
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Telescope className="text-purple-400 mr-3 h-5 w-5" />
                    <span>Deep Space Astronomy & Cosmology</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fas fa-planet-mars text-purple-400 mr-3"></i>
                    <span>Exoplanet Discovery & Astrobiology</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <i className="fas fa-atom text-purple-400 mr-3"></i>
                    <span>Advanced Physics & Chemistry</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Trophy className="text-purple-400 mr-3 h-5 w-5" />
                    <span>Competitive Badminton & Volleyball</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GamepadIcon className="text-purple-400 mr-3 h-5 w-5" />
                    <span>Creative Gaming (Minecraft, sandbox games)</span>
                  </motion.li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-200 flex items-center">
                  <i className="fas fa-lightbulb mr-2 text-purple-400"></i>
                  Random Cool Facts About Me
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">♌</span>
                    <span>I'm a Leo (July 23rd) - which probably explains why I'm so passionate about everything!</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🌙</span>
                    <span>I track ISS passes and stay up way too late watching meteor showers</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🔭</span>
                    <span>I have my own Celestron telescope and have actually photographed Jupiter's moons</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">📚</span>
                    <span>Currently reading "Astrophysics for Young People in a Hurry" by Neil deGrasse Tyson</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-purple-400 mr-3">🚀</span>
                    <span>My dream trip? The Atacama Desert to visit the ALMA Observatory</span>
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

      {/* Enhanced Space Animations */}
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
            transform: translateX(1200px) translateY(1200px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes ufo-float {
          0% {
            transform: translateX(-200px) translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateX(50vw) translateY(-20px) rotate(5deg);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(120vw) translateY(0) rotate(0deg);
            opacity: 0;
          }
        }
        
        .star {
          animation: twinkle 3s infinite ease-in-out;
        }
        
        .planet {
          filter: blur(0.5px);
        }
        
        .shooting-star {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #fff, transparent);
          animation: shooting-star 6s infinite linear;
        }
        
        .shooting-star::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 2px;
          background: linear-gradient(45deg, #fff, #87ceeb, transparent);
          transform: translateX(-80px);
        }
        
        .shooting-star::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 1px;
          background: linear-gradient(45deg, #a855f7, #60a5fa, transparent);
          transform: translateX(-50px);
        }

        .ufo {
          position: absolute;
          width: 40px;
          height: 20px;
          background: linear-gradient(ellipse, #silver, #gray);
          border-radius: 50% 50% 50% 50% / 80% 80% 20% 20%;
          animation: ufo-float 25s infinite linear;
          box-shadow: 0 0 15px rgba(192, 192, 192, 0.6);
        }

        .ufo::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 15px;
          background: linear-gradient(ellipse, #add8e6, #87ceeb);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(173, 216, 230, 0.8);
        }

        .ufo::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(173, 216, 230, 0.6), transparent);
          border-radius: 50%;
        }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
