
import React, { useState } from 'react';
import { Video, Play, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 3;
  
  const aiVideos: VideoItem[] = [
    {
      id: "Ep4cMHyYmV0",
      title: "The Control Problem",
      description: "TED Talk on the challenges of controlling superintelligent AI",
      thumbnail: "https://img.youtube.com/vi/Ep4cMHyYmV0/maxresdefault.jpg"
    },
    {
      id: "8nt3edWLgIg",
      title: "AI: Racing Toward the Brink",
      description: "A documentary on the rapid advancement of artificial intelligence",
      thumbnail: "https://img.youtube.com/vi/8nt3edWLgIg/maxresdefault.jpg"
    },
    {
      id: "XewnyUJgyA4",
      title: "Stuart Russell on AI Safety",
      description: "Key concerns about the future of artificial intelligence",
      thumbnail: "https://img.youtube.com/vi/XewnyUJgyA4/maxresdefault.jpg"
    },
    {
      id: "MnT1xgZgkpk",
      title: "AI Alignment Problem",
      description: "Understanding the challenges of aligning AI with human values",
      thumbnail: "https://img.youtube.com/vi/MnT1xgZgkpk/maxresdefault.jpg"
    },
    {
      id: "bZQun8Y4L2A",
      title: "Beneficial AI & Existential Hope",
      description: "An optimistic view on how AI could benefit humanity",
      thumbnail: "https://img.youtube.com/vi/bZQun8Y4L2A/maxresdefault.jpg"
    }
  ];

  const pageCount = Math.ceil(aiVideos.length / videosPerPage);
  const displayedVideos = aiVideos.slice(
    currentPage * videosPerPage,
    (currentPage + 1) * videosPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  return (
    <section id="videos" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Featured Videos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Watch experts discuss AI safety, ethics, and the future of intelligent systems
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {displayedVideos.map((video) => (
              <div 
                key={video.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-blue-500/20"
                data-aos="fade-up"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                    <button 
                      onClick={() => setActiveVideo(video.id)}
                      className="w-16 h-16 rounded-full bg-blue-500/80 text-white flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-merriweather text-lg font-bold text-white mb-1">{video.title}</h4>
                  <p className="text-sm text-gray-300">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button 
              onClick={prevPage}
              variant="outline" 
              size="sm"
              className="bg-black/30 text-cyan-300 border-cyan-500/30 hover:bg-cyan-900/40 backdrop-blur-md"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <span className="text-cyan-300 text-sm">
              {currentPage + 1} / {pageCount}
            </span>
            <Button 
              onClick={nextPage}
              variant="outline" 
              size="sm"
              className="bg-black/30 text-cyan-300 border-cyan-500/30 hover:bg-cyan-900/40 backdrop-blur-md"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate__animated animate__fadeIn">
          <div className="relative w-full max-w-4xl p-2 md:p-4">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white p-2 hover:text-cyan-300 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border-2 border-blue-500/30 shadow-lg shadow-blue-500/20">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Video className="h-32 w-32 text-cyan-500" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Video className="h-24 w-24 text-blue-500" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMwMDYiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
    </section>
  );
};

export default VideoGallery;
