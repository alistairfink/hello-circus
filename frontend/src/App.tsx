import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CircusBackground from './components/CircusBackground'
import FindCircuses from './pages/FindCircuses'
import ForCircuses from './pages/ForCircuses'
import BrowseCircuses from './pages/BrowseCircuses'
import SignUp from './pages/SignUp'
import MemeReveal from './pages/MemeReveal'

const HomePage: React.FC = () => {
  return (
    <div className="h-full flex-1 flex flex-col relative overflow-hidden">
      <CircusBackground />

      {/* Circus Curtains */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {/* Left Curtain */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-circus-maroon animate-curtain-left origin-left">
          {/* Base draping shadow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,transparent_0,rgba(0,0,0,0.4)_100%)]"></div>
          {/* Dramatic fold lines */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,rgba(0,0,0,0.3)_2%,transparent_4%,rgba(0,0,0,0.1)_6%)]"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.2)_0,transparent_4%,rgba(0,0,0,0.2)_8%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)]"></div>
          </div>
          {/* Striped pattern */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,var(--circus-gold)_0,var(--circus-gold)_10px,var(--circus-maroon)_10px,var(--circus-maroon)_20px)] opacity-20"></div>
          {/* Central gather effect */}
          <div className="absolute inset-y-0 right-[40%] w-[20%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3)_0,transparent_100%)]"></div>
          {/* Top gather effect */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-[radial-gradient(circle_at_50%_0,rgba(0,0,0,0.4)_0,transparent_100%)]"></div>
          {/* Scalloped bottom with shadow */}
          <div className="absolute -bottom-2 left-0 right-0">
            <div className="h-12 bg-[radial-gradient(circle_at_50%_0,var(--circus-maroon)_0,var(--circus-maroon)_100%)_repeat-x] bg-[length:48px_12px]"></div>
            <div className="h-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,transparent_100%)]"></div>
          </div>
          {/* Gold trim with shine */}
          <div className="absolute top-0 left-0 right-0">
            <div className="h-12 bg-circus-gold/30 shadow-inner"></div>
            <div className="h-2 bg-[linear-gradient(90deg,transparent_0%,var(--circus-gold)_50%,transparent_100%)] opacity-50"></div>
          </div>
        </div>
        
        {/* Right Curtain */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-circus-maroon animate-curtain-right origin-right">
          {/* Base draping shadow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,transparent_0,rgba(0,0,0,0.4)_100%)]"></div>
          {/* Dramatic fold lines */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,rgba(0,0,0,0.3)_2%,transparent_4%,rgba(0,0,0,0.1)_6%)]"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.2)_0,transparent_4%,rgba(0,0,0,0.2)_8%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.2)_50%,transparent_100%)]"></div>
          </div>
          {/* Striped pattern */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--circus-gold)_0,var(--circus-gold)_10px,var(--circus-maroon)_10px,var(--circus-maroon)_20px)] opacity-20"></div>
          {/* Central gather effect */}
          <div className="absolute inset-y-0 left-[40%] w-[20%] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3)_0,transparent_100%)]"></div>
          {/* Top gather effect */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-[radial-gradient(circle_at_50%_0,rgba(0,0,0,0.4)_0,transparent_100%)]"></div>
          {/* Scalloped bottom with shadow */}
          <div className="absolute -bottom-2 left-0 right-0">
            <div className="h-12 bg-[radial-gradient(circle_at_50%_0,var(--circus-maroon)_0,var(--circus-maroon)_100%)_repeat-x] bg-[length:48px_12px]"></div>
            <div className="h-4 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,transparent_100%)]"></div>
          </div>
          {/* Gold trim with shine */}
          <div className="absolute top-0 left-0 right-0">
            <div className="h-12 bg-circus-gold/30 shadow-inner"></div>
            <div className="h-2 bg-[linear-gradient(90deg,transparent_0%,var(--circus-gold)_50%,transparent_100%)] opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="mt-20 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-center relative w-full py-8">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce-slow">
              🎪
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-circus-maroon mb-6">
              <span className="block animate-fade-slide-down opacity-0 [animation-delay:2000ms] [animation-fill-mode:forwards]">From Debugging</span>
              <span className="block text-circus-red animate-fade-slide-down opacity-0 [animation-delay:2400ms] [animation-fill-mode:forwards]">to Flying Trapeze</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-circus-blue font-circus md:mt-5 md:max-w-3xl animate-fade-in opacity-0 [animation-delay:2800ms] [animation-fill-mode:forwards]">
              Transform your tech career into a circus adventure. Join HelloCircus and make your dream of joining the circus a reality.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-6 animate-fade-in opacity-0 [animation-delay:3200ms] [animation-fill-mode:forwards]">
              <Link to="/signup" className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-circus-red rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:bg-circus-maroon hover:shadow-lg">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Get Started</span>
              </Link>
              <Link to="/browse" className="mt-4 sm:mt-0 inline-flex items-center justify-center px-8 py-3 font-bold text-circus-maroon bg-circus-gold rounded-full hover:bg-circus-yellow hover:scale-105 hover:shadow-lg transform transition-all">
                Browse Circuses
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-circus-gold/20 animate-fade-slide-up opacity-0 [animation-delay:3400ms] [animation-fill-mode:forwards]">
              <div className="text-6xl mb-6 animate-spin-slow">🎪</div>
              <h3 className="text-2xl font-display text-circus-maroon">Circus Matching</h3>
              <p className="mt-4 text-circus-blue font-circus">
                Find the perfect circus that matches your skills and aspirations. From small touring companies to major productions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-circus-gold/20 animate-fade-slide-up opacity-0 [animation-delay:3600ms] [animation-fill-mode:forwards]">
              <div className="text-6xl mb-6 animate-pulse">💻</div>
              <h3 className="text-2xl font-display text-circus-maroon">Skills Transfer</h3>
              <p className="mt-4 text-circus-blue font-circus">
                Learn how your tech skills translate to circus arts. Problem-solving and algorithmic thinking meet physical performance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-circus-gold/20 animate-fade-slide-up opacity-0 [animation-delay:3800ms] [animation-fill-mode:forwards]">
              <div className="text-6xl mb-6 animate-bounce">⭐</div>
              <h3 className="text-2xl font-display text-circus-maroon">Success Stories</h3>
              <p className="mt-4 text-circus-blue font-circus">
                Get inspired by software engineers who successfully made the leap into circus arts and never looked back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navigation: React.FC<{ isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <nav className="bg-circus-maroon shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="font-display text-3xl text-circus-gold">🎪 HelloCircus</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link to="/find-circuses" className="text-circus-cream hover:text-circus-gold transition-colors">Find Circuses</Link>
              <Link to="/for-circuses" className="text-circus-cream hover:text-circus-gold transition-colors">For Circuses</Link>
              <Link to="/signup" className="bg-circus-gold text-circus-maroon px-6 py-2 rounded-full hover:bg-circus-yellow hover:scale-105 transform transition-all font-bold">
                Join the Circus
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-circus-cream"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden bg-circus-maroon">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/find-circuses" className="block px-3 py-2 text-circus-cream hover:bg-circus-red/20">Find Circuses</Link>
              <Link to="/for-circuses" className="block px-3 py-2 text-circus-cream hover:bg-circus-red/20">For Circuses</Link>
              <Link to="/signup" className="block px-3 py-2 text-circus-gold font-bold">Join the Circus</Link>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16"></div>
    </>
  )
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-circus-cream">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-circuses" element={<FindCircuses />} />
            <Route path="/for-circuses" element={<ForCircuses />} />
            <Route path="/browse" element={<BrowseCircuses />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/meme-reveal" element={<MemeReveal />} />
          </Routes>
        </main>
        <footer className="bg-circus-maroon border-t-4 border-circus-gold mt-auto">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-circus-cream font-circus">© 2025 HelloCircus. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
