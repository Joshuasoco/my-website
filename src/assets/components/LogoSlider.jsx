import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import Button from '../components/ui/Button';
import { image } from 'framer-motion/client';
import '../../App.css';
// Sample logo data - replace with your actual logos
const sampleLogos = [
  {
    id: 1,
    name: "Reactjs",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", 
    alt: "REACT"
  },
  {
    id: 2,
    name: "Nodejs",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "nodejs"
  },
  {
    id: 3,
    name: "Figma",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma"
  },
  {
    id: 4,
    name: "Java",
    url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    alt: "Java rge Logo"
  },
  {
    id: 5,
    name: "HTML",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML Logo"
  },
  {
    id: 6,
    name: "VS Code",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    alt: "VS Code Logo"
  },
  {
    id: 7,
    name: "Tailwind CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "CodeCraft Logo"
  },
  {
    id: 8,
    name: "Github",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    alt: "Github Logo"
  }
];

const LogoSlider = ({
  logos = sampleLogos,
  autoPlay = true,
  autoPlayInterval = 3000,
  showControls = true,
  itemsPerView = 4,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = Math.ceil(logos.length / itemsPerView);

  useEffect(() => {
    if (isPlaying && !isHovered && autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, autoPlay, autoPlayInterval, totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    
    <div 
      className={`top-shadow tech-bg text-white relative w-full bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 border shadow-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center mb-8 text-white">
        <h2 className="text-3xl font-bold text-foreground mb-2">My TechStacks</h2>
        <p className="text-muted-foreground">Exploring technologies, software, and tools</p>
      </div>

      <div className="text-white relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border p-6">
        <div className="flex items-center justify-center min-h-[120px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 text-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                  {logos.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((logo) => (
                    <div
                      key={logo.id}
                      className="flex items-center justify-center p-4 bg-background/80 rounded-lg border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-md group"
                    >
                      <img
                        src={logo.url}
                        alt={logo.alt}
                        className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showControls && totalSlides > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background hover:cursor-pointer"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background hover:cursor-pointer"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
          
        {autoPlay && (
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="bg-background/80 backdrop-blur-sm hover:cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Play
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LogoSlider;
