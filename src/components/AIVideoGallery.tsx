
import React, { useState } from 'react';
import { Video, Play, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const AIVideoGallery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 3;
  
  const aiVideos: VideoItem[] = [
    {
      id: "qe9QSCF-d88",
      title: "The Dangers of AI: Explained",
      description: "Understanding the potential risks and dangers of artificial intelligence development",
      thumbnail: "https://img.youtube.com/vi/qe9QSCF-d88/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=qe9QSCF-d88"
    },
    {
      id: "q6t0Nk_G85g",
      title: "AI Safety Research Overview",
      description: "Comprehensive overview of current AI safety research and methodologies",
      thumbnail: "https://img.youtube.com/vi/q6t0Nk_G85g/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=q6t0Nk_G85g"
    },
    {
      id: "Mmi_XifwwMU",
      title: "Future of AI: Risks and Opportunities",
      description: "Exploring the balance between AI benefits and potential dangers",
      thumbnail: "https://img.youtube.com/vi/Mmi_XifwwMU/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=Mmi_XifwwMU"
    },
    {
      id: "HcZ6bq-RVM0",
      title: "AI Alignment and Control Problems",
      description: "Deep dive into the challenges of aligning AI systems with human values",
      thumbnail: "https://img.youtube.com/vi/HcZ6bq-RVM0/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=HcZ6bq-RVM0&pp=0gcJCdgAo7VqN5tD"
    },
    {
      id: "f7zkLSyRy4s",
      title: "Superintelligence and Existential Risk",
      description: "Analysis of how superintelligent AI could pose existential risks to humanity",
      thumbnail: "https://img.youtube.com/vi/f7zkLSyRy4s/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=f7zkLSyRy4s"
    },
    {
      id: "QQVhuITEH7o",
      title: "AI Ethics and Responsibility",
      description: "Discussing the ethical implications and responsibilities in AI development",
      thumbnail: "https://img.youtube.com/vi/QQVhuITEH7o/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=QQVhuITEH7o"
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

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ai-videos" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Understanding the Risks of Artificial Intelligence
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Explore expert insights on AI safety, ethics, and the potential risks of advanced artificial intelligence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {displayedVideos.map((video) => (
              <div 
                key={video.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm bg-black/40 border border-blue-500/20 cursor-pointer"
                data-aos="fade-up"
                onClick={() => handleVideoClick(video.url)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/80 text-white flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-8 w-8" />
                    </div>
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

export default AIVideoGallery;
