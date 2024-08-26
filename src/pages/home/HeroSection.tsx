import React, { useState, useEffect } from 'react';

const slides = [
    {
      image: 'https://via.placeholder.com/1920x1080?text=Slide+1',
      title: 'Get your next',
      description: 'green thumb idea',
    },
    {
      image: 'https://via.placeholder.com/1920x1080?text=Slide+2',
      title: 'Get your next',
      description: 'weeknight dinner idea',
    },
    {
      image: 'https://via.placeholder.com/1920x1080?text=Slide+3',
      title: 'Get your next',
      description: 'new look outfit',
    },
    {
      image: 'https://via.placeholder.com/1920x1080?text=Slide+4',
      title: 'Find your next',
      description: 'travel destination',
    },
    {
      image: 'https://via.placeholder.com/1920x1080?text=Slide+5',
      title: 'Discover your next',
      description: 'DIY project',
    },
  ];
  

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-white text-xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
