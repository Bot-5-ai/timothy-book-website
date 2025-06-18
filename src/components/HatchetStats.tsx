
import React from 'react';
import { Calendar, MapPin, User, BookOpen } from 'lucide-react';

const HatchetStats = () => {
  const stats = [
    { icon: Calendar, label: "Days Survived", value: "54 Days", color: "text-orange-400" },
    { icon: MapPin, label: "Location", value: "Canadian Wilderness", color: "text-green-400" },
    { icon: User, label: "Main Character", value: "Brian Robeson (13)", color: "text-blue-400" },
    { icon: BookOpen, label: "Published", value: "1987", color: "text-purple-400" }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center justify-between mb-3">
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HatchetStats;
