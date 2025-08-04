import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import Post from './Post';
import VideoPost from './VideoPost';
import { 
  MapPin, 
  Calendar, 
  Link as LinkIcon, 
  Users, 
  Heart, 
  MessageCircle,
  Settings,
  Share2,
  Flag,
  Crown,
  Verified,
  Globe,
  Camera,
  Edit3,
  Grid3X3,
  Video,
  Bookmark,
  UserPlus,
  UserCheck
} from 'lucide-react';

const UserProfile = ({ 
  isOwnProfile = false,
  user = {
    name: "Amara Okafor",
    username: "@amara_lagos",
    avatar: "/api/placeholder/120/120",
    coverImage: "/api/placeholder/800/300",
    bio: "Nigerian storyteller living in Atlanta 🇳🇬🇺🇸 | Bridging cultures through words | Author of 'Letters to Lagos' | Diaspora advocate | Mother of two beautiful souls ✨",
    location: "Atlanta, GA",
    website: "amaraokafor.com",
    joinDate: "March 2020",
    diasporaTag: "🇳🇬 x 🇺🇸",
    verified: true,
    following: false,
    stats: {
      posts: 247,
      followers: 12500,
      following: 892,
      likes: 45600
    },
    badges: ["Storyteller", "Community Leader", "Cultural Ambassador"]
  }
}) => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(user.following);
  const [followerCount, setFollowerCount] = useState(user.stats.followers);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount(isFollowing ? followerCount - 1 : followerCount + 1);
  };

  // Sample posts for the profile
  const userPosts = [
    {
      user: {
        name: user.name,
        username: user.username,
        avatar: user.avatar,
        location: user.location,
        diasporaTag: user.diasporaTag
      },
      content: {
        text: "Reflecting on my journey from Lagos to Atlanta. Every step taught me something new about identity, belonging, and the power of storytelling. Our stories matter. Our voices matter. 🌍✨ #DiasporaJourney #Storytelling",
        image: "/api/placeholder/500/300",
        timestamp: "2 days ago"
      },
      interactions: {
        likes: 234,
        comments: 45,
        shares: 12,
        isLiked: false
      }
    },
    {
      user: {
        name: user.name,
        username: user.username,
        avatar: user.avatar,
        location: user.location,
        diasporaTag: user.diasporaTag
      },
      content: {
        text: "Teaching my children Igbo while living in the diaspora. Language is the carrier of culture, and I want them to stay connected to their roots even as they grow up American. 🇳🇬❤️ #LanguagePreservation #DiasporaParenting",
        timestamp: "5 days ago"
      },
      interactions: {
        likes: 189,
        comments: 67,
        shares: 23,
        isLiked: true
      }
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gold/20 to-pan-green/20 rounded-lg overflow-hidden mb-6">
        <img 
          src={user.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Cover Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {isOwnProfile ? (
            <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
              <Camera className="w-4 h-4 mr-2" />
              Edit Cover
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="bg-black/50 text-white hover:bg-black/70">
                <Flag className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Profile Header */}
      <Card className="bg-charcoal border-gold/20 mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-gold">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-pan-green text-white text-2xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              {isOwnProfile && (
                <Button 
                  size="sm" 
                  className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-gold hover:bg-warm-gold text-black p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                    {user.verified && <Verified className="w-6 h-6 text-gold" />}
                    <Badge className="bg-gold text-black">{user.diasporaTag}</Badge>
                  </div>
                  <p className="text-gray-400">{user.username}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                  {isOwnProfile ? (
                    <>
                      <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={handleFollow}
                        className={`${
                          isFollowing 
                            ? 'bg-pan-green hover:bg-pan-green/80 text-white' 
                            : 'bg-gold hover:bg-warm-gold text-black'
                        }`}
                      >
                        {isFollowing ? (
                          <>
                            <UserCheck className="w-4 h-4 mr-2" />
                            Following
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 mr-2" />
                            Follow
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-300 mb-4 leading-relaxed">{user.bio}</p>

              {/* Profile Details */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href={`https://${user.website}`} className="text-gold hover:underline">
                    {user.website}
                  </a>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {user.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="border-gold text-gold">
                    <Crown className="w-3 h-3 mr-1" />
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="flex space-x-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">{formatNumber(user.stats.posts)}</p>
                  <p className="text-sm text-gray-400">Posts</p>
                </div>
                <div className="text-center cursor-pointer hover:text-gold">
                  <p className="text-xl font-bold text-white">{formatNumber(followerCount)}</p>
                  <p className="text-sm text-gray-400">Followers</p>
                </div>
                <div className="text-center cursor-pointer hover:text-gold">
                  <p className="text-xl font-bold text-white">{formatNumber(user.stats.following)}</p>
                  <p className="text-sm text-gray-400">Following</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-pan-red">{formatNumber(user.stats.likes)}</p>
                  <p className="text-sm text-gray-400">Likes</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 bg-charcoal border border-gold/20 mb-6">
          <TabsTrigger 
            value="posts" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Grid3X3 className="w-4 h-4 mr-2" />
            Posts
          </TabsTrigger>
          <TabsTrigger 
            value="videos" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Video className="w-4 h-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger 
            value="likes" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Heart className="w-4 h-4 mr-2" />
            Likes
          </TabsTrigger>
          {isOwnProfile && (
            <TabsTrigger 
              value="saved" 
              className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              <Bookmark className="w-4 h-4 mr-2" />
              Saved
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="posts" className="space-y-6">
          {userPosts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Video thumbnails would go here */}
            <Card className="bg-charcoal border-gold/20 aspect-[9/16] relative overflow-hidden cursor-pointer hover:border-gold/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">Traditional Adinkra Symbols</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Heart className="w-4 h-4 text-pan-red" />
                  <span className="text-white text-xs">2.8K</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="likes" className="space-y-6">
          <Card className="bg-charcoal border-gold/20">
            <CardContent className="p-8 text-center">
              <Heart className="w-12 h-12 text-pan-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Liked Posts</h3>
              <p className="text-gray-400">
                Posts that {isOwnProfile ? 'you' : user.name} liked will appear here
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {isOwnProfile && (
          <TabsContent value="saved" className="space-y-6">
            <Card className="bg-charcoal border-gold/20">
              <CardContent className="p-8 text-center">
                <Bookmark className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Saved Posts</h3>
                <p className="text-gray-400">
                  Posts you've saved will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default UserProfile;

