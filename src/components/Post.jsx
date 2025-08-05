import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import ShareButton from './ShareButton';
import { 
  Heart, 
  MessageCircle, 
  Repeat2, 
  MoreHorizontal,
  MapPin,
  Clock,
  Users
} from 'lucide-react';

const Post = ({ 
  user = {
    name: "Amara Okafor",
    username: "@amara_lagos",
    avatar: "/api/placeholder/40/40",
    location: "Lagos, Nigeria 🇳🇬",
    diasporaTag: "🇳🇬 x 🇺🇸"
  },
  content = {
    text: "Just finished reading 'Americanah' by Chimamanda Ngozi Adichie again. Every time I read it, I discover something new about the diaspora experience. The way she captures the complexity of identity, belonging, and home resonates so deeply. 📚✨ #DiasporaReads #NigerianLiterature",
    image: "/api/placeholder/500/300",
    timestamp: "2 hours ago"
  },
  interactions = {
    likes: 127,
    comments: 23,
    shares: 8,
    isLiked: false
  }
}) => {
  const [isLiked, setIsLiked] = useState(interactions.isLiked);
  const [likesCount, setLikesCount] = useState(interactions.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card className="bg-charcoal border-gold/20 mb-6">
      <CardContent className="p-6">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border-2 border-gold">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-pan-green text-white font-semibold">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-white">{user.name}</h3>
                <span className="text-gold text-sm">{user.diasporaTag}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>{user.username}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{content.timestamp}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{user.location}</span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-white leading-relaxed mb-4">{content.text}</p>
          {content.image && (
            <div className="rounded-lg overflow-hidden">
              <img 
                src={content.image} 
                alt="Post content" 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>

        {/* Interaction Stats */}
        <div className="flex items-center justify-between text-gray-400 text-sm mb-4 pb-4 border-b border-gold/20">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <Heart className="w-4 h-4 text-pan-red" />
              <span>{likesCount} likes</span>
            </span>
            <span>{interactions.comments} comments</span>
            <span>{interactions.shares} shares</span>
          </div>
          <div className="flex items-center space-x-1 text-gold">
            <Users className="w-4 h-4" />
            <span>Diaspora Thread</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`flex items-center space-x-2 ${
                isLiked 
                  ? 'text-pan-red hover:text-pan-red' 
                  : 'text-gray-400 hover:text-pan-red'
              } hover:bg-pan-red/10`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>Like</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-400 hover:text-gold hover:bg-gold/10"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Comment</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-gray-400 hover:text-pan-green hover:bg-pan-green/10"
            >
              <Repeat2 className="w-5 h-5" />
              <span>Repost</span>
            </Button>
          </div>

          <ShareButton 
            title={`Check out this post by ${user.name} on Shata.net`}
            description={content.text}
            variant="ghost"
            size="sm"
          />
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-6 pt-4 border-t border-gold/20">
            <div className="space-y-4">
              {/* Sample Comments */}
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-pan-green text-white text-xs">KA</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-deep-black rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-white text-sm">Kwame Asante</span>
                      <span className="text-gold text-xs">🇬🇭 x 🇬🇧</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Such a powerful book! The way she writes about code-switching and cultural identity is incredible.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                    <button className="hover:text-pan-red">Like</button>
                    <button className="hover:text-gold">Reply</button>
                    <span>1h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Post;

