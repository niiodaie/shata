import React from 'react';
import { motion } from 'framer-motion';
import HeroQuoteCarousel from './HeroQuoteCarousel';
import { Button } from '@/components/ui/button.jsx';
import { Share2, Users, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-deep-black text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-pan-african-gradient opacity-80" />
      <div className="absolute inset-0 tribal-texture" />
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 left-10 w-32 h-32 border-2 border-gold rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 right-10 w-24 h-24 border-2 border-pan-green rotate-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          className="absolute top-1/2 right-20 w-16 h-16 bg-pan-red rounded-full"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-6 py-20">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-african font-bold text-gold mb-4 leading-tight">
            Shata<span className="text-pan-green">.</span>net
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-4xl lg:text-5xl font-african text-white mb-6"
          >
            Where Africa Meets Her Diaspora
          </motion.h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-200 mb-8 leading-relaxed font-ubuntu"
        >
          A global network uniting Africans, African-Americans, Afro-Caribbeans, and Afro-Latinos. 
          Share stories, celebrate heritage, and build bridges across continents.
        </motion.p>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-gold">
            <Users className="w-5 h-5" />
            <span className="text-sm md:text-base">Unity</span>
          </div>
          <div className="flex items-center gap-2 text-pan-green">
            <Share2 className="w-5 h-5" />
            <span className="text-sm md:text-base">Stories</span>
          </div>
          <div className="flex items-center gap-2 text-pan-red">
            <Globe className="w-5 h-5" />
            <span className="text-sm md:text-base">Culture</span>
          </div>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button 
            size="lg"
            className="bg-gold hover:bg-warm-gold text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-gold"
          >
            Join the Movement
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Stories
          </Button>
        </motion.div>

        {/* Quote carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="w-full max-w-2xl"
        >
          <HeroQuoteCarousel />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

