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
      <style>
        {`
          @keyframes bodyBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1px); }
          }
          @keyframes leftThighWalk {
            0% { transform: rotate(-15deg); }
            50% { transform: rotate(25deg); }
            100% { transform: rotate(-15deg); }
          }
          @keyframes rightThighWalk {
            0% { transform: rotate(25deg); }
            50% { transform: rotate(-15deg); }
            100% { transform: rotate(25deg); }
          }
          @keyframes leftThighWalkMirrored {
            0% { transform: rotate(25deg); }
            50% { transform: rotate(-15deg); }
            100% { transform: rotate(25deg); }
          }
          @keyframes rightThighWalkMirrored {
            0% { transform: rotate(-15deg); }
            50% { transform: rotate(25deg); }
            100% { transform: rotate(-15deg); }
          }
          @keyframes leftKneeWalk {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(45deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes rightKneeWalk {
            0% { transform: rotate(45deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(45deg); }
          }
          @keyframes leftKneeWalkMirrored {
            0% { transform: rotate(45deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(45deg); }
          }
          @keyframes rightKneeWalkMirrored {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(45deg); }
            75% { transform: rotate(10deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes leftArmWalk {
            0% { transform: rotate(20deg); }
            50% { transform: rotate(-15deg); }
            100% { transform: rotate(20deg); }
          }
          @keyframes rightArmWalk {
            0% { transform: rotate(-15deg); }
            50% { transform: rotate(20deg); }
            100% { transform: rotate(-15deg); }
          }
          @keyframes leftArmWalkMirrored {
            0% { transform: rotate(-20deg); }
            50% { transform: rotate(15deg); }
            100% { transform: rotate(-20deg); }
          }
          @keyframes rightArmWalkMirrored {
            0% { transform: rotate(15deg); }
            50% { transform: rotate(-20deg); }
            100% { transform: rotate(15deg); }
          }
          @keyframes moveToLeft {
            0% { transform: translateX(100%) scale(0.8); }
            100% { transform: translateX(0) scale(0.8); }
          }
          @keyframes moveToRight {
            0% { transform: translateX(-100%) scale(0.8); }
            100% { transform: translateX(0) scale(0.8); }
          }
          .fire-breather-left {
            animation: moveToLeft 3s forwards;
            position: absolute;
            left: 5%;
            bottom: 20%;
            z-index: 1;
          }
          .fire-breather-right {
            animation: moveToRight 3s forwards;
            position: absolute;
            right: 5%;
            bottom: 20%;
            z-index: 1;
          }
          .walking {
            animation: none;
          }
          .walking .body {
            transform-origin: 50px 70px;
            animation: bodyBounce 0.6s steps(1) 5;
          }
          .fire-breather-left .walking .thigh-left {
            transform-origin: 50px 70px;
            animation: leftThighWalkMirrored 0.6s steps(1) 5;
          }
          .fire-breather-left .walking .thigh-right {
            transform-origin: 50px 70px;
            animation: rightThighWalkMirrored 0.6s steps(1) 5;
          }
          .fire-breather-left .walking .knee-left {
            transform-origin: 45px 80px;
            animation: leftKneeWalkMirrored 0.6s steps(1) 5;
          }
          .fire-breather-left .walking .knee-right {
            transform-origin: 55px 80px;
            animation: rightKneeWalkMirrored 0.6s steps(1) 5;
          }
          .fire-breather-left .walking .arm-left {
            transform-origin: 50px 40px;
            animation: leftArmWalkMirrored 0.6s steps(1) 5;
          }
          .fire-breather-left .walking .arm-right {
            transform-origin: 50px 40px;
            animation: rightArmWalkMirrored 0.6s steps(1) 5;
          }
          .fire-breather-right .walking .thigh-left {
            transform-origin: 50px 70px;
            animation: leftThighWalk 0.6s steps(1) 5;
          }
          .fire-breather-right .walking .thigh-right {
            transform-origin: 50px 70px;
            animation: rightThighWalk 0.6s steps(1) 5;
          }
          .fire-breather-right .walking .knee-left {
            transform-origin: 45px 80px;
            animation: leftKneeWalk 0.6s steps(1) 5;
          }
          .fire-breather-right .walking .knee-right {
            transform-origin: 55px 80px;
            animation: rightKneeWalk 0.6s steps(1) 5;
          }
          .fire-breather-right .walking .arm-left {
            transform-origin: 50px 40px;
            animation: leftArmWalk 0.6s steps(1) 5;
          }
          .fire-breather-right .walking .arm-right {
            transform-origin: 50px 40px;
            animation: rightArmWalk 0.6s steps(1) 5;
          }
          @keyframes launch {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(-40vh);
              opacity: 1;
            }
            50.1% {
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 0;
            }
          }
          @keyframes firework-particle {
            0% {
              transform: translate(0);
              opacity: 1;
              width: 0;
              height: 0;
            }
            40% {
              opacity: 1;
            }
            100% {
              transform: translate(var(--x) var(--y));
              opacity: 0;
              width: var(--size);
              height: var(--size);
            }
          }
          .firework-particle {
            position: absolute;
            border-radius: 50%;
            animation: firework-particle 1.5s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
            animation-delay: var(--delay);
          }
          .firework-particle::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            animation: firework-trail 1.5s ease-out forwards;
          }
          @keyframes firework-trail {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          .firework-shell {
            width: 2px;
            height: 2px;
            border-radius: 50%;
            animation: launch 3s ease-out infinite;
          }
          .firework-1 { animation-delay: 0s; }
          .firework-2 { animation-delay: 1s; }
          .firework-3 { animation-delay: 2s; }
          .firework-burst {
            opacity: 0;
            animation: show-burst 3s ease-out infinite;
          }
          @keyframes show-burst {
            0%, 50% {
              opacity: 0;
              transform: scale(0);
            }
            50.1% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1);
            }
          }
          @keyframes tightropeWalk {
            0% {
              transform: translateX(100vw) scaleX(-1);
            }
            100% {
              transform: translateX(-20vw) scaleX(-1);
            }
          }
          @keyframes balancePole {
            0%, 100% {
              transform: rotate(0deg);
            }
            15% {
              transform: rotate(-1deg);
            }
            30% {
              transform: rotate(1deg);
            }
            45% {
              transform: rotate(-4deg);
            }
            50% {
              transform: rotate(-5deg);
            }
            55% {
              transform: rotate(-4deg);
            }
            70% {
              transform: rotate(1deg);
            }
            85% {
              transform: rotate(-1deg);
            }
          }
          @keyframes bodyTilt {
            0%, 100% {
              transform: rotate(-1deg);
            }
            15% {
              transform: rotate(1deg);
            }
            30% {
              transform: rotate(-1deg);
            }
            45% {
              transform: rotate(3deg);
            }
            50% {
              transform: rotate(4deg);
            }
            55% {
              transform: rotate(3deg);
            }
            70% {
              transform: rotate(-1deg);
            }
            85% {
              transform: rotate(1deg);
            }
          }
          @keyframes carefulStep {
            0%, 20%, 40%, 60%, 80%, 100% {
              transform: translateY(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateY(-1px);
            }
          }
          @keyframes leftLegStep {
            0%, 100% {
              transform: rotate(0deg);
            }
            20%, 80% {
              transform: rotate(-5deg);
            }
            40% {
              transform: rotate(-20deg);
            }
            60% {
              transform: rotate(-10deg);
            }
          }
          @keyframes rightLegStep {
            0%, 100% {
              transform: rotate(0deg);
            }
            20%, 80% {
              transform: rotate(5deg);
            }
            40% {
              transform: rotate(20deg);
            }
            60% {
              transform: rotate(10deg);
            }
          }
          @keyframes legWalk {
            0%, 100% {
              transform: rotate(-15deg);
            }
            50% {
              transform: rotate(15deg);
            }
          }
          @keyframes tightRopeThighWalk {
            0%, 100% {
              transform: rotate(-15deg);
            }
            15% {
              transform: rotate(15deg);
            }
            30% {
              transform: rotate(-15deg);
            }
            45% {
              transform: rotate(-25deg);
            }
            50% {
              transform: rotate(-30deg);
            }
            55% {
              transform: rotate(-25deg);
            }
            70% {
              transform: rotate(15deg);
            }
            85% {
              transform: rotate(-15deg);
            }
          }
          @keyframes tightRopeKneeWalk {
            0%, 100% {
              transform: rotate(10deg);
            }
            15% {
              transform: rotate(45deg);
            }
            30% {
              transform: rotate(10deg);
            }
            45% {
              transform: rotate(60deg);
            }
            50% {
              transform: rotate(70deg);
            }
            55% {
              transform: rotate(60deg);
            }
            70% {
              transform: rotate(45deg);
            }
            85% {
              transform: rotate(10deg);
            }
          }
          .tight-rope {
            position: fixed;
            top: 120px;
            left: 0;
            width: 100vw;
            z-index: 5;
            overflow: hidden;
          }
          .rope-walker {
            animation: tightropeWalk 40s infinite linear;
            animation-delay: 0s !important;
          }
          .walker-body {
            animation: bodyTilt 4s infinite ease-in-out;
            transform-origin: 0 150px;
          }
          .balance-pole {
            animation: balancePole 4s infinite ease-in-out;
          }
          .thigh-left {
            animation: tightRopeThighWalk 4s infinite ease-in-out;
            transform-origin: 0 140px;
          }
          .thigh-right {
            animation: tightRopeThighWalk 4s infinite ease-in-out reverse;
            transform-origin: 0 140px;
          }
          .knee-left {
            animation: tightRopeKneeWalk 4s infinite ease-in-out;
            transform-origin: top left;
          }
          .knee-right {
            animation: tightRopeKneeWalk 4s infinite ease-in-out reverse;
            transform-origin: top right;
          }
        `}
      </style>
      
      {/* Tight Rope Walker */}
      <div className="tight-rope">
        <svg width="100%" height="300" preserveAspectRatio="none">
          {/* The Walker */}
          <g className="rope-walker">
            {/* Balance Pole */}
            <g className="balance-pole">
              <line x1="-100" y1="115" x2="100" y2="115" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </g>
            
            {/* Entire body group that tilts together */}
            <g className="walker-body" stroke="currentColor" fill="none" strokeLinecap="round" strokeWidth="4">
              {/* Body */}
              <line x1="0" y1="85" x2="0" y2="140" />
              
              {/* Head */}
              <circle cx="0" cy="75" r="12" fill="currentColor" />
              
              {/* Arms - attached at shoulders, holding pole above rope */}
              <line x1="0" y1="95" x2="-15" y2="115" />
              <line x1="0" y1="95" x2="15" y2="115" />
              
              {/* Legs with knees */}
              <g className="thigh-left">
                <line x1="0" y1="140" x2="-8" y2="145" strokeLinecap="round" />
                <g className="knee-left" style={{ transformBox: 'fill-box', transformOrigin: 'top left' }}>
                  <line x1="-8" y1="145" x2="-12" y2="150" strokeLinecap="round" />
                </g>
              </g>
              <g className="thigh-right">
                <line x1="0" y1="140" x2="8" y2="145" strokeLinecap="round" />
                <g className="knee-right" style={{ transformBox: 'fill-box', transformOrigin: 'top right' }}>
                  <line x1="8" y1="145" x2="12" y2="150" strokeLinecap="round" />
                </g>
              </g>
            </g>
          </g>

          {/* The Rope */}
          <line x1="0" y1="150" x2="100%" y2="150" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      {/* Fireworks */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[20%] bottom-0">
          <div className="w-2 h-2 bg-circus-gold rounded-full animate-firework-1">
            <div className="firework-burst">
              {[...Array(40)].map((_, i) => {
                const colors = [
                  '#FFD700', // Gold
                  '#FF2B2B', // Red
                  '#1E40AF', // Blue
                  '#FFE15D', // Yellow
                  '#FF6B35'  // Orange
                ];
                return (
                  <div
                    key={i}
                    className="animate-firework-particle"
                    style={{
                      ['--particle-delay' as string]: `${i * 0.02}s`,
                      backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute left-[50%] bottom-0">
          <div className="w-2 h-2 bg-circus-red rounded-full animate-firework-2">
            <div className="firework-burst">
              {[...Array(40)].map((_, i) => {
                const colors = [
                  '#FFD700', // Gold
                  '#FF2B2B', // Red
                  '#1E40AF', // Blue
                  '#FFE15D', // Yellow
                  '#FF6B35'  // Orange
                ];
                return (
                  <div
                    key={i}
                    className="animate-firework-particle"
                    style={{
                      ['--particle-delay' as string]: `${i * 0.02}s`,
                      backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute left-[80%] bottom-0">
          <div className="w-2 h-2 bg-circus-blue rounded-full animate-firework-3">
            <div className="firework-burst">
              {[...Array(40)].map((_, i) => {
                const colors = [
                  '#FFD700', // Gold
                  '#FF2B2B', // Red
                  '#1E40AF', // Blue
                  '#FFE15D', // Yellow
                  '#FF6B35'  // Orange
                ];
                return (
                  <div
                    key={i}
                    className="animate-firework-particle"
                    style={{
                      ['--particle-delay' as string]: `${i * 0.02}s`,
                      backgroundColor: colors[Math.floor(Math.random() * colors.length)]
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 animate-confetti-${(i % 5) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FFD700', '#FF2B2B', '#1E40AF', '#FFE15D'][i % 4],
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Floating Stars */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 ${i % 2 === 0 ? 'animate-spin-glow' : 'animate-spin-glow-reverse'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-circus-gold">
              <path d="M12 0l2.5 9h9.5l-7.5 5.5 3 9.5-7.5-5.5-7.5 5.5 3-9.5-7.5-5.5h9.5z"/>
            </svg>
          </div>
        ))}
      </div>

      <div className="circus-performer performer-1">
        <CircusSvg />
      </div>
      <div className="circus-performer performer-2">
        <CircusSvg />
      </div>
      <div className="circus-performer performer-3">
        <CircusSvg />
      </div>
      <div className="fire-breather fire-breather-left">
        <svg viewBox="-20 -50 140 170" xmlns="http://www.w3.org/2000/svg">
          {/* Stick Figure */}
          <g className="performer walking" stroke="currentColor" fill="none" style={{ transform: 'scaleX(-1)' }}>
            <g className="body">
              {/* Torso */}
              <line x1="50" y1="30" x2="50" y2="70" strokeWidth="3"/>
              {/* Head */}
              <circle cx="50" cy="25" r="6" />
              {/* Arms */}
              <line className="arm-left" x1="50" y1="40" x2="35" y2="55" strokeWidth="3"/>
              <line className="arm-right" x1="50" y1="40" x2="65" y2="55" strokeWidth="3"/>
              {/* Legs with knees */}
              <g className="thigh-left">
                <line x1="50" y1="70" x2="45" y2="80" strokeWidth="3"/>
                <g className="knee-left">
                  <line x1="45" y1="80" x2="40" y2="90" strokeWidth="3"/>
                </g>
              </g>
              <g className="thigh-right">
                <line x1="50" y1="70" x2="55" y2="80" strokeWidth="3"/>
                <g className="knee-right">
                  <line x1="55" y1="80" x2="60" y2="90" strokeWidth="3"/>
                </g>
              </g>
            </g>
            {/* Fire - coming from mouth */}
            <path className="fire" fill="#FF6B35" d="M50,25 L45,25 Q25,25 15,15 Q5,5 15,-35 Q25,-45 35,-35 Q45,-25 45,25" />
          </g>
        </svg>
      </div>
      <div className="fire-breather fire-breather-right">
        <svg viewBox="-20 -50 140 170" xmlns="http://www.w3.org/2000/svg">
          {/* Stick Figure */}
          <g className="performer walking" stroke="currentColor" fill="none">
            <g className="body">
              {/* Torso */}
              <line x1="50" y1="30" x2="50" y2="70" strokeWidth="3"/>
              {/* Head */}
              <circle cx="50" cy="25" r="6" />
              {/* Arms */}
              <line className="arm-left" x1="50" y1="40" x2="35" y2="55" strokeWidth="3"/>
              <line className="arm-right" x1="50" y1="40" x2="65" y2="55" strokeWidth="3"/>
              {/* Legs with knees */}
              <g className="thigh-left">
                <line x1="50" y1="70" x2="45" y2="80" strokeWidth="3"/>
                <g className="knee-left">
                  <line x1="45" y1="80" x2="40" y2="90" strokeWidth="3"/>
                </g>
              </g>
              <g className="thigh-right">
                <line x1="50" y1="70" x2="55" y2="80" strokeWidth="3"/>
                <g className="knee-right">
                  <line x1="55" y1="80" x2="60" y2="90" strokeWidth="3"/>
                </g>
              </g>
            </g>
            {/* Fire - coming from mouth */}
            <path className="fire" fill="#FF6B35" d="M50,25 L45,25 Q25,25 15,15 Q5,5 15,-35 Q25,-45 35,-35 Q45,-25 45,25" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CircusBackground 