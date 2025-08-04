import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Image, 
  Video, 
  Mic, 
  MapPin, 
  Smile,
  Hash,
  Users,
  Globe
} from 'lucide-react';

const CreatePost = () => {
  const [postText, setPostText] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('public');

  const audienceOptions = [
    { value: 'public', label: 'Public', icon: Globe, description: 'Anyone can see this post' },
    { value: 'diaspora', label: 'Diaspora', icon: Users, description: 'Only diaspora community can see' },
    { value: 'community', label: 'Community', icon: Users, description: 'Your community members only' }
  ];

  return (
    <Card className="bg-charcoal border-gold/20 mb-6">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* User Avatar */}
          <Avatar className="w-12 h-12 border-2 border-gold">
            <AvatarImage src="/api/placeholder/48/48" alt="Your avatar" />
            <AvatarFallback className="bg-pan-green text-white font-semibold">
              YU
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            {/* Post Input */}
            <Textarea
              placeholder="What's happening in your world? Share your story, thoughts, or experiences..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="min-h-[120px] bg-deep-black border-gold/30 text-white placeholder-gray-400 resize-none focus:border-gold"
            />

            {/* Audience Selector */}
            <div className="flex items-center space-x-4 mt-4 mb-4">
              <span className="text-sm text-gray-400">Share with:</span>
              {audienceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedAudience(option.value)}
                  className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedAudience === option.value
                      ? 'bg-gold text-black'
                      : 'bg-deep-black text-gray-400 hover:text-white hover:bg-gold/20'
                  }`}
                >
                  <option.icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>

            {/* Media and Options */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gold hover:bg-gold/10"
                >
                  <Image className="w-5 h-5 mr-2" />
                  Photo
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pan-red hover:bg-pan-red/10"
                >
                  <Video className="w-5 h-5 mr-2" />
                  Video
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-pan-green hover:bg-pan-green/10"
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Audio
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Location
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10"
                >
                  <Smile className="w-5 h-5 mr-2" />
                  Mood
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-purple-400 hover:bg-purple-400/10"
                >
                  <Hash className="w-5 h-5 mr-2" />
                  Tag
                </Button>
              </div>

              <div className="flex items-center space-x-3">
                {/* Character Count */}
                <div className="text-sm text-gray-400">
                  {postText.length}/500
                </div>

                {/* Post Button */}
                <Button
                  disabled={!postText.trim()}
                  className="bg-gold hover:bg-warm-gold text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Share Story
                </Button>
              </div>
            </div>

            {/* Hashtag Suggestions */}
            {postText.length > 0 && (
              <div className="mt-4 p-3 bg-deep-black rounded-lg border border-gold/20">
                <p className="text-sm text-gray-400 mb-2">Suggested hashtags:</p>
                <div className="flex flex-wrap gap-2">
                  {['#DiasporaStory', '#BlackExcellence', '#CulturalPride', '#Unity', '#Heritage'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setPostText(postText + ' ' + tag)}
                      className="px-2 py-1 bg-gold/20 text-gold text-sm rounded hover:bg-gold/30 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePost;

