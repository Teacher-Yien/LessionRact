import React, { useState, useEffect } from 'react';
import { Star, Award, Frown } from 'lucide-react';

export default function Random() {
  const [random, setRandom] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate random number on component mount
  useEffect(() => {
    const score = parseFloat((Math.floor(Math.random() * 100 + 1)).toFixed(2));
    setRandom(score);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const isPassing = random >= 50;
  
  // Anime style color scheme
  const bgColor = isPassing ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-red-500 to-pink-600';
  const cardBg = isPassing ? 'bg-blue-100' : 'bg-red-100';
  const textColor = isPassing ? 'text-blue-700' : 'text-red-700';
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-64 bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto border-4 border-t-blue-500 border-b-purple-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
          <p className="mt-2 font-semibold text-gray-700">កំពុងគណនាពិន្ទុ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-md mx-auto rounded-xl shadow-lg overflow-hidden ${cardBg} transform transition-all duration-300 hover:scale-105`}>
      {/* Header with anime-style gradient */}
      <div className={`${bgColor} px-6 py-4`}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">ជេមស៍</h1>
          <div className="flex">
            {isPassing && [...Array(3)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-300 fill-yellow-300" />
            ))}
            {!isPassing && [...Array(2)].map((_, i) => (
              <Star key={i} size={20} className="text-gray-300" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Content area */}
      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-700">ពិន្ទុប្រឡង៖</h2>
            <div className={`text-xl font-bold ${textColor} flex items-center`}>
              {random}
              {isPassing && <Award size={20} className="ml-2 text-yellow-500" />}
            </div>
          </div>
          
          <div className="w-full h-4 mt-2 rounded-full bg-gray-200">
            <div 
              className={`h-4 rounded-full ${isPassing ? 'bg-green-500' : 'bg-red-500'}`}
              style={{ width: `${random}%` }}
            ></div>
          </div>
        </div>
        
        {/* Result message with anime-style elements */}
        <div className={`mt-4 p-4 rounded-lg text-center ${isPassing ? 'bg-green-100' : 'bg-red-100'}`}>
          {isPassing ? (
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-green-600">អ្នកបានជាប់!</div>
              <p className="mt-1 text-green-600">សូមអបអរសាទរ!</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="flex items-center text-xl font-bold text-red-600">
                ធ្លាក់ការប្រឡង <Frown size={20} className="ml-2" />
              </div>
              <p className="mt-1 text-red-600">ព្យាយាមឲ្យខ្លាំងនៅពេលក្រោយ!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}