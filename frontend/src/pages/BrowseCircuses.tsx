import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CircusBackground from '../components/CircusBackground'

interface Circus {
  id: number
  name: string
  description: string
  location: string
  size: string
  website: string
  imageUrl: string
  techStack: string[]
  positions: string[]
  founded: number
  isTouring: boolean
}

const BrowseCircuses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [circuses, setCircuses] = useState<Circus[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedPosition, setSelectedPosition] = useState<string>(searchParams.get('position') || '')

  useEffect(() => {
    fetchCircuses()
  }, [])

  useEffect(() => {
    // Update search params when filters change
    const params = new URLSearchParams()
    if (searchTerm) params.set('search', searchTerm)
    if (selectedPosition) params.set('position', selectedPosition)
    setSearchParams(params)
  }, [searchTerm, selectedPosition, setSearchParams])

  const fetchCircuses = async () => {
    try {
      const response = await fetch('http://localhost:5002/api/circuses')
      const data = await response.json()
      setCircuses(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching circuses:', error)
      setLoading(false)
    }
  }

  const filteredCircuses = circuses.filter(circus => {
    const matchesSearch = !searchTerm || 
      circus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circus.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circus.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSize = !selectedSize || circus.size === selectedSize
    const matchesPosition = !selectedPosition || circus.positions.includes(selectedPosition)
    return matchesSearch && matchesSize && matchesPosition
  })

  return (
    <div className="h-full flex-1 flex flex-col relative">
      <CircusBackground />
      
      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl sm:text-6xl text-circus-maroon mb-6">
            Browse Circuses
          </h1>
          <p className="text-xl text-circus-blue max-w-3xl mx-auto">
            Discover amazing circuses looking for talented performers like you. Filter by size,
            available positions, and more to find your perfect match.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search circuses..."
              className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">All Sizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <select
              className="w-full px-4 py-2 rounded-lg border border-circus-blue/20 focus:outline-none focus:border-circus-red"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
            >
              <option value="">All Positions</option>
              <option value="Aerialist">Aerialist</option>
              <option value="Acrobat">Acrobat</option>
              <option value="Juggler">Juggler</option>
              <option value="Ring Master">Ring Master</option>
              <option value="Fire Performer">Fire Performer</option>
              <option value="Strongman">Strongman</option>
              <option value="Contortionist">Contortionist</option>
              <option value="Tightrope Walker">Tightrope Walker</option>
            </select>
          </div>
        </div>

        {/* Circus List */}
        {loading ? (
          <div className="text-center text-circus-blue">Loading circuses...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCircuses.map(circus => (
              <div key={circus.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={circus.imageUrl || '/placeholder-circus.jpg'}
                  alt={circus.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-circus-maroon mb-2">{circus.name}</h3>
                  <p className="text-circus-blue mb-4">{circus.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {circus.positions.map(position => (
                      <span
                        key={position}
                        className="px-3 py-1 bg-circus-red/10 text-circus-red rounded-full text-sm"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-circus-blue">{circus.location}</span>
                    <a
                      href={circus.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-circus-red hover:text-circus-maroon"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseCircuses 