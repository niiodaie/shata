import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "We face neither East nor West; we face forward.",
    author: "Kwame Nkrumah",
    title: "First President of Ghana"
  },
  {
    text: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman",
    title: "Abolitionist & Political Activist"
  },
  {
    text: "A people without the knowledge of their past history, origin and culture is like a tree without roots.",
    author: "Marcus Garvey",
    title: "Pan-Africanist Leader"
  },
  {
    text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    author: "Martin Luther King Jr.",
    title: "Civil Rights Leader"
  },
  {
    text: "The problem of the twentieth century is the problem of the color line.",
    author: "W.E.B. Du Bois",
    title: "Sociologist & Civil Rights Activist"
  },
  {
    text: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African Proverb",
    title: "Ancient Wisdom"
  }
];

const HeroQuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-32 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center px-4"
        >
          <blockquote className="text-sm md:text-base text-gray-300 italic mb-2 leading-relaxed">
            "{quotes[currentQuote].text}"
          </blockquote>
          <div className="text-xs md:text-sm">
            <span className="text-gold font-semibold">
              — {quotes[currentQuote].author}
            </span>
            <br />
            <span className="text-gray-400">
              {quotes[currentQuote].title}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Quote indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentQuote 
                ? 'bg-gold scale-125' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroQuoteCarousel;

