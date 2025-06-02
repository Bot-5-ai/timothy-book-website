
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, Calendar, User, Brain, Mountain, Telescope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "Hatchet",
      author: "Gary Paulsen",
      description: "A survival story about 13-year-old Brian who must survive in the Canadian wilderness after a plane crash.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop&crop=center",
      link: "/hatchet",
      genre: "Adventure / Survival",
      rating: "4.8/5",
      year: "1987"
    },
    {
      id: 2,
      title: "Our Final Invention",
      author: "James Barrat",
      description: "An exploration of artificial intelligence and its potential risks to humanity's future.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=400&fit=crop&crop=center",
      link: "/our-final-invention",
      genre: "Technology / AI Safety",
      rating: "4.6/5",
      year: "2013"
    }
  ];

  const recentUpdates = [
    {
      title: "New Analysis Added to Hatchet",
      description: "Detailed passage analysis exploring deeper meanings in Brian's journey",
      date: "2024-01-15",
      type: "Content Update"
    },
    {
      title: "AI Safety Resources Expanded",
      description: "Additional interviews and research links added to Our Final Invention section",
      date: "2024-01-12",
      type: "Resource Addition"
    },
    {
      title: "Interactive Features Enhanced",
      description: "Improved user experience with better animations and responsive design",
      date: "2024-01-10",
      type: "UI Improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to Timothy's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Book Review Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Exploring literature through the lens of a curious 15-year-old who loves science, 
              space, and discovering deeper meanings in great stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/hatchet">
                  <Mountain className="mr-2 h-5 w-5" />
                  Explore Hatchet
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/our-final-invention">
                  <Brain className="mr-2 h-5 w-5" />
                  AI & Our Future
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-bounce">
          <BookOpen className="h-16 w-16 text-cyan-300" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-pulse">
          <Star className="h-12 w-12 text-yellow-300" />
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Featured Books
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dives into stories that shaped my thinking about survival, technology, and human nature
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredBooks.map((book, index) => (
              <Card 
                key={book.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {book.genre}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {book.title}
                    </CardTitle>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {book.rating}
                      </div>
                      <div className="mt-1">{book.year}</div>
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">{book.author}</p>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {book.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    className="w-full group-hover:bg-blue-600 transition-colors duration-300" 
                    asChild
                  >
                    <Link to={book.link}>
                      Read Analysis
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 p-1">
                <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" 
                    alt="Timothy Chen" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                About Timothy
              </h2>
              <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hi! I'm Timothy Chen, a 15-year-old Grade 10 student with a passion for astronomy, science, 
                and discovering the deeper meanings in great literature. When I'm not studying or stargazing, 
                I love analyzing books that explore human nature, survival, and our relationship with technology.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Age</h4>
                  <p className="text-gray-600">15 years old</p>
                  <p className="text-sm text-purple-600">♌ Leo</p>
                </div>
                <div className="text-center">
                  <Telescope className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Dream Career</h4>
                  <p className="text-gray-600">Astronomer</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Favorite Genre</h4>
                  <p className="text-gray-600">Science & Adventure</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-colors duration-300"
                asChild
              >
                <Link to="/about-me">
                  <User className="mr-2 h-5 w-5" />
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Recent Updates
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay up to date with new analyses, resources, and improvements to the site
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentUpdates.map((update, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {update.type}
                        </span>
                        <span className="text-sm text-gray-500">{update.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{update.title}</h3>
                      <p className="text-gray-600">{update.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Timothy's Book Reviews</h3>
            <p className="text-gray-300 mb-6">
              Exploring literature through curiosity, analysis, and wonder ✨
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/hatchet" className="text-gray-300 hover:text-white transition-colors">
                Hatchet Analysis
              </Link>
              <Link to="/our-final-invention" className="text-gray-300 hover:text-white transition-colors">
                AI & Future
              </Link>
              <Link to="/about-me" className="text-gray-300 hover:text-white transition-colors">
                About Timothy
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">
                © 2025 Timothy Chen - Grade 10 Student & Future Astronomer 🚀
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
