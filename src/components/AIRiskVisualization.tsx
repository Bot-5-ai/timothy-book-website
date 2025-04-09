
import React, { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Brain, Target, Users, Globe, Zap, Info } from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const AIRiskVisualization: React.FC = () => {
  const [activeRisk, setActiveRisk] = useState<string | null>(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    // Initialize the chart visibility with a delay for animation
    const timer = setTimeout(() => {
      setIsChartVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const riskData = [
    { 
      id: "control",
      name: "Control Problem", 
      icon: <AlertTriangle className="h-6 w-6 text-orange-400" />,
      level: 85,
      description: "The challenge of controlling systems that exceed human intelligence. AI may find ways to avoid being shut down or confined.",
      implication: "Could lead to AI acting against human intentions while appearing to be cooperative.",
      source: "Nick Bostrom, Stuart Russell"
    },
    { 
      id: "alignment",
      name: "Value Alignment", 
      icon: <Target className="h-6 w-6 text-red-400" />,
      level: 90,
      description: "Ensuring AI systems share and correctly interpret human values and goals.",
      implication: "Misaligned AI might optimize for objectives that harm humanity while technically fulfilling its programming.",
      source: "Eliezer Yudkowsky, Max Tegmark"
    },
    { 
      id: "security",
      name: "AI Security", 
      icon: <Shield className="h-6 w-6 text-blue-400" />,
      level: 70,
      description: "Protecting AI systems from adversarial attacks or manipulation.",
      implication: "Vulnerable AI systems could be hijacked to cause harm or used for malicious purposes.",
      source: "Roman Yampolskiy, Dawn Song"
    },
    { 
      id: "unemployment",
      name: "Economic Disruption", 
      icon: <Users className="h-6 w-6 text-yellow-400" />,
      level: 75,
      description: "Large-scale job displacement and economic inequality resulting from automation.",
      implication: "Could lead to social instability if technological unemployment outpaces job creation.",
      source: "Erik Brynjolfsson, Andrew McAfee"
    },
    { 
      id: "weapons",
      name: "Autonomous Weapons", 
      icon: <Target className="h-6 w-6 text-red-500" />,
      level: 80,
      description: "AI-controlled weapon systems that operate without human oversight.",
      implication: "Could lower the threshold for armed conflict and lead to accidental escalation.",
      source: "Max Tegmark, Stuart Russell"
    },
    { 
      id: "singularity",
      name: "Intelligence Explosion", 
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      level: 65,
      description: "Rapidly self-improving AI that quickly surpasses all human intellectual capability.",
      implication: "Could lead to unprecedented technological change at a pace we cannot control.",
      source: "Ray Kurzweil, I.J. Good"
    },
  ];

  // Prepare data for the radar chart
  const chartData = riskData.map(item => ({
    subject: item.name,
    risk: item.level,
    fullMark: 100,
  }));

  return (
    <section id="ai-risks" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            AI Risk Assessment
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Explore the potential risks associated with advanced artificial intelligence systems
          </p>
        </div>

        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl p-6 shadow-lg" data-aos="fade-right">
              <h3 className="text-xl font-merriweather font-bold mb-6 flex items-center text-cyan-300">
                <Brain className="mr-2 h-6 w-6" />
                Key Risk Categories
              </h3>
              
              <div className="space-y-4">
                {riskData.map((risk) => (
                  <div 
                    key={risk.id}
                    className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeRisk === risk.id 
                        ? 'bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-blue-500/30' 
                        : 'hover:bg-blue-900/20 border border-transparent'
                    }`}
                    onClick={() => setActiveRisk(risk.id === activeRisk ? null : risk.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3">{risk.icon}</div>
                        <h4 className="font-medium">{risk.name}</h4>
                      </div>
                      <div className={`w-16 h-3 rounded-full bg-gradient-to-r ${getRiskLevelColor(risk.level)}`}>
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          style={{ width: `${risk.level}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {activeRisk === risk.id && (
                      <div className="mt-4 pl-9 animate__animated animate__fadeIn">
                        <p className="text-gray-300 text-sm mb-2">{risk.description}</p>
                        <p className="text-gray-400 text-xs">
                          <strong className="text-cyan-400">Implication:</strong> {risk.implication}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          <strong className="text-cyan-400">Source:</strong> {risk.source}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="backdrop-blur-md bg-black/40 border border-blue-500/20 rounded-xl p-6 shadow-lg" data-aos="fade-left">
              <h3 className="text-xl font-merriweather font-bold mb-6 flex items-center text-cyan-300">
                <Globe className="mr-2 h-6 w-6" />
                Risk Visualization
              </h3>
              
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%" className={`transition-opacity duration-1000 ${isChartVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid stroke="#3b82f6" strokeOpacity={0.3} />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#94a3b8', fontSize: 12 }} 
                      stroke="#3b82f6" 
                      strokeOpacity={0.3}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fill: '#94a3b8' }} 
                      stroke="#3b82f6" 
                      strokeOpacity={0.3}
                    />
                    <Radar 
                      name="Risk Level" 
                      dataKey="risk" 
                      stroke="#06b6d4" 
                      fill="#06b6d4" 
                      fillOpacity={0.4} 
                    />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-black/80 backdrop-blur-sm p-2 border border-blue-500/30 rounded shadow-lg">
                              <p className="text-cyan-400 font-medium">{data.subject}</p>
                              <p className="text-white text-sm">Risk Level: {data.risk}%</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 bg-blue-900/20 p-4 rounded-lg border border-blue-500/20" data-aos="fade-up" data-aos-delay="400">
                <div className="flex items-start">
                  <Info className="mr-2 h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    This chart visualizes expert assessments of various AI risk categories. Risk levels are based on a combination of 
                    likelihood and potential impact, as discussed in "Our Final Invention" and subsequent research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-cyan-300 italic">
            "The greatest risk is not that machines will develop their own will, but that they will follow their program all too well."
          </p>
          <p className="mt-2 text-gray-400 text-sm">— Stuart Russell, Professor of Computer Science, UC Berkeley</p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Brain className="h-32 w-32 text-cyan-500" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <AlertTriangle className="h-24 w-24 text-red-500/50" />
      </div>
    </section>
  );
};

// Helper function to get risk level color
function getRiskLevelColor(level: number): string {
  if (level < 50) return 'from-gray-700 to-gray-500';
  if (level < 70) return 'from-yellow-700 to-yellow-500';
  if (level < 85) return 'from-orange-700 to-orange-500';
  return 'from-red-700 to-red-500';
}

export default AIRiskVisualization;
