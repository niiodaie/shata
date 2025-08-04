import React, { useState, useEffect, useRef } from 'react';
import VideoPost from './VideoPost';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { 
  Video, 
  TrendingUp, 
  Music, 
  Hash,
  Globe,
  Users,
  Heart,
  ArrowUp
} from 'lucide-react';

const VideoFeed = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const feedRef = useRef(null);

  // Sample video data
  const sampleVideos = [
    {
      user: {
        name: "Kofi Mensah",
        username: "@kofi_accra",
        avatar: "/api/placeholder/40/40",
        location: "Accra, Ghana 🇬🇭",
        diasporaTag: "🇬🇭 x 🇬🇧"
      },
      content: {
        videoUrl: "/api/placeholder/400/600",
        caption: "Teaching my daughter traditional Adinkra symbols and their meanings. Each symbol tells a story of our ancestors' wisdom. This is Sankofa - 'go back and get it' - reminding us to learn from our past. 🇬🇭✨ #AdinkraSymbols #GhanaianCulture #TeachingHeritage",
        music: "Traditional Ghanaian Drums - Kpanlogo",
        timestamp: "3 hours ago",
        duration: "0:45"
      },
      interactions: {
        likes: 2847,
        comments: 156,
        shares: 89,
        isLiked: false
      }
    },
    {
      user: {
        name: "Amina Hassan",
        username: "@amina_cairo",
        avatar: "/api/placeholder/40/40",
        location: "Cairo, Egypt 🇪🇬",
        diasporaTag: "🇪🇬 x 🇺🇸"
      },
      content: {
        videoUrl: "/api/placeholder/400/600",
        caption: "Making my grandmother's koshari recipe! This Egyptian comfort food brings back so many memories of family gatherings. The blend of rice, lentils, and that perfect tomato sauce... pure magic! 🇪🇬❤️ #EgyptianFood #Koshari #FamilyRecipes #ArabCuisine",
        music: "Umm Kulthum - Alf Leila wa Leila",
        timestamp: "5 hours ago",
        duration: "1:23"
      },
      interactions: {
        likes: 1923,
        comments: 87,
        shares: 45,
        isLiked: true
      }
    },
    {
      user: {
        name: "Zara Baptiste",
        username: "@zara_kingston",
        avatar: "/api/placeholder/40/40",
        location: "Kingston, Jamaica 🇯🇲",
        diasporaTag: "🇯🇲 x 🇨🇦"
      },
      content: {
        videoUrl: "/api/placeholder/400/600",
        caption: "Dancehall moves passed down through generations! My grandmother taught my mother, my mother taught me, and now I'm teaching my niece. This is how we keep our culture alive! 🇯🇲💃🏿 #DancehallCulture #JamaicanDance #CulturalHeritage #GenerationalWisdom",
        music: "Bob Marley & The Wailers - One Love",
        timestamp: "8 hours ago",
        duration: "0:52"
      },
      interactions: {
        likes: 4521,
        comments: 234,
        shares: 167,
        isLiked: false
      }
    },
    {
      user: {
        name: "Kwame Asante",
        username: "@kwame_london",
        avatar: "/api/placeholder/40/40",
        location: "London, UK 🇬🇧",
        diasporaTag: "🇬🇭 x 🇬🇧"
      },
      content: {
        videoUrl: "/api/placeholder/400/600",
        caption: "Speaking Twi with my kids in London. It's so important they stay connected to their Ghanaian roots while growing up in the diaspora. Language is identity! 🇬🇭🗣️ #TwiLanguage #DiasporaParenting #GhanaianHeritage #LanguagePreservation",
        music: "Highlife Classic - Ebo Taylor",
        timestamp: "12 hours ago",
        duration: "1:15"
      },
      interactions: {
        likes: 3156,
        comments: 198,
        shares: 112,
        isLiked: true
      }
    }
  ];

  const trendingHashtags = [
    { tag: "#DiasporaStories", count: "2.3M" },
    { tag: "#CulturalHeritage", count: "1.8M" },
    { tag: "#AfricanCuisine", count: "1.2M" },
    { tag: "#TraditionalDance", count: "956K" },
    { tag: "#LanguagePreservation", count: "743K" }
  ];

  const trendingSounds = [
    { name: "Traditional African Drums", posts: "45.2K posts" },
    { name: "Afrobeats Mix 2024", posts: "32.1K posts" },
    { name: "Caribbean Vibes", posts: "28.7K posts" },
    { name: "Highlife Classics", posts: "19.3K posts" }
  ];

  const handleScroll = () => {
    if (feedRef.current) {
      const scrollTop = feedRef.current.scrollTop;
      const videoHeight = feedRef.current.clientHeight;
      const newIndex = Math.round(scrollTop / videoHeight);
      
      if (newIndex !== currentVideoIndex && newIndex < sampleVideos.length) {
        setCurrentVideoIndex(newIndex);
      }
    }
  };

  const scrollToVideo = (index) => {
    if (feedRef.current) {
      const videoHeight = feedRef.current.clientHeight;
      feedRef.current.scrollTo({
        top: index * videoHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const feedElement = feedRef.current;
    if (feedElement) {
      feedElement.addEventListener('scroll', handleScroll);
      return () => feedElement.removeEventListener('scroll', handleScroll);
    }
  }, [currentVideoIndex]);

  return (
    <div className="flex h-screen bg-deep-black">
      {/* Main Video Feed */}
      <div className="flex-1 relative">
        <div
          ref={feedRef}
          className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sampleVideos.map((video, index) => (
            <div key={index} className="h-screen snap-start">
              <VideoPost {...video} />
            </div>
          ))}
        </div>

        {/* Video Navigation */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
          {sampleVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToVideo(index)}
              className={`w-2 h-8 rounded-full transition-colors ${
                index === currentVideoIndex ? 'bg-gold' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Top Navigation */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white bg-black/50 hover:bg-black/70"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white bg-black/50 hover:bg-black/70"
            >
              <Globe className="w-4 h-4 mr-2" />
              Diaspora
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white bg-black/50 hover:bg-black/70"
            >
              <Users className="w-4 h-4 mr-2" />
              Following
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-white bg-black/50 hover:bg-black/70"
          >
            <Video className="w-4 h-4 mr-2" />
            Create
          </Button>
        </div>

        {/* Back to Top */}
        {currentVideoIndex > 0 && (
          <Button
            onClick={() => scrollToVideo(0)}
            className="absolute bottom-20 left-4 bg-gold hover:bg-warm-gold text-black"
            size="sm"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        )}
      </div>

      {/* Right Sidebar - Trending */}
      <div className="hidden lg:block w-80 bg-charcoal border-l border-gold/20 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Trending Hashtags */}
          <Card className="bg-deep-black border-gold/20">
            <CardContent className="p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Hash className="w-5 h-5 mr-2 text-gold" />
                Trending Hashtags
              </h3>
              <div className="space-y-3">
                {trendingHashtags.map((hashtag, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gold/10 cursor-pointer">
                    <div>
                      <span className="text-gold font-semibold">{hashtag.tag}</span>
                      <p className="text-gray-400 text-sm">{hashtag.count} videos</p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-gold" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trending Sounds */}
          <Card className="bg-deep-black border-gold/20">
            <CardContent className="p-4">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Music className="w-5 h-5 mr-2 text-pan-green" />
                Trending Sounds
              </h3>
              <div className="space-y-3">
                {trendingSounds.map((sound, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-pan-green/10 cursor-pointer">
                    <div>
                      <span className="text-white font-medium text-sm">{sound.name}</span>
                      <p className="text-gray-400 text-xs">{sound.posts}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-pan-green text-pan-green hover:bg-pan-green hover:text-white">
                      Use
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Create Video CTA */}
          <Card className="bg-gradient-to-br from-gold/20 to-pan-green/20 border-gold/30">
            <CardContent className="p-6 text-center">
              <Video className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Share Your Story</h3>
              <p className="text-gray-300 text-sm mb-4">
                Create videos that celebrate your culture and connect with the diaspora
              </p>
              <Button className="w-full bg-gold hover:bg-warm-gold text-black">
                Start Recording
              </Button>
            </CardContent>
          </Card>

          {/* Community Stats */}
          <Card className="bg-deep-black border-gold/20">
            <CardContent className="p-4">
              <h3 className="text-white font-semibold mb-4">Video Community</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Videos Today</span>
                  <span className="text-gold font-semibold">12.3K+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Creators</span>
                  <span className="text-pan-green font-semibold">89.2K+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Views</span>
                  <span className="text-pan-red font-semibold">2.1B+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Countries</span>
                  <span className="text-white font-semibold">195</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VideoFeed;

