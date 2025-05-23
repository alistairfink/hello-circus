import CircusBackground from '../components/CircusBackground'

const MemeReveal: React.FC = () => {
  return (
    <div className="h-full flex-1 flex flex-col relative">
      <CircusBackground />
      
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center max-w-lg mx-4">
          <h1 className="font-display text-5xl text-circus-maroon mb-6">
            🎪 Surprise! 🎪
          </h1>
          <p className="text-2xl text-circus-blue mb-4">
            This is a meme app
          </p>
          <p className="text-circus-blue opacity-75">
            If you are interested though, email me at alistairfink@gmail.com and maybe I'll make this for real lmao 🎭
          </p>
        </div>
      </div>
    </div>
  )
}

export default MemeReveal 