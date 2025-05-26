import React, { useState, useEffect } from 'react'

export const Demo = (props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [glowIntensity, setGlowIntensity] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.4), rgba(59, 130, 246, 0.2), transparent 50%)`
        }}
      />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-20 animate-pulse"
          style={{
            width: `${80 + i * 20}px`,
            height: `${80 + i * 20}px`,
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i}s`
          }}
        />
      ))}

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div 
          className={`
            relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 
            transform transition-all duration-500 hover:scale-105 hover:rotate-1
            shadow-2xl hover:shadow-purple-500/25
            ${isHovered ? 'bg-black/30' : ''}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated border gradient */}
          <div 
            className="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60"
            style={{
              background: `conic-gradient(from ${glowIntensity * 3.6}deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)`
            }}
          >
            <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Animated title */}
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-8 text-center tracking-tight">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>H</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>o</span>
              <span className="inline-block mx-4" />
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>I</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>n</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>s</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>t</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.0s' }}>n</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.1s' }}>c</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.2s' }}>e</span>
            </h1>

            {/* Subtitle with typewriter effect */}
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300 font-light tracking-wide">
                Welcome to the future of digital experiences
              </p>
            </div>

            {/* Children container with glassmorphism */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[200px] flex items-center justify-center">
                <div className="text-white/90 text-center">
                  {props.children || (
                    <div className="space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center animate-spin">
                        <div className="w-8 h-8 bg-white rounded-full opacity-80" />
                      </div>
                      <p className="text-lg text-gray-300">Your content goes here</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating action indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-60" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400 opacity-60" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400 opacity-60" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-400 opacity-60" />
        </div>
      </div>

      {/* Ambient particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  )
}