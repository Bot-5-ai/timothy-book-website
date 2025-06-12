
import React, { useState } from 'react';
import { Video, Play, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

const HatchetVideos: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 3;
  
  const hatchetVideos: VideoItem[] = [
    {
      id: "oRkNaF4HdpE",
      title: "Hatchet by Gary Paulsen - Book Summary",
      description: "A detailed analysis and review of the survival classic",
      thumbnail: "https://img.youtube.com/vi/oRkNaF4HdpE/maxresdefault.jpg"
    },
    {
      id: "5o-A8-HSS9k",
      title: "Hatchet Book Review and Analysis",
      description: "Comprehensive overview of the plot and key elements",
      thumbnail: "https://img.youtube.com/vi/5o-A8-HSS9k/maxresdefault.jpg"
    },
    {
      id: "MHePeWybsds",
      title: "Survival Skills from Hatchet",
      description: "Exploring the survival techniques Brian uses in the wilderness",
      thumbnail: "https://img.youtube.com/vi/MHePeWybsds/maxresdefault.jpg"
    }
  ];

  const pageCount = Math.ceil(hatchetVideos.length / videosPerPage);
  const displayedVideos = hatchetVideos.slice(
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
    <section id="videos" className="py-20 px-4 bg-gradient-to-b from-[#0f1b15] to-[#162821] relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-cabin font-bold mb-4 text-[#e9b872]">
            Hatchet Videos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e9b872] to-[#a3c9a8] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Watch these informative videos about Hatchet and its themes of survival and resilience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {displayedVideos.map((video) => (
              <div 
                key={video.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-[#e9b872]/20 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-[#2c4c3b]/30"
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
                      className="w-16 h-16 rounded-full bg-[#e9b872]/80 text-[#0f1b15] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-cabin text-lg font-bold text-white mb-1">{video.title}</h4>
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
              className="bg-black/30 text-[#a3c9a8] border-[#2c4c3b]/30 hover:bg-[#2c4c3b]/40 backdrop-blur-md"
              disabled={pageCount <= 1}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <span className="text-[#a3c9a8] text-sm">
              {currentPage + 1} / {pageCount}
            </span>
            <Button 
              onClick={nextPage}
              variant="outline" 
              size="sm"
              className="bg-black/30 text-[#a3c9a8] border-[#2c4c3b]/30 hover:bg-[#2c4c3b]/40 backdrop-blur-md"
              disabled={pageCount <= 1}
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
              className="absolute -top-10 right-0 text-white p-2 hover:text-[#e9b872] transition-colors z-10"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg border-2 border-[#2c4c3b]/30 shadow-lg shadow-[#2c4c3b]/20">
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
        <Video className="h-32 w-32 text-[#a3c9a8]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Video className="h-24 w-24 text-[#e9b872]" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c4c3b]/20 to-[#0f1b15]/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYzRjM2IiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
    </section>
  );
};

export default HatchetVideos;
