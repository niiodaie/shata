import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import PostPrivacySelector from './PostPrivacySelector.jsx';
import { 
  Image, 
  Video, 
  Smile, 
  MapPin, 
  Calendar, 
  Hash,
  Users,
  Send,
  X,
  Globe,
  UserCheck,
  Lock,
  Settings,
  Camera,
  Mic,
  FileText,
  Heart,
  Music,
  Palette
} from 'lucide-react';

const CreatePostEnhanced = ({ onPost, className = "" }) => {
  const [postText, setPostText] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('diaspora');
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [showGroupSelector, setShowGroupSelector] = useState(false);
  const [location, setLocation] = useState('');
  const [feeling, setFeeling] = useState('');

  // Sample user groups
  const userGroups = [
    { id: 1, name: "Nigerian Diaspora Professionals", members: 12456, avatar: "/api/placeholder/40/40" },
    { id: 2, name: "Caribbean Culture & Heritage", members: 8923, avatar: "/api/placeholder/40/40" },
    { id: 3, name: "African Tech Innovators", members: 6734, avatar: "/api/placeholder/40/40" }
  ];

  const feelings = [
    { emoji: "😊", label: "happy" },
    { emoji: "🎉", label: "excited" },
    { emoji: "💪", label: "motivated" },
    { emoji: "🙏", label: "grateful" },
    { emoji: "❤️", label: "loved" },
    { emoji: "🌟", label: "blessed" },
    { emoji: "🔥", label: "inspired" },
    { emoji: "✊", label: "proud" }
  ];

  const handlePost = () => {
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      content: postText,
      audience: selectedAudience,
      groups: selectedGroups,
      location,
      feeling,
      attachments,
      timestamp: new Date(),
      author: {
        name: "You",
        username: "@you",
        avatar: "/api/placeholder/40/40",
        verified: true
      },
      likes: 0,
      comments: 0,
      shares: 0
    };

    onPost?.(newPost);
    
    // Reset form
    setPostText('');
    setSelectedGroups([]);
    setAttachments([]);
    setLocation('');
    setFeeling('');
  };

  const handleGroupToggle = (group) => {
    setSelectedGroups(prev => 
      prev.find(g => g.id === group.id)
        ? prev.filter(g => g.id !== group.id)
        : [...prev, group]
    );
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className={`bg-charcoal border-gold/20 ${className}`}>
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/api/placeholder/40/40" alt="Your avatar" />
            <AvatarFallback className="bg-pan-green text-white">You</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-4">
            {/* Main Text Area */}
            <Textarea
              placeholder="What's on your mind? Share your story with the diaspora..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="min-h-[100px] bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold resize-none"
            />

            {/* Selected Groups Display */}
            {selectedGroups.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-400 text-sm">Sharing to:</span>
                {selectedGroups.map((group) => (
                  <Badge 
                    key={group.id} 
                    variant="outline" 
                    className="border-gold text-gold flex items-center space-x-1"
                  >
                    <Users className="w-3 h-3" />
                    <span>{group.name}</span>
                    <button 
                      onClick={() => handleGroupToggle(group)}
                      className="ml-1 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Location and Feeling Display */}
            {(location || feeling) && (
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                {location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>at {location}</span>
                  </div>
                )}
                {feeling && (
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>feeling {feeling}</span>
                  </div>
                )}
              </div>
            )}

            {/* Attachments Preview */}
            {attachments.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {attachments.map((attachment, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-deep-black border border-gold/30 rounded-lg p-4 flex items-center space-x-2">
                      {attachment.type === 'image' && <Image className="w-5 h-5 text-gold" />}
                      {attachment.type === 'video' && <Video className="w-5 h-5 text-gold" />}
                      {attachment.type === 'audio' && <Mic className="w-5 h-5 text-gold" />}
                      <span className="text-white text-sm truncate">{attachment.name}</span>
                    </div>
                    <button
                      onClick={() => removeAttachment(index)}
                      className="absolute -top-2 -right-2 bg-pan-red text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-gold/20">
              <div className="flex items-center space-x-1">
                {/* Media Buttons */}
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gold">
                  <Image className="w-4 h-4 mr-1" />
                  Photo
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gold">
                  <Video className="w-4 h-4 mr-1" />
                  Video
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gold">
                  <Mic className="w-4 h-4 mr-1" />
                  Audio
                </Button>
                
                {/* Feeling/Activity */}
                <div className="relative">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gold">
                    <Smile className="w-4 h-4 mr-1" />
                    Feeling
                  </Button>
                </div>

                {/* Location */}
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gold">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location
                </Button>

                {/* Groups */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowGroupSelector(!showGroupSelector)}
                  className="text-gray-400 hover:text-gold"
                >
                  <Users className="w-4 h-4 mr-1" />
                  Groups
                </Button>
              </div>

              <div className="flex items-center space-x-3">
                {/* Privacy Selector */}
                <PostPrivacySelector
                  selectedAudience={selectedAudience}
                  onAudienceChange={setSelectedAudience}
                />

                {/* Post Button */}
                <Button
                  onClick={handlePost}
                  disabled={!postText.trim()}
                  className="bg-gold hover:bg-warm-gold text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Group Selector */}
            {showGroupSelector && (
              <Card className="bg-deep-black border-gold/20">
                <CardContent className="p-4">
                  <h4 className="text-white font-medium mb-3">Share to Groups</h4>
                  <div className="space-y-2">
                    {userGroups.map((group) => (
                      <div
                        key={group.id}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gold/10 cursor-pointer"
                        onClick={() => handleGroupToggle(group)}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={group.avatar} alt={group.name} />
                          <AvatarFallback className="bg-pan-green text-white text-xs">
                            {group.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-white text-sm font-medium">{group.name}</p>
                          <p className="text-gray-400 text-xs">{group.members.toLocaleString()} members</p>
                        </div>
                        <div className={`w-4 h-4 rounded border-2 ${
                          selectedGroups.find(g => g.id === group.id)
                            ? 'bg-gold border-gold'
                            : 'border-gray-400'
                        }`}>
                          {selectedGroups.find(g => g.id === group.id) && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-black rounded-full" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostEnhanced;

