import React from 'react';
import { useState, useEffect } from 'react';

export const State = () => {
  const [time, setTime] = useState(new Date());
  const [isNight, setIsNight] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date();
      setTime(newTime);
      
      // Check if it's night time (between 6PM and 6AM)
      const hours = newTime.getHours();
      setIsNight(hours >= 18 || hours < 6);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Extract hours, minutes, and seconds for display
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  // Format with leading zeros
  const formatTime = (value) => value.toString().padStart(2, '0');
  
  // Calculate background gradient based on time of day
  const getBgClass = () => {
    return isNight 
      ? "bg-gradient-to-br from-blue-900 to-purple-900" 
      : "bg-gradient-to-br from-blue-400 to-cyan-300";
  };
  
  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = hours;
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className={`${getBgClass()} w-full max-w-md rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 m-auto`}>
      <div className="flex flex-col items-center p-8 text-center">
        <div className="mb-4">
          <span className="text-white text-lg font-light">{getGreeting()}</span>
        </div>
        
        <div className="flex items-center justify-center space-x-1 mb-4">
          {/* Clock display with individual time units */}
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
              <span className="text-5xl font-bold text-white">{formatTime(hours)}</span>
            </div>
            <span className="text-xs text-white mt-1">HOURS</span>
          </div>
          
          <div className="text-white text-4xl font-bold animate-pulse">:</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
              <span className="text-5xl font-bold text-white">{formatTime(minutes)}</span>
            </div>
            <span className="text-xs text-white mt-1">MINUTES</span>
          </div>
          
          <div className="text-white text-4xl font-bold animate-pulse">:</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
              <span className="text-5xl font-bold text-white">{formatTime(seconds)}</span>
            </div>
            <span className="text-xs text-white mt-1">SECONDS</span>
          </div>
        </div>
        
        <div className="mt-2">
          <span className="text-white text-sm">
            {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-yellow-300 opacity-20 transform -translate-x-8 translate-y-8"></div>
        <div className={`mt-4 w-16 h-1 rounded-full ${isNight ? 'bg-purple-400' : 'bg-blue-300'}`}></div>
      </div>
    </div>
  );
};