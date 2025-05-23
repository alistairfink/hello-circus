import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CircusBackground from '../components/CircusBackground'

const FindCircuses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/browse?search=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <div className="h-full flex-1 flex flex-col relative">
      <CircusBackground />
      
      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl sm:text-6xl text-circus-maroon mb-6">
            Find Your Perfect Circus
          </h1>
          <p className="text-xl text-circus-blue max-w-3xl mx-auto">
            Whether you're a developer dreaming of the trapeze or a designer destined for the high wire,
            we'll help you find the perfect circus to match your skills and aspirations.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-display text-circus-maroon mb-4">Search Circuses</h2>
            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                placeholder="Search by location, skills, or circus name..."
                className="flex-1 px-4 py-2 rounded-full border-2 border-circus-gold/20 focus:border-circus-gold focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-circus-red text-white px-6 py-2 rounded-full hover:bg-circus-maroon transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">🎪</div>
            <h3 className="text-xl font-display text-circus-maroon mb-2">Verified Circuses</h3>
            <p className="text-circus-blue">
              All circuses in our network are thoroughly vetted to ensure a safe and professional environment
              for your career transition.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-display text-circus-maroon mb-2">Skill Matching</h3>
            <p className="text-circus-blue">
              Our advanced matching system helps you find circuses that value your tech skills and can
              help you develop your circus talents.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-display text-circus-maroon mb-2">Training Programs</h3>
            <p className="text-circus-blue">
              Many circuses offer specialized training programs to help tech professionals transition
              into circus arts.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-display text-circus-maroon mb-2">Community Support</h3>
            <p className="text-circus-blue">
              Connect with other tech professionals who have made the leap to circus life and learn
              from their experiences.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-display text-circus-maroon mb-2">Global Opportunities</h3>
            <p className="text-circus-blue">
              Browse opportunities from circuses around the world, from small touring companies to
              major productions.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-display text-circus-maroon mb-2">Career Growth</h3>
            <p className="text-circus-blue">
              Track your progress and discover new opportunities as you develop your circus skills
              and advance your career.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-display text-circus-maroon mb-6">
            Ready to Join the Circus?
          </h2>
          <button 
            onClick={() => navigate('/signup')}
            className="bg-circus-gold text-circus-maroon px-8 py-3 rounded-full text-lg font-bold hover:bg-circus-yellow hover:scale-105 transform transition-all"
          >
            Create Your Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default FindCircuses 