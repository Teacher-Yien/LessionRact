import React, { useState } from 'react'
import { FcHome } from "react-icons/fc";

export default function Agument() {
  // Extended character data with descriptions and images
  const characters = [
    {
      id: 1001,
      name: "Luffy",
      role: "Captain",
      description: "The captain of the Straw Hat Pirates with a rubber body and big dreams of becoming the Pirate King.",
      image: "luffy.jpg" // Using placeholder as instructed
    },
    {
      id: 1002,
      name: "Zoro",
      role: "Swordsman",
      description: "The first mate and master swordsman who aims to become the world's greatest swordsman.",
      image: "Zoro2.jpg"
    },
    {
      id: 1003,
      name: "Nami",
      role: "Navigator",
      description: "The skilled navigator who loves money and tangerines. Dreams of mapping the entire world.",
      image: "Nami.jpg"
    },
    {
      id: 1004,
      name: "Smoker",
      role: "Marine Captain",
      description: "A determined Marine officer with smoke-based powers who pursues the Straw Hat Pirates.",
      image: "Smoker.jpg"
    }
  ]

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Anime Character Profiles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

function CharacterCard({ character }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      {/* Card Image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>
      
      {/* Card Content - Slides up on hover */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-blue-700 text-white p-4 transition-all duration-300 ${isHovered ? 'h-3/4' : 'h-16'}`}>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <span className="px-2 py-1 bg-blue-500 rounded-full text-xs font-semibold">{character.role}</span>
        </div>
        
        <div className={`overflow-hidden transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-gray-200 mt-2">{character.description}</p>
          
          <div className="mt-4 flex gap-2">
            <button className="px-3 py-1 bg-yellow-500 text-blue-900 rounded-md font-semibold text-sm hover:bg-yellow-400 transition-colors">View Profile</button>
            <button className="px-3 py-1 bg-transparent border border-white text-white rounded-md font-semibold text-sm hover:bg-white hover:text-blue-800 transition-colors">Add Friend</button>
          </div>
        </div>
      </div>
      
      {/* Badge - visible only on hover */}
      <div className={`absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        #{character.id}
      </div>
    </div>
  )
}