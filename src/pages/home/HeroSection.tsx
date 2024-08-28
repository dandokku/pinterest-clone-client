import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const slides = [
  {
    images: [
      "https://images.unsplash.com/photo-1723053145751-9aacd7c47df1?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1724190500169-e9f1ca06e786?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1724566611394-4673b9ee33ac?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1723843038784-ba892b252323?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1724434414346-b9d6c907ab7d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1724554362949-5370c51ded7d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Get your next",
    description: "green thumb idea",
  },
  {
    images: [
      "https://plus.unsplash.com/premium_photo-1675864532625-60efd11cde54?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1635350644167-7bbebf42e664?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1617548059706-d8a95dd91fe7?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1473973916745-60839aebf06b?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1505932049984-db368d92fa63?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlubmVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1463183547458-6a2c760d0912?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlubmVyfGVufDB8fDB8fHww",
    ],
    title: "Get your next",
    description: "weeknight dinner idea",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1608613304899-ea8098577e38?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RElZfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1606676539940-12768ce0e762?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RElZfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1610544953947-e276e35489c9?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERJWXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERJWXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1595814431706-6839a6b231be?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERJWXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1416339212457-ef9ffadc2903?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fERJWXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    title: "Discover your next",
    description: "DIY project",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJhdmVsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1504598318550-17eba1008a68?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VHJhdmVsfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJhdmVsfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1512757776214-26d36777b513?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    title: "Find your next",
    description: "travel destination",
  },
  {
    images: [
      "https://images.unsplash.com/photo-1548932813-88dcf75599c6?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdvcmtvdXR8ZW58MHwxfDB8fHww",
      "https://images.unsplash.com/photo-1600881333165-1c06e53eeae2?w=00&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFdvcmtvdXR8ZW58MHwxfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1665673312770-90df9f77ddfa?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V29ya291dHxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V29ya291dHxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29ya291dHxlbnwwfDF8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1664884884474-1fe1b7b43ee1?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V29ya291dHxlbnwwfDF8MHx8fDA%3D",
    ],
    title: "Get your next",
    description: "workout routine",
  },
  {
    images: [
      "https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9saWRheXxlbnwwfDF8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1682535210542-21dceae4530c?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG9saWRheXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1511886277144-49a67943f819?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9saWRheXxlbnwwfDF8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1681739699583-2bf9de099b4a?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SG9saWRheXxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1607920592831-f68bbee49939?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhvbGlkYXl8ZW58MHwxfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1681922761659-07483f67b6c7?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvbGlkYXl8ZW58MHwxfDB8fHww",
    ],
    title: "Plan your next",
    description: "holiday party",
  },
  {
    images: [
      "https://plus.unsplash.com/premium_photo-1680632913194-be52bf941229?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9tZSUyMERlY29yfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9tZSUyMERlY29yfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1572048793162-8a36a83f1def?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG9tZSUyMERlY29yfGVufDB8MXwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1509422007420-a57adf7b7fdf?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbWUlMjBEZWNvcnxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1643148636541-bca753f22846?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhvbWUlMjBEZWNvcnxlbnwwfDF8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1509628061459-1328d06c2ced?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEhvbWUlMjBEZWNvcnxlbnwwfDF8MHx8fDA%3D",
    ],
    title: "Upgrade your",
    description: "home decor",
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
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          } flex flex-col items-center justify-center`}
        >
          {/* Images arranged at the bottom corners */}
          <div className="absolute bottom-10 w-full px-10 flex justify-between">
            <div className="flex flex-col gap-4">
              <img
                src={slide.images[0]}
                alt={`Slide Image 1`}
                className="object-cover rounded-full border-4 border-white"
              />
              <img
                src={slide.images[1]}
                alt={`Slide Image 2`}
                className="object-cover rounded-full border-4 border-white"
              />
              <img
                src={slide.images[2]}
                alt={`Slide Image 3`}
                className="object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={slide.images[3]}
                alt={`Slide Image 4`}
                className="object-cover rounded-full border-4 border-white"
              />
              <img
                src={slide.images[4]}
                alt={`Slide Image 5`}
                className="object-cover rounded-full border-4 border-white"
              />
              <img
                src={slide.images[5]}
                alt={`Slide Image 6`}
                className="object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* Text in the middle */}
          <div className="absolute top-1/4 text-center">
            <h1 className="text-brown text-5xl md:text-8xl font-bold mb-2">
              {slide.title}
            </h1>
            <p className="text-gray text-xl md:text-5xl">{slide.description}</p>
          </div>

          {/* Arrow Down Button */}
          <div className="absolute bottom-5 text-center">
            <FaArrowDown className="text-white text-3xl animate-bounce" />
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
