import { useNavigate } from 'react-router-dom'
import CircusBackground from '../components/CircusBackground'

const ForCircuses: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full flex-1 flex flex-col relative">
      <CircusBackground />
      
      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl sm:text-6xl text-circus-maroon mb-6">
            Find Tech Talent for Your Circus
          </h1>
          <p className="text-xl text-circus-blue max-w-3xl mx-auto">
            Connect with skilled tech professionals ready to bring their problem-solving abilities,
            creativity, and dedication to your circus. Transform your show with digital innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <div className="text-4xl font-display text-circus-red mb-2">5,000+</div>
            <div className="text-circus-blue">Tech Professionals</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <div className="text-4xl font-display text-circus-red mb-2">98%</div>
            <div className="text-circus-blue">Placement Success</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <div className="text-4xl font-display text-circus-red mb-2">200+</div>
            <div className="text-circus-blue">Partner Circuses</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center">
            <div className="text-4xl font-display text-circus-red mb-2">45</div>
            <div className="text-circus-blue">Countries</div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-display text-circus-maroon mb-6">Why Tech Talent?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4">🚀</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Innovation</h3>
                  <p className="text-circus-blue">Bring cutting-edge technology to your performances and operations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">💡</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Problem Solving</h3>
                  <p className="text-circus-blue">Tech professionals excel at finding creative solutions to complex challenges</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🔄</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Adaptability</h3>
                  <p className="text-circus-blue">Quick learners who can master new skills and adapt to changing environments</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🎯</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Precision</h3>
                  <p className="text-circus-blue">Attention to detail and commitment to excellence</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-display text-circus-maroon mb-6">Our Services</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4">🎯</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Talent Matching</h3>
                  <p className="text-circus-blue">AI-powered matching system to find the perfect candidates for your circus</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">📝</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Recruitment Support</h3>
                  <p className="text-circus-blue">End-to-end recruitment assistance, from posting to placement</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🎓</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Training Programs</h3>
                  <p className="text-circus-blue">Resources to help tech professionals transition to circus arts</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">📊</span>
                <div>
                  <h3 className="font-bold text-circus-maroon">Analytics</h3>
                  <p className="text-circus-blue">Detailed insights and reporting on your recruitment process</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-display text-circus-maroon mb-6">
            Ready to Transform Your Circus?
          </h2>
          <button 
            onClick={() => navigate('/meme-reveal')}
            className="bg-circus-red text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-circus-maroon hover:scale-105 transform transition-all"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForCircuses 