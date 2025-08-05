import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Home, 
  Users, 
  Globe, 
  MessageCircle, 
  Bookmark, 
  TrendingUp,
  Music,
  BookOpen,
  Camera,
  Mic,
  Calendar,
  MapPin,
  Crown,
  Heart,
  Star
} from 'lucide-react';

const Sidebar = () => {
  const navigationItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Globe, label: 'Diaspora Feed', count: 12 },
    { icon: Users, label: 'Communities', count: 5 },
    { icon: MessageCircle, label: 'Messages', count: 3 },
    { icon: Bookmark, label: 'Saved Posts' },
    { icon: TrendingUp, label: 'Trending' },
    { icon: Calendar, label: 'Events' },
  ];

  const communities = [
    { name: 'Nigerian Diaspora', members: '45.2K', icon: '🇳🇬', active: true },
    { name: 'Caribbean Culture', members: '32.1K', icon: '🏝️', active: false },
    { name: 'African Literature', members: '28.7K', icon: '📚', active: false },
    { name: 'Diaspora Entrepreneurs', members: '19.3K', icon: '💼', active: false },
    { name: 'Pan-African Music', members: '67.8K', icon: '🎵', active: false },
  ];

  const suggestedConnections = [
    { 
      name: 'Asha Kone', 
      location: 'Paris, France 🇫🇷', 
      tag: '🇨🇮 x 🇫🇷',
      mutualFriends: 12,
      avatar: '/api/placeholder/32/32'
    },
    { 
      name: 'David Osei', 
      location: 'London, UK 🇬🇧', 
      tag: '🇬🇭 x 🇬🇧',
      mutualFriends: 8,
      avatar: '/api/placeholder/32/32'
    },
    { 
      name: 'Maria Santos', 
      location: 'São Paulo, Brazil 🇧🇷', 
      tag: '🇧🇷 x 🇦🇴',
      mutualFriends: 15,
      avatar: '/api/placeholder/32/32'
    }
  ];

  return (
    <div className="w-80 space-y-6">
      {/* Navigation Menu */}
      <Card className="bg-charcoal border-gold/20">
        <CardContent className="p-4">
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`w-full justify-start ${
                  item.active 
                    ? 'bg-gold/20 text-gold hover:bg-gold/30' 
                    : 'text-gray-300 hover:text-white hover:bg-gold/10'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.count && (
                  <Badge variant="secondary" className="bg-pan-red text-white">
                    {item.count}
                  </Badge>
                )}
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* User Profile Summary */}
      <Card className="bg-charcoal border-gold/20">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <Avatar className="w-12 h-12 border-2 border-gold">
              <AvatarImage src="/api/placeholder/48/48" alt="Your profile" />
              <AvatarFallback className="bg-pan-green text-white">YU</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-white">Your Profile</h3>
              <p className="text-sm text-gray-400">@your_username</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-semibold text-gold">127</p>
              <p className="text-xs text-gray-400">Posts</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-pan-green">1.2K</p>
              <p className="text-xs text-gray-400">Followers</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-pan-red">892</p>
              <p className="text-xs text-gray-400">Following</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* My Communities */}
      <Card className="bg-charcoal border-gold/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center">
            <Users className="w-5 h-5 mr-2 text-gold" />
            My Communities
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            {communities.map((community, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                  community.active 
                    ? 'bg-gold/20 border border-gold/30' 
                    : 'hover:bg-gold/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{community.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-white">{community.name}</p>
                    <p className="text-xs text-gray-400">{community.members} members</p>
                  </div>
                </div>
                {community.active && (
                  <Crown className="w-4 h-4 text-gold" />
                )}
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-black">
            Discover More
          </Button>
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card className="bg-charcoal border-gold/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center">
            <Heart className="w-5 h-5 mr-2 text-pan-red" />
            Connect with Diaspora
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-4">
            {suggestedConnections.map((person, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10 border border-gold/30">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback className="bg-pan-green text-white text-xs">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-white">{person.name}</p>
                      <span className="text-xs text-gold">{person.tag}</span>
                    </div>
                    <p className="text-xs text-gray-400">{person.location}</p>
                    <p className="text-xs text-gray-500">{person.mutualFriends} mutual connections</p>
                  </div>
                </div>
                <Button size="sm" className="bg-gold hover:bg-warm-gold text-black text-xs">
                  Connect
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 border-gold text-gold hover:bg-gold hover:text-black">
            See All Suggestions
          </Button>
        </CardContent>
      </Card>

      {/* Cultural Events */}
      <Card className="bg-charcoal border-gold/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-pan-green" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="space-y-3">
            <div className="p-3 bg-deep-black rounded-lg border border-gold/20">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">🎭</span>
                <h4 className="text-sm font-semibold text-white">Pan-African Arts Festival</h4>
              </div>
              <p className="text-xs text-gray-400 mb-1">Virtual Event • Dec 15, 2024</p>
              <p className="text-xs text-gray-300">Celebrating creativity across the diaspora</p>
            </div>
            
            <div className="p-3 bg-deep-black rounded-lg border border-gold/20">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">📚</span>
                <h4 className="text-sm font-semibold text-white">Book Club: African Authors</h4>
              </div>
              <p className="text-xs text-gray-400 mb-1">Online • Every Sunday</p>
              <p className="text-xs text-gray-300">Discussing contemporary African literature</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;

