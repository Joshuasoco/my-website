import { Clock, MessageSquare, Users, Zap } from "lucide-react";

const ContactInfo = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Quick Response",
      description: "I typically respond within 24 hours"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Collaboration",
      description: "Open to freelance and partnership opportunities"
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      title: "Professional",
      description: "Quality work with attention to detail"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Available",
      description: "Ready for new projects and challenges"
    }
  ];

  return (
    <div className="space-y-8">
      {/* About Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let's Connect</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I'm always interested in hearing about new opportunities, 
          creative projects, or just having a friendly conversation about technology and design.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 text-white">
        <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
        <p className="mb-6 opacity-90">Stay updated with my latest work and projects</p>
        <div className="flex space-x-4">
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200">
            LinkedIn
          </button>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200">
            GitHub
          </button>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200">
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;