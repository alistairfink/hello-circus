import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CircusBackground from '../components/CircusBackground'

const SignUp: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    position: '',
    experience: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/meme-reveal')
  }

  return (
    <div className="h-full flex-1 flex flex-col relative">
      <CircusBackground />
      
      <div className="flex-1 max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h1 className="font-display text-4xl text-circus-maroon mb-6 text-center">
            Join the Circus
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-circus-blue mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-circus-blue mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-circus-blue mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-circus-blue mb-2">Circus Position</label>
              <select
                required
                className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
              >
                <option value="">Select a position</option>
                <option value="aerialist">Aerialist</option>
                <option value="acrobat">Acrobat</option>
                <option value="juggler">Juggler</option>
                <option value="ringmaster">Ring Master</option>
                <option value="fire">Fire Performer</option>
                <option value="strongman">Strongman</option>
              </select>
            </div>

            <div>
              <label className="block text-circus-blue mb-2">Years of Experience</label>
              <input
                type="number"
                required
                min="0"
                max="50"
                className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-circus-red hover:bg-circus-maroon text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp 