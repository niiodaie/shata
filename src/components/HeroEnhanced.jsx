import { motion } from 'framer-motion';
import HeroQuoteCarousel from './HeroQuoteCarousel';
import { Button } from '@/components/ui/button.jsx';
import { 
  Share2, 
  Users, 
  Globe, 
  BookOpen, 
  Heart,
  ExternalLink,
  Mail,
  ArrowRight,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

const HeroEnhanced = () => {
  const handleJoinMovement = () => {
    // Scroll to registration section or open modal
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Open registration modal or redirect to signup
      window.open('https://forms.gle/shatanet-registration', '_blank');
    }
  };

  const handleExploreStories = () => {
    // Navigate to stories section or external blog
    window.open('https://medium.com/@shatanet/stories', '_blank');
  };

  const handleLearnMore = () => {
    // Navigate to about page or external resource
    window.open('https://www.africandiasporanetwork.org/', '_blank');
  };

  const handleNewsletterSignup = () => {
    // Open newsletter signup
    window.open('https://mailchimp.com/signup/shatanet', '_blank');
  };

  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Join the Pan-African digital movement at Shata.net - Where Africa Meets Her Diaspora');
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      instagram: 'https://www.instagram.com/shatanet_official/'
    };
    
    window.open(shareUrls[platform], '_blank');
  };

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
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Where Africa Meets Her Diaspora
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
        >
          A global network uniting Africans, African-Americans, Afro-Caribbeans, 
          and Afro-Latinos. Share stories, celebrate heritage, and build bridges 
          across continents.
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          <div className="flex items-center space-x-2 text-gold">
            <Users className="w-6 h-6" />
            <span className="text-lg font-semibold">Unity</span>
          </div>
          <div className="flex items-center space-x-2 text-pan-green">
            <BookOpen className="w-6 h-6" />
            <span className="text-lg font-semibold">Stories</span>
          </div>
          <div className="flex items-center space-x-2 text-pan-red">
            <Heart className="w-6 h-6" />
            <span className="text-lg font-semibold">Culture</span>
          </div>
        </motion.div>

        {/* Primary Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
        >
          <Button
            onClick={handleJoinMovement}
            className="bg-gold hover:bg-warm-gold text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Users className="w-5 h-5 mr-2" />
            Join the Movement
          </Button>
          
          <Button
            onClick={handleExploreStories}
            variant="outline"
            className="border-2 border-pan-green text-pan-green hover:bg-pan-green hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Stories
          </Button>
        </motion.div>

        {/* Secondary Action Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center space-x-6 space-y-2 mb-8"
        >
          <button
            onClick={handleLearnMore}
            className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors duration-300"
          >
            <Globe className="w-4 h-4" />
            <span>Learn About the Diaspora</span>
            <ExternalLink className="w-3 h-3" />
          </button>
          
          <button
            onClick={handleNewsletterSignup}
            className="flex items-center space-x-2 text-gray-300 hover:text-gold transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>Newsletter Signup</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          className="flex justify-center items-center space-x-4 mb-8"
        >
          <button
            onClick={() => handleSocialShare('twitter')}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-300"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleSocialShare('facebook')}
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-800 transition-colors duration-300"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleSocialShare('instagram')}
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-600 transition-colors duration-300"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1, ease: "easeOut" }}
          className="flex justify-center items-center space-x-8 text-center mb-8"
        >
          <div>
            <div className="text-2xl font-bold text-gold">50K+</div>
            <div className="text-gray-400 text-sm">Community Members</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pan-green">180+</div>
            <div className="text-gray-400 text-sm">Countries Connected</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pan-red">1M+</div>
            <div className="text-gray-400 text-sm">Stories Shared</div>
          </div>
        </motion.div>

        {/* Quote Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          <HeroQuoteCarousel />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowRight className="w-6 h-6 text-gold rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroEnhanced;

