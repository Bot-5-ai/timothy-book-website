import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Axe, Compass, Trees, TreePine, Mountain, ArrowLeft, BookOpen, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HatchetVideos from '@/components/HatchetVideos';
import HatchetResources from '@/components/HatchetResources';
import OtherBooks from '@/components/OtherBooks';
import GaryPaulsenTimeline from '@/components/GaryPaulsenTimeline';
import HatchetInteractiveMap from '@/components/HatchetInteractiveMap';

const Hatchet = () => {
  const [activeTab, setActiveTab] = useState('passage1');
  const [showSurvivalTip, setShowSurvivalTip] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      source: "School Library Journal",
      content: "This book is seriously exciting! It's perfect for kids who don't usually like reading because there's so much action and adventure. Brian's story really keeps you hooked.",
      rating: 5,
      reviewer: "Literary Review"
    },
    {
      source: "Kirkus Reviews",
      content: "This is one of those books you can't put down. Gary Paulsen really knows how to write about survival, and Brian feels like a real person going through all this crazy stuff.",
      rating: 5,
      reviewer: "Children's Literature"
    },
    {
      source: "The Horn Book",
      content: "Paulsen writes in a way that makes you feel like you're right there with Brian in the woods. The survival parts are really detailed and the character development is amazing.",
      rating: 4,
      reviewer: "Youth Literature"
    },
    {
      source: "Booklist",
      content: "This wilderness survival story is intense and fast-paced. You really get to see how Brian changes and grows throughout his time alone in the forest.",
      rating: 5,
      reviewer: "American Library Association"
    },
    {
      source: "Publishers Weekly",
      content: "When you read this book, you feel like you're going through everything Brian goes through. Every challenge he faces and every small victory feels real.",
      rating: 4,
      reviewer: "Book Review"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 transition-colors duration-200 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };
  
  useEffect(() => {
    // Load CDN resources
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    const animateCSS = document.createElement('link');
    animateCSS.rel = 'stylesheet';
    animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(animateCSS);

    const googleFonts = document.createElement('link');
    googleFonts.rel = 'stylesheet';
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Cabin:wght@400;600;700&display=swap';
    document.head.appendChild(googleFonts);

    // Initialize animations and effects
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 800,
        once: false,
        easing: 'ease-out-cubic'
      });
    }

    // Add forest ambient sound effect
    const ambientSound = document.getElementById('ambient-sound');
    if (ambientSound instanceof HTMLAudioElement) {
      ambientSound.volume = 0.2;
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1b15] text-gray-100 font-cabin">
      {/* Background ambient sound */}
      <audio id="ambient-sound" loop>
        <source src="https://soundbible.com/mp3/forest_ambient-Mike_Koenig-1145364729.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Navigation */}
      <header className="py-4 px-6 bg-[#0a1510] border-b border-[#2c4c3b]/30 sticky top-0 z-50 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center transition-transform duration-200 hover:scale-105">
            <Axe className="h-8 w-8 mr-3 text-[#e9b872] transition-colors duration-200" />
            <h1 className="text-[#e9b872] text-2xl font-bold font-merriweather">Survival Literature</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-[#e9b872] transition-all duration-200 hover:translate-y-[-2px]">Home</Link>
            <Link to="/hatchet" className="text-[#e9b872] transition-all duration-200">Hatchet</Link>
            <Link to="/our-final-invention" className="text-gray-300 hover:text-[#e9b872] transition-all duration-200 hover:translate-y-[-2px]">AI Book</Link>
            <Link to="/about-me" className="text-gray-300 hover:text-[#e9b872] transition-all duration-200 hover:translate-y-[-2px]">About Me</Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-[#e9b872] transition-colors duration-200">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* Back to Home button */}
      <div className="fixed bottom-4 left-4 z-40">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-black/30 text-[#e9b872] border-[#e9b872]/30 hover:bg-[#2c4c3b]/40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back Home
          </Button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-[url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center transition-all duration-1000">
        <div className="absolute inset-0 bg-black/70 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1b15]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float opacity-70">
          <Axe className="h-10 w-10 text-[#e9b872] transition-transform duration-300 hover:scale-110" />
        </div>
        
        <div className="absolute top-40 right-20 animate-float-delayed opacity-70">
          <Compass className="h-12 w-12 text-[#a3c9a8] transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="absolute bottom-40 left-30 animate-float-reverse opacity-70">
          <TreePine className="h-16 w-16 text-[#638b6d]/80 transition-transform duration-300 hover:scale-110" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="mb-6 inline-block animate__animated animate__fadeIn">
            <Axe className="mx-auto h-12 w-12 text-[#e9b872] animate-pulse-light" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate__animated animate__fadeIn font-merriweather">
            <span className="text-[#e9b872]">HATCHET</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-gray-300 animate__animated animate__fadeIn animate__delay-1s">
            An awesome survival story by Gary Paulsen
          </p>
          
          <div className="inline-block mb-10 p-2 px-6 backdrop-blur-md bg-[#1f3d2a]/50 text-[#a3c9a8] rounded-full text-sm font-mono border border-[#638b6d]/30 shadow-lg animate__animated animate__fadeIn animate__delay-2s transition-all duration-300 hover:shadow-xl hover:scale-105">
            <span>"The most important rule of survival is staying calm."</span>
          </div>
          
          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-wrap justify-center gap-4">
            <a href="#summary" className="px-6 py-3 bg-[#2c4c3b] text-white rounded-md font-medium hover:bg-[#3a5d4a] transition-all duration-300 shadow-lg flex items-center group hover:scale-105 hover:shadow-xl">
              <span className="relative z-10">Read Summary</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
            </a>
            
            <a href="#resources" className="px-6 py-3 border-2 border-[#e9b872] text-[#e9b872] rounded-md font-medium hover:bg-[#e9b872]/20 transition-all duration-300 shadow-lg flex items-center hover:scale-105 hover:shadow-xl">
              <i className="fas fa-book mr-2"></i> Get the Book
            </a>
          </div>
        </div>
        
        {/* Animated scroll down indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a 
            href="#summary" 
            className="p-2 rounded-full bg-[#2c4c3b]/50 backdrop-blur-md text-[#a3c9a8] hover:text-[#e9b872] hover:bg-[#2c4c3b]/70 transition-all duration-300 focus:outline-none border border-[#638b6d]/30 hover:scale-110"
            aria-label="Scroll down"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>
      
      {/* Book Summary & Cover */}
      <section id="summary" className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-merriweather">
              What's This Book About?
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto transition-all duration-300"></div>
          </div>
          
          <div className="bg-[#162821] p-8 rounded-lg border border-[#2c4c3b] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#e9b872]/30" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 lg:w-1/4 flex justify-center">
                <div className="relative w-48 h-auto shadow-xl">
                  <img 
                    src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442403321/hatchet-9781442403321_hr.jpg" 
                    alt="Hatchet Book Cover" 
                    className="w-full h-auto rounded-md border-4 border-[#2c4c3b] object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-[#e9b872] text-[#0f1b15] px-3 py-1 rounded-full text-sm font-bold rotate-[-5deg] shadow-lg transition-transform duration-300 hover:rotate-0">
                    Classic!
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 lg:w-3/4">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#e9b872] font-merriweather">
                  <i className="fas fa-fire text-orange-400 mr-3"></i>
                  The Story
                </h3>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#638b6d]/50 to-transparent mb-6"></div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    The book "Hatchet" written by Gary Paulsen is about a 13 year old boy that is names Brian Robeson. He was on the way to visit his dad but on his way, his pilot unfortunately has a heart attack and dies. This leaves Brian all alone in the Canadian wilderness all alone with nothing but a hatchet that he has received from his mom. 
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    At first, Brian has no clue what he is doing as he was just a city boy who never had to survive on his own all alone. As the book progresses, he starts to learn how to make fire, find food and build shelter. He builds up his confidence and he faces all kinds of challenges from bad weather to dangerous predators.  
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    He was out in the Canadian wilderness for 54 straight days. He isn't just trying to survive, he was also dealing with the divorce of his parents and the big secret that he knows about his mom. So, this isn't just physically challenging for him, but also mentally and emotionally. 
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    The cool thing about this novel is how much we see Brian changes throughout this book. He goes from someone that is clueless on how to survive alone to a kid who actually knows how to survive and take care of himself. He learns that he has to be patient to himself and he has to think things through. Even though that he was afraid if he was going to make it out alive, he built up his inner man and never gave up until the very end.
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    By the end of the book, a pilot does eventually spot him and he gets rescued. When he gets back home, instead of going back to being a city boy, he is just a completely new person. The lessons that he learned in the forest had stuck with and now, he is much more mature and confident. It is amazing to see how someone can change so much from just experiencing something new.  
                  </p>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center space-x-1 bg-[#2c4c3b]/60 px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-[#2c4c3b]/80 hover:scale-105">
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star text-[#e9b872]"></i>
                    <i className="fas fa-star-half-alt text-[#e9b872]"></i>
                    <span className="ml-2 text-white">4.8/5 - Over 10,000 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - NEW */}
      <HatchetInteractiveMap />
      
      {/* Author Bio Section - New separate section */}
      <section id="author" className="py-16 bg-[#162821]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-merriweather">
              About Gary Paulsen
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto transition-all duration-300"></div>
          </div>
          
          <div className="bg-[#0f1b15] p-8 rounded-lg border border-[#2c4c3b] shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#e9b872]/30" data-aos="fade-left">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 lg:w-1/4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0qtld_Cr0u4WlFTXmPnAFlPXpywEfUm5rg&s" 
                  alt="Gary Paulsen" 
                  className="rounded-lg border-2 border-[#2c4c3b] w-full shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="md:w-2/3 lg:w-3/4">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-[#e9b872] font-merriweather">
                  <i className="fas fa-user text-[#a3c9a8] mr-3"></i>
                  Gary Paulsen (1939-2021)
                </h3>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#638b6d]/50 to-transparent mb-6"></div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Gary Paulsen is an author that enjoys to write book that is targeted towards the younger audience. He enjoys to write books that are related to survival and the wilderness and relates his books to some of his experiences. He does this because he had a tough life when he was younger and then ended up running away from home at the age of 14.
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Besides that, he has done a lot of crazy things in his life such as working on farms, driving trucks, sailing boats and even raced in Iditarod which is a famous dog sled race in Alaska twice. He incorporates his life events with a strong use of imagery to give you the sense that his books are non fiction even though that they aren't.
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Throughout his lifetime, Gary Paulsen had wrote over 200 books and together, they had sold over 35 million copies. On top of that, he had also won a lot of awards along the way which includes: three Newberry Honor Awards, ALA Best Book Awards, Parent's Choice Awards and many more. 
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Besides Hatchet, he had also written a lot of other popular books as well including: "Brian's Winter", "Dogsong" and "The Winter Room". All these books have a pretty similar situation which is younger kids who are thrown into tough situations in life then them trying to survive with their own skills.
                  </p>
                  
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Paulsen had this way to write where he attracts the attention of many people. His writing style makes you feel that you were in the book right beside the characters. He had said that "The most important thing you can do is read". He believes that reading is what can change people's lives so he came up with a writing style that attracts everyone's attention.
                  </p>

                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Paulsen had live a fulfilling and amazing life. He lived the way he always had wanted to and wrote amazing books to teach young children. He sadly passed away in 2021 and may he rest in peace.
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-2">
                    <i className="fas fa-book text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">Famous Books: Hatchet, Brian's Winter, Dogsong</span>
                  </div>
                  <div className="flex items-center transition-transform duration-200 hover:translate-x-2">
                    <i className="fas fa-award text-[#a3c9a8] mr-2"></i>
                    <span className="text-gray-300">3 Newbery Honor Awards</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gary Paulsen Timeline */}
            <GaryPaulsenTimeline />
          </div>
        </div>
      </section>

      {/* Book Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed relative">
        <div className="absolute inset-0 bg-[#0f1b15]/90 backdrop-filter backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-[#e9b872]">
              What People Are Saying
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#e9b872] to-[#a3c9a8] mx-auto"></div>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Check out what critics and readers think about this awesome book
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-[#0a1510]/90 backdrop-blur-md border border-[#2c4c3b]/40 rounded-xl shadow-lg p-8 md:p-12 mb-8 transition-all duration-300 hover:shadow-[#e9b872]/20 hover:border-[#e9b872]/30 hover:transform hover:scale-105">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl md:text-2xl font-merriweather font-bold text-[#e9b872] flex items-center">
                  <i className="fas fa-quote-left text-[#a3c9a8] mr-2"></i>
                  {reviews[currentReview].source}
                </h3>
                <div className="flex transition-all duration-300">
                  {renderStars(reviews[currentReview].rating)}
                </div>
              </div>

              <blockquote className="text-gray-300 text-lg italic mb-6 font-merriweather transition-all duration-300 hover:bg-[#0a1510]/80">
                "{reviews[currentReview].content}"
              </blockquote>

              <div className="flex justify-between items-center">
                <p className="text-[#a3c9a8] font-medium">
                  — {reviews[currentReview].reviewer}
                </p>
                <div className="text-sm text-gray-500">
                  {currentReview + 1} of {reviews.length}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button 
                onClick={prevReview}
                className="p-3 rounded-full bg-[#2c4c3b]/80 backdrop-blur-md hover:bg-[#2c4c3b] text-[#e9b872] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e9b872] transform hover:scale-110 hover:shadow-lg"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-[#2c4c3b]/80 backdrop-blur-md hover:bg-[#2c4c3b] text-[#e9b872] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e9b872] transform hover:scale-110 hover:shadow-lg"
                aria-label="Next review"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Books by Gary Paulsen */}
      <OtherBooks />
      
      {/* Add the other components we created */}
      <HatchetVideos />
      
      {/* Plot, Setting, and Characters */}
      <section className="py-16 bg-[url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=60')] bg-fixed bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1b15] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b15] to-transparent"></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plot Section */}
            <div className="bg-[#162821]/90 border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#e9b872]/20 hover:border-[#e9b872]/30 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <div className="p-1 bg-gradient-to-r from-[#2c4c3b] to-[#e9b872]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center mr-3 transition-colors duration-300 hover:bg-[#e9b872]">
                    <i className="fas fa-book-open text-[#e9b872] hover:text-[#0f1b15] transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#e9b872] font-merriweather">What Happens</h3>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <p className="transition-colors duration-200 hover:text-white">
                    Brian's parents just got divorced, so he's flying to Canada to visit his dad. But then the pilot has a heart attack and dies, and the plane crashes in the middle of the wilderness.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    Now Brian's all alone with just his hatchet. He has to learn everything from scratch - how to make fire, find food, build a shelter, and stay safe from wild animals.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    Things keep going wrong for Brian. He gets attacked by a porcupine, there's a tornado, and he keeps thinking about this secret he knows about his mom that's really bothering him.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    But Brian doesn't give up. He keeps trying and learning, and after 54 days in the woods, he finally gets rescued when he finds a survival kit in the crashed plane.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Setting Section */}
            <div className="bg-[#162821]/90 border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#e9b872]/20 hover:border-[#e9b872]/30 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div className="p-1 bg-gradient-to-r from-[#e9b872] to-[#2c4c3b]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center mr-3 transition-colors duration-300 hover:bg-[#e9b872]">
                    <Mountain className="h-5 w-5 text-[#e9b872] hover:text-[#0f1b15] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#e9b872] font-merriweather">Where It Happens</h3>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <p className="transition-colors duration-200 hover:text-white">
                    <span className="font-bold text-[#a3c9a8]">Place:</span> Way out in the Canadian wilderness, surrounded by thick forests and a big lake where Brian ends up living.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    <span className="font-bold text-[#a3c9a8]">What's There:</span> Dense woods full of animals like bears, wolves, moose, and tons of different birds and fish. There are also berries and other plants Brian can eat.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    <span className="font-bold text-[#a3c9a8]">When:</span> The story happens in the 1980s during summer, so at least Brian doesn't have to deal with freezing cold weather.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    <span className="font-bold text-[#a3c9a8]">Weather:</span> Brian deals with everything from nice sunny days to crazy storms, including this massive tornado that totally changes everything for him.
                  </p>
                  <p className="transition-colors duration-200 hover:text-white">
                    <span className="font-bold text-[#a3c9a8]">Why It Matters:</span> The wilderness is basically like another character in the book - it's dangerous and challenging, but it's also what teaches Brian how to survive and grow up.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Characters Section */}
            <div className="bg-[#162821]/90 border border-[#2c4c3b] rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#e9b872]/20 hover:border-[#e9b872]/30 hover:transform hover:scale-105" data-aos="fade-up" data-aos-delay="300">
              <div className="p-1 bg-gradient-to-r from-[#2c4c3b] to-[#e9b872]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2c4c3b] flex items-center justify-center mr-3 transition-colors duration-300 hover:bg-[#e9b872]">
                    <i className="fas fa-users text-[#e9b872] hover:text-[#0f1b15] transition-colors duration-300"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#e9b872] font-merriweather">Who's In The Story</h3>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="text-[#a3c9a8] font-bold">Main Characters</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li className="transition-colors duration-200 hover:text-white"><span className="font-bold">Brian Robeson</span> - The 13-year-old kid who has to survive on his own</li>
                      <li className="transition-colors duration-200 hover:text-white"><span className="font-bold">The Pilot</span> - Dies from a heart attack early in the story, leaving Brian stranded</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#a3c9a8] font-bold">Other People</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li className="transition-colors duration-200 hover:text-white"><span className="font-bold">Brian's Mom</span> - She gives him the hatchet and is part of the secret that bugs Brian</li>
                      <li className="transition-colors duration-200 hover:text-white"><span className="font-bold">Brian's Dad</span> - The person Brian was going to visit in Canada</li>
                      <li className="transition-colors duration-200 hover:text-white"><span className="font-bold">The Guy Brian's Mom Had an Affair With</span> - This is "The Secret" that really messes with Brian's head</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[#a3c9a8] font-bold">Nature as a Character</h4>
                    <p className="transition-colors duration-200 hover:text-white">The wilderness and all the animals (bears, moose, wolves, porcupines) are almost like characters too because they're constantly challenging Brian and teaching him lessons.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Themes & Literary Devices */}
      <section className="py-16 bg-[#0f1b15]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-merriweather">
              What The Book's Really About
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto transition-all duration-300"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Themes */}
            <div className="bg-[#162821] rounded-lg border border-[#2c4c3b] p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#e9b872]/30 hover:transform hover:scale-105" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-6 text-[#e9b872] flex items-center font-merriweather">
                <i className="fas fa-lightbulb text-[#e9b872] mr-3"></i>
                Main Themes
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Learning to Survive on Your Own</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    The biggest theme is how Brian learns to take care of himself in the wild. He goes from being totally helpless to being able to find food, make fire, and handle dangerous situations.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Growing Up Fast</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Brian changes from a regular city kid to someone who's way more mature and confident. Being alone in the wilderness forces him to grow up really quickly.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Fighting Against Nature</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Brian's constantly dealing with nature - sometimes it tries to kill him, but sometimes it helps him survive. It's not good or bad, it just is what it is.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Never Giving Up</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Even when everything goes wrong and Brian wants to quit, he keeps trying. The book shows how important it is to be tough and keep going even when things suck.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Dealing with Family Problems</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Brian's really upset about his parents' divorce and this secret about his mom. Being in the wilderness actually helps him figure out how to deal with these feelings.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Literary Devices */}
            <div className="bg-[#162821] rounded-lg border border-[#2c4c3b] p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#e9b872]/30 hover:transform hover:scale-105" data-aos="fade-left">
              <h3 className="text-2xl font-bold mb-6 text-[#e9b872] flex items-center font-merriweather">
                <i className="fas fa-feather text-[#e9b872] mr-3"></i>
                Writing Techniques
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Symbols</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    The hatchet represents Brian's connection to the civilized world and his ability to survive. The lake represents new beginnings and clarity.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Really Detailed Descriptions</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Paulsen describes everything so well that you feel like you're right there with Brian - tasting the berries, hearing the forest sounds, feeling the cold water.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Brian's Thoughts</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    We get to read what Brian's thinking all the time, which helps us understand how he's feeling and what he's going through emotionally.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Hints About What's Coming</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Early mentions of the hatchet and survival stuff hint that these things are going to be super important later in the story.
                  </p>
                </div>
                
                <div className="p-4 bg-[#0f1b15] rounded-lg border border-[#2c4c3b]/60 transition-all duration-300 hover:border-[#e9b872]/30 hover:shadow-lg">
                  <h4 className="font-bold text-[#a3c9a8] mb-2">Repeating Important Stuff</h4>
                  <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                    Words like "Secret" and phrases about being tough get repeated a lot to show what's really important and what Brian's thinking about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources section */}
      <HatchetResources />
      
      {/* Passage Analysis */}
      <section className="py-16 bg-[#162821]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-merriweather">
              Important Parts of the Book
            </h2>
            <div className="w-24 h-1 bg-[#e9b872] mx-auto transition-all duration-300"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Let's look at some key scenes from Hatchet and what they mean
            </p>
          </div>
          
          <div className="bg-[#0f1b15] border border-[#2c4c3b] rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-[#e9b872]/20 hover:border-[#e9b872]/30" data-aos="fade-up">
            <div className="mb-6 flex flex-wrap border-b border-[#2c4c3b]">
              <button 
                onClick={() => setActiveTab('passage1')} 
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === 'passage1' 
                    ? 'border-b-2 border-[#e9b872] text-[#e9b872] bg-[#2c4c3b]/30 transform scale-105' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#2c4c3b]/20'
                }`}
              >
                <div className="flex items-center">
                  <i className="fas fa-fire mr-2"></i>
                  <span>Making Fire</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-[#2c4c3b]/60 text-[#a3c9a8]">p.49</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('passage2')} 
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === 'passage2' 
                    ? 'border-b-2 border-[#e9b872] text-[#e9b872] bg-[#2c4c3b]/30 transform scale-105' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#2c4c3b]/20'
                }`}
              >
                <div className="flex items-center">
                  <i className="fas fa-sync-alt mr-2"></i>
                  <span>Brian Changes</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-[#2c4c3b]/60 text-[#a3c9a8]">p.153</span>
                </div>
              </button>
              
              <button 
                onClick={() => setActiveTab('passage3')} 
                className={`px-6 py-3 font-medium text-sm transition-all duration-300 flex items-center ${
                  activeTab === 'passage3' 
                    ? 'border-b-2 border-[#e9b872] text-[#e9b872] bg-[#2c4c3b]/30 transform scale-105' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-[#2c4c3b]/20'
                }`}
              >
                <div className="flex items-center">
                  <i className="fas fa-lightbulb mr-2"></i>
                  <span>The Secret</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-[#2c4c3b]/60 text-[#a3c9a8]">p.116</span>
                </div>
              </button>
            </div>
            
            <div className="p-8">
              {activeTab === 'passage1' && (
                <div className="animate__animated animate__fadeIn">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-fire text-orange-400 mr-3"></i>
                    <h3 className="text-xl font-bold text-white font-merriweather">
                      Fire - The Big Breakthrough
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-orange-400 pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg transition-all duration-300 hover:bg-[#0a1510]/80">
                      "When he opened his eyes it was still there. The fire still burned, sending smoke up in a thick column through the trees. He had fire. He sat up, looked at it almost in disbelief. The flames had burned down, but the wood he had piled on had caught and was burning well now. He had fire. He scrambled to his knees and added more sticks to the flames, then larger branches and small logs. The hatchet had done it. A spark had caught in the bark and he had fire. All those hours of trying and trying, and finally he had fire. I have fire, he thought. I have fire."
                      <div className="text-right mt-2 text-sm text-orange-300">- Hatchet, Page 49</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">What This Means</h4>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                         This part of the book was the best and most important thing that happened. Brian finally made his first fire which gave him all the confidence he needed to survive. Brian keeps yelling, "I have the fire", as he can barely believe that he was able to create the most important thing for survival. Fire is a key source for warmth, cooking and keeping away the predators. One top of that, fire releases smoke which is a signal for help and rescue. 
                        </p>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                         As the fire crackles, it is almost like a barrier has been broken, the barrier of his city boy life to a more mature person. It is not just a tool that he would be using to survive, but a symbol of hope that he would get rescued and it is the turning point of the book. This is the moment where Brian builds up his confidence and he starts believing in himself. The feeling of triumph is not directly linked to the fire itself, but the new skill that Brian was able to develop by himself. 
                        </p>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                         As you read the passage, it is almost like that you are in the book. You can almost visualize the excitement in Brian's eyes as the fire crackles. Brian feels a sense of empowerment for the very first time and he can finally be capable of being independent. He feels like he has a chance of being rescued but, even if he doesn't, he will be capable of surviving on his own. Paulsen uses a straight forward writing style so that he con convey the inner thoughts of Brian. You can really sense how life changing the fire is to Brian as he changed as a character completely. 
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Why Fire is So Important</h4>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          Getting fire changes everything for Brian. Now he can:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Keep dangerous animals away</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Cook food so it's safe to eat</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Feel less scared and alone</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Actually believe he can make it</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'passage2' && (
                <div className="animate__animated animate__fadeIn">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-sync-alt text-[#a3c9a8] mr-3"></i>
                    <h3 className="text-xl font-bold text-white font-merriweather">
                      Brian Becomes Someone New
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-[#a3c9a8] pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg transition-all duration-300 hover:bg-[#0a1510]/80">
                      "He was not the same now—the Brian that stood and watched the wolves move away and nodded to them was completely changed. Time had come, time that he measured but didn't care about; time had come into his life and moved out and left him different."
                      <div className="text-right mt-2 text-sm text-[#a3c9a8]">- Hatchet, Page 153</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">What This Means</h4>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          This particular section reveals the drastic transformation that Brian has undergone since the fearful moment when the plane crashed, when he was a frightened city boy, filled with fear and confusion. In sharp difference to his former self, though, he is now able to look at wolves in the wild without feeling a pinch of fear. In fact, he even nods at them in a matter-of-fact manner, as though they were close neighbors or friends which he encounters every day.
                        </p>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                         His perception of time is has also drastically changed. Before, each minute would feel like it lasted an hour, with him experiencing a huge level of anxiety as he thought about when he would finally be rescued. But now he has adopted a more relaxed approach and surrendered to the present moment, simply allowing things to happen as they do.
                        </p>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          Paulsen also simplifies this concept by stating simply, "He was not the same now." This straightforward statement really informs us that this change is not some temporary change, but one that is complete and permanent in his nature.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">How Brian Changed</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From being scared of nature to understanding and respecting it</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From needing technology to relying on his own skills</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From being stressed about time to living naturally</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-arrow-right text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>From being consumed by "The Secret" to finding peace with his circumstances</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'passage3' && (
                <div className="animate__animated animate__fadeIn">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-lightbulb text-[#e9b872] mr-3"></i>
                    <h3 className="text-xl font-bold text-white font-merriweather">
                      Finally Dealing with The Secret
                    </h3>
                  </div>
                  
                  <div className="passage-card">
                    <blockquote className="backdrop-blur-sm bg-[#0a1510] border-l-4 border-[#e9b872] pl-5 py-4 mb-6 italic text-gray-200 rounded-r-lg transition-all duration-300 hover:bg-[#0a1510]/80">
                      "The Secret that had caused so much trouble came to him now and he opened it and looked at it and understood it was part of him, would always be part of him, but did not have to govern his life. Not now, not for the rest of his life. The Secret was gone, finally gone."
                      <div className="text-right mt-2 text-sm text-[#e9b872]">- Hatchet, Page 116</div>
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-3">
                        <h4 className="text-[#e9b872] font-bold text-lg">What This Means</h4>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          This is the part of the book where Brian is finally able to confront the long-hidden reality of his mother's affair reality that has silently troubled him for what seems like his whole life. He comes to understand, in a deep and significant manner, that even though this event is permanent and will forever be a part of his own past, he need not allow it to control how he feels or behaves. The reality of his mother's affair is one that he can accept without permitting it to define him or determine his fate.
                        </p>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          For the remainder of the book, author Gary Paulsen stresses how significant this secret is by typing it out over and over again as "Secret" with a capital "S". This is a literary tool that serves to point out how much and how important this information has been weighing on Brian, indicating that it has a central position in his mind and heart. However, by the time of the novel's action, it is obvious that Brian has reached a new stage of maturity. He is able to come at this challenging time in his life with courage and acceptance now, and is opting to respond to it positively and constructively instead of allowing it to get the better of him.
                        </p>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          Because the story says the secret is "finally gone," the reader can practically sense the relief that floods through Brian. He has been carting this emotional baggage around for years, but now he is finally free to release it and move forward, no longer defined by the pain and confusion it had formerly caused him.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-[#a3c9a8] font-bold text-lg">Brian's Emotional Growth</h4>
                        <p className="text-gray-300 transition-colors duration-200 hover:text-white">
                          This passage shows how much Brian has grown emotionally:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>He accepts that bad things happen and that's just life</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>He understands that painful experiences become part of who we are</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>He knows he gets to choose how much power to give past hurts</span>
                          </li>
                          <li className="flex items-start transition-transform duration-200 hover:translate-x-2">
                            <i className="fas fa-check-circle text-[#a3c9a8] mt-1 mr-2"></i>
                            <span>Being alone in nature gave him space to work through his feelings</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-[#0a1510] border-t border-[#2c4c3b]/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Axe className="h-6 w-6 text-[#e9b872] mr-2" />
                <h3 className="text-[#e9b872] text-xl font-bold font-merriweather">Survival Literature</h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Exploring stories about being tough and figuring yourself out
              </p>
            </div>
            
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-all duration-200 hover:scale-110">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-all duration-200 hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-all duration-200 hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#e9b872] transition-all duration-200 hover:scale-110">
                <i className="fab fa-goodreads-g"></i>
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Survival Literature
              </p>
              <p className="text-gray-500 text-xs mt-1">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hatchet;
