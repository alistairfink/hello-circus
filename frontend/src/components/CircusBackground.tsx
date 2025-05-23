import '../styles/animations.css'

const CircusSvg = () => (
  <svg width="800" height="800" viewBox="0 0 800 800" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g className="trapeze-group">
      {/* Ropes extending from top of viewport */}
      <path className="rope-left" d="M300 0 L350 400" stroke="url(#ropeGradient)" strokeWidth="3" />
      <path className="rope-right" d="M500 0 L450 400" stroke="url(#ropeGradient)" strokeWidth="3" />
      
      {/* Trapeze Bar */}
      <path className="bar" d="M345 400 L455 400" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      
      {/* Performer */}
      <g className="performer">
        {/* Head */}
        <circle cx="400" cy="420" r="15" fill="currentColor"/>
        
        {/* Shoulders and Arms */}
        <path d="M385 435 L380 400" stroke="currentColor" strokeWidth="5"/> {/* Left arm */}
        <path d="M415 435 L420 400" stroke="currentColor" strokeWidth="5"/> {/* Right arm */}
        <path d="M385 435 L415 435" stroke="currentColor" strokeWidth="5"/> {/* Shoulders */}
        
        {/* Body - slightly arched */}
        <path d="M400 435 C400 445, 400 455, 400 470" stroke="currentColor" strokeWidth="5"/>
        
        {/* Legs - pointed */}
        <path d="M400 470 L390 490 L385 510" stroke="currentColor" strokeWidth="5"/>
        <path d="M400 470 L410 490 L415 510" stroke="currentColor" strokeWidth="5"/>
      </g>
    </g>
  </svg>
)

const CircusBackground = () => {
  return (
    <div className="circus-background">
      <div className="circus-performer performer-1">
        <CircusSvg />
      </div>
      <div className="circus-performer performer-2">
        <CircusSvg />
      </div>
      <div className="circus-performer performer-3">
        <CircusSvg />
      </div>
    </div>
  )
}

export default CircusBackground 