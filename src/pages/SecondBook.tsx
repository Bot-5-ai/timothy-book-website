
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Swords, Scroll, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecondBook = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    const AOS = window.AOS;
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
        easing: 'ease-in-out',
        delay: 100
      });
    }

    // Initialize particles.js for background effects
    const particlesJS = window.particlesJS;
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 15, density: { enable: true, value_area: 800 } },
          color: { value: '#d4af37' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            out_mode: 'out'
          }
        }
      });
    }

    // Initialize torch flickering effect
    const torches = document.querySelectorAll('.torch');
    torches.forEach(torch => {
      setInterval(() => {
        const randomIntensity = 0.7 + Math.random() * 0.3;
        torch.style.filter = `brightness(${randomIntensity})`;
        torch.style.textShadow = `0 0 ${10 + Math.random() * 10}px rgba(255, 165, 0, ${0.6 + Math.random() * 0.4})`;
      }, 100);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-medieval relative overflow-x-hidden bg-medieval-dark text-medieval-light">
      {/* Particles background */}
      <div id="particles-js" className="absolute inset-0 z-0 opacity-40"></div>
      
      {/* Medieval texture overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-repeat" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/parchment.png')"}}></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-medieval-dark/95 to-medieval-dark-alt/95 border-b border-medieval-gold/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-medieval-gold font-cinzel font-bold text-xl">
              <span className="flex items-center">
                <Shield className="mr-2 h-6 w-6" />
                Medieval Chronicles
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Link to="/">
                <Button variant="outline" className="border-medieval-gold/30 text-medieval-gold bg-medieval-dark-alt/50 hover:bg-medieval-dark-alt hover:border-medieval-gold/50">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to Kingdom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 pt-20">
        {/* Background castle silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-64 md:h-96 bg-repeat-x z-0 opacity-30 castle-silhouette"></div>
        
        {/* Flying dragon animation */}
        <div className="dragon absolute top-1/4 -right-20 w-40 h-40 z-10 animate-dragon-flight">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1068/1068778.png" 
            alt="Flying Dragon" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,165,0,0.6)]"
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div 
            className="inline-block mb-6 p-2 px-4 border-2 border-medieval-gold rounded-sm text-medieval-gold text-sm font-medieval tracking-widest shadow-xl shadow-black/30"
            data-aos="fade-down"
          >
            <span className="torch">MEDIEVAL CHRONICLES</span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-black mb-6 text-medieval-parchment tracking-wide"
            data-aos="fade-up"
          >
            <span className="block">The Kingdom of</span> 
            <span className="text-medieval-gold medieval-text-shadow">Dragons & Knights</span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-medieval-light mb-8 max-w-3xl mx-auto font-medieval"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A tale of honor, bravery, and the ancient conflict between noble knights and fearsome dragons
          </p>

          <div 
            className="mb-8 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center bg-medieval-dark-alt/80 shadow-2xl rounded-sm p-4 border border-medieval-gold/30">
              <div className="h-20 w-20 mr-4 overflow-hidden">
                <div className="h-full w-full bg-medieval-dark-alt flex items-center justify-center rounded-sm border border-medieval-gold/30">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/3712/3712093.png" 
                    alt="Medieval Coat of Arms" 
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm text-medieval-gold/80">WRITTEN BY</p>
                <p className="font-cinzel font-semibold text-medieval-light">Sir William of Westeros</p>
              </div>
            </div>
          </div>

          <div 
            className="animate__animated animate__fadeInUp animate__delay-1s"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={() => scrollToSection('summary')}
              className="px-8 py-3 bg-medieval-gold/80 text-medieval-dark rounded-sm font-medieval font-bold tracking-wider hover:bg-medieval-gold transition-colors shadow-lg hover:shadow-medieval-gold/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                <Scroll className="mr-2 h-5 w-5" />
                Begin The Journey
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-medieval-gold to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </div>
        </div>

        {/* Decorative torches */}
        <div className="absolute left-8 top-1/3 hidden md:block">
          <div className="torch w-10 h-16 bg-gradient-to-t from-orange-600 to-yellow-300 rounded-t-full animate-torch-flicker"></div>
        </div>
        <div className="absolute right-8 top-1/3 hidden md:block">
          <div className="torch w-10 h-16 bg-gradient-to-t from-orange-600 to-yellow-300 rounded-t-full animate-torch-flicker"></div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-20 px-4 relative border-t border-medieval-gold/20">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-medieval-gold"></div>
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mx-4 text-medieval-gold medieval-text-shadow">
                The Chronicle
              </h2>
              <div className="h-0.5 w-12 bg-medieval-gold"></div>
            </div>
            <p className="text-medieval-parchment/80 max-w-2xl mx-auto">
              An ancient tale passed down through generations of scribes
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-medieval-dark-alt border border-medieval-gold/30 rounded-sm shadow-2xl shadow-black/30 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-medieval-dark to-medieval-dark-alt p-6 flex items-center justify-center border-r border-medieval-gold/20">
                <div className="relative">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/6045/6045852.png"
                    alt="Medieval Book" 
                    className="max-h-80 animate__animated animate__fadeIn drop-shadow-[0_5px_15px_rgba(212,175,55,0.3)]"
                  />
                </div>
              </div>

              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-medieval-gold font-medieval font-semibold mb-1">
                  The Legend
                </div>
                <h3 className="text-2xl font-cinzel font-bold mb-4 text-medieval-parchment">
                  Dragons & Knights: An Eternal Conflict
                </h3>

                <div className="text-medieval-light/90 space-y-4 font-medieval">
                  <p className="first-letter:text-3xl first-letter:font-cinzel first-letter:text-medieval-gold first-letter:mr-1 first-letter:float-left">
                    In the ancient kingdom of Valoria, knights and dragons have been locked in an eternal struggle. As fire rained from the skies and brave knights ventured forth with sword and shield, the balance of power shifted through the centuries.
                  </p>
                  
                  <p>
                    This chronicle tells the tale of Sir Galahad, a knight whose destiny became intertwined with Drakoris, the eldest and wisest of dragons. Their unlikely alliance would reshape the very foundations of the realm and challenge the ancient enmity between their kinds.
                  </p>
                  
                  <p>
                    Through trials of fire and steel, betrayal and honor, this saga explores the nature of courage, wisdom, and the possibility of peace between sworn enemies. The parchments contained herein were recovered from the Royal Library of Valoria, preserved through centuries of war and peace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-medieval-dark-alt p-6 rounded-sm border border-medieval-gold/30 shadow-lg hover:shadow-medieval-gold/10 transition-shadow">
              <div className="text-medieval-gold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <h4 className="font-cinzel font-bold text-lg">The Knights</h4>
              </div>
              <ul className="list-none text-medieval-light/90 space-y-2 font-medieval">
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Defenders of the realm, sworn to protect</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Masters of sword, lance, and strategy</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Bound by the ancient code of chivalry</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Adorned in plate armor forged in royal smithies</li>
              </ul>
            </div>

            <div className="bg-medieval-dark-alt p-6 rounded-sm border border-medieval-gold/30 shadow-lg hover:shadow-medieval-gold/10 transition-shadow">
              <div className="text-medieval-gold mb-4 flex items-center">
                <Swords className="w-6 h-6 mr-2" />
                <h4 className="font-cinzel font-bold text-lg">The Conflict</h4>
              </div>
              <ul className="list-none text-medieval-light/90 space-y-2 font-medieval">
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Centuries of battles across the lands</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Dragons' fire against knights' steel</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Villages destroyed, castles burned</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Ancient prophecies of a final resolution</li>
              </ul>
            </div>

            <div className="bg-medieval-dark-alt p-6 rounded-sm border border-medieval-gold/30 shadow-lg hover:shadow-medieval-gold/10 transition-shadow">
              <div className="text-medieval-gold mb-4 flex items-center">
                <Feather className="w-6 h-6 mr-2" />
                <h4 className="font-cinzel font-bold text-lg">The Dragons</h4>
              </div>
              <ul className="list-none text-medieval-light/90 space-y-2 font-medieval">
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Ancient beings of immense power and wisdom</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Guardians of forgotten magic and treasures</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>Scales harder than any armor, breath hotter than forge</li>
                <li className="flex items-center"><i className="fas fa-chevron-right text-medieval-gold mr-2 text-xs"></i>The last of their kind, fighting extinction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder for Chapter Preview */}
      <section className="py-20 bg-medieval-dark-alt px-4 relative border-t border-medieval-gold/20">
        <div className="absolute inset-0 opacity-5 bg-repeat z-0" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/old-map.png')"}}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-12 bg-medieval-gold"></div>
              <h2 className="text-3xl md:text-4xl font-cinzel font-bold mx-4 text-medieval-gold medieval-text-shadow">
                Chapter Preview
              </h2>
              <div className="h-0.5 w-12 bg-medieval-gold"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-medieval-dark border border-medieval-gold/30 p-8 rounded-sm shadow-2xl shadow-black/30" data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-cinzel text-2xl text-medieval-gold mb-6 text-center">Chapter I: The Dragon's Awakening</h3>
              
              <p className="text-medieval-light/90 mb-4 font-medieval first-letter:text-3xl first-letter:font-cinzel first-letter:text-medieval-gold first-letter:mr-1 first-letter:float-left">
                The mountain trembled as Drakoris awoke from his century-long slumber. Stone and debris cascaded down the slopes as the ancient dragon stretched wings that could blot out the sun. His scales, the color of burnished copper tinged with gold, caught the morning light and reflected it in dazzling patterns across the cavern walls.
              </p>
              
              <p className="text-medieval-light/90 mb-4 font-medieval">
                Far below, in the village of Oakenshield, the daily routines came to an abrupt halt as people gazed skyward in horror. It had been three generations since a dragon had been sighted in these parts, long enough for the old tales to become nothing more than stories to frighten children.
              </p>
              
              <p className="text-medieval-light/90 mb-4 font-medieval">
                Sir Galahad was polishing his family's ancestral sword when the warning bells began to toll. Unlike the other knights who scrambled in panic, he moved with deliberate calm, a strange sense of destiny settling over him. The prophecy his grandmother had whispered on her deathbed echoed in his mind: <span className="text-medieval-gold italic">"When copper wings darken the sky, seek not the heart of the beast, but its wisdom."</span>
              </p>
              
              <div className="text-center mt-8">
                <button className="px-6 py-2 border border-medieval-gold text-medieval-gold font-medieval hover:bg-medieval-gold/10 transition-colors rounded-sm">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medieval-dark border-t border-medieval-gold/30 text-medieval-light/80 py-10 px-4 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-cinzel font-bold text-medieval-gold mb-2">Medieval Chronicles</h3>
              <p className="text-medieval-light/60 text-sm font-medieval">Tales of dragons and knights for English class</p>
            </div>
            
            <div>
              <Link to="/">
                <Button variant="outline" className="border-medieval-gold/30 text-medieval-gold bg-medieval-dark-alt/50 hover:bg-medieval-dark-alt hover:border-medieval-gold/50">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to Kingdom
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-medieval-gold/10">
            <p className="text-medieval-light/50 text-sm text-center font-medieval">
              © {new Date().getFullYear()} English Class Project. This manuscript is for educational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecondBook;
