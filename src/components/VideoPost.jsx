import React, { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import ShareButton from './ShareButton';
import { 
  Heart, 
  MessageCircle, 
  Repeat2, 
  MoreHorizontal,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Music,
  Users,
  Clock
} from 'lucide-react';

const VideoPost = ({ 
  user = {
    name: "Kofi Mensah",
    username: "@kofi_accra",
    avatar: "/api/placeholder/40/40",
    location: "Accra, Ghana 🇬🇭",
    diasporaTag: "🇬🇭 x 🇬🇧"
  },
  content = {
    videoUrl: "/api/placeholder/400/600",
    caption: "Teaching my daughter traditional Adinkra symbols and their meanings. Each symbol tells a story of our ancestors' wisdom. This is Sankofa - 'go back and get it' - reminding us to learn from our past. 🇬🇭✨ #AdinkraSymbols #GhanaianCulture #TeachingHeritage",
    music: "Traditional Ghanaian Drums - Kpanlogo",
    timestamp: "3 hours ago",
    duration: "0:45"
  },
  interactions = {
    likes: 2847,
    comments: 156,
    shares: 89,
    isLiked: false
  }
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(interactions.isLiked);
  const [likesCount, setLikesCount] = useState(interactions.likes);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card className="bg-charcoal border-gold/20 mb-6 overflow-hidden">
      <CardContent className="p-0">
        {/* Video Container */}
        <div className="relative aspect-[9/16] max-h-[600px] bg-black">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            poster="/api/placeholder/400/600"
          >
            <source src={content.videoUrl} type="video/mp4" />
          </video>

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="lg"
              className={`w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 text-white ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              } transition-opacity`}
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>

          {/* Top Controls */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>

          {/* Bottom Video Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="w-10 h-10 border-2 border-gold">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-pan-green text-white font-semibold text-sm">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-white text-sm">{user.name}</h3>
                  <span className="text-gold text-xs">{user.diasporaTag}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 text-xs">
                  <span>{user.username}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{content.timestamp}</span>
                  </div>
                </div>
              </div>
              <Button 
                size="sm" 
                className="bg-gold hover:bg-warm-gold text-black text-xs font-semibold ml-auto"
              >
                Follow
              </Button>
            </div>

            {/* Caption */}
            <p className="text-white text-sm leading-relaxed mb-3">
              {content.caption}
            </p>

            {/* Music Info */}
            <div className="flex items-center space-x-2 mb-3">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">{content.music}</span>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="absolute right-4 bottom-20 flex flex-col space-y-4">
            <div className="flex flex-col items-center">
              <Button
                onClick={handleLike}
                variant="ghost"
                size="sm"
                className={`w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 ${
                  isLiked ? 'text-pan-red' : 'text-white'
                }`}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              <span className="text-white text-xs font-semibold mt-1">
                {likesCount > 1000 ? `${(likesCount / 1000).toFixed(1)}K` : likesCount}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
              <span className="text-white text-xs font-semibold mt-1">
                {interactions.comments}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white"
              >
                <Repeat2 className="w-6 h-6" />
              </Button>
              <span className="text-white text-xs font-semibold mt-1">
                {interactions.shares}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <ShareButton 
                title={`Check out this video by ${user.name} on Shata.net`}
                description={content.caption}
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white"
              />
            </div>

            <div className="flex flex-col items-center">
              <Button
                variant="ghost"
                size="sm"
                className="w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-gold"
              >
                <Users className="w-6 h-6" />
              </Button>
              <span className="text-white text-xs font-semibold mt-1">Diaspora</span>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
              {content.duration}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPost;

