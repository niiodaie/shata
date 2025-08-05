import React, { useState } from 'react';
import Post from './Post';
import CreatePost from './CreatePost';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { 
  TrendingUp, 
  Globe, 
  Users, 
  Music,
  BookOpen,
  Heart,
  Flame
} from 'lucide-react';

const Feed = () => {
  const [activeTab, setActiveTab] = useState('for-you');

  // Sample posts data
  const samplePosts = [
    {
      user: {
        name: "Amara Okafor",
        username: "@amara_lagos",
        avatar: "/api/placeholder/40/40",
        location: "Lagos, Nigeria 🇳🇬",
        diasporaTag: "🇳🇬 x 🇺🇸"
      },
      content: {
        text: "Just finished reading 'Americanah' by Chimamanda Ngozi Adichie again. Every time I read it, I discover something new about the diaspora experience. The way she captures the complexity of identity, belonging, and home resonates so deeply. 📚✨ #DiasporaReads #NigerianLiterature",
        image: "/api/placeholder/500/300",
        timestamp: "2 hours ago"
      },
      interactions: {
        likes: 127,
        comments: 23,
        shares: 8,
        isLiked: false
      }
    },
    {
      user: {
        name: "Marcus Johnson",
        username: "@marcus_atl",
        avatar: "/api/placeholder/40/40",
        location: "Atlanta, GA 🇺🇸",
        diasporaTag: "🇺🇸 x 🇬🇭"
      },
      content: {
        text: "Visited the National Museum of African American History today. The resilience and strength of our ancestors is truly inspiring. Every young person in the diaspora should experience this. We are the continuation of their dreams. ✊🏿 #BlackHistory #Diaspora #Strength",
        timestamp: "4 hours ago"
      },
      interactions: {
        likes: 89,
        comments: 15,
        shares: 12,
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
        text: "Cooking my grandmother's curry goat recipe today and thinking about how food connects us across the diaspora. Every spice tells a story, every recipe carries memory. What dishes connect you to your roots? 🍛❤️ #DiasporaFood #JamaicanCuisine #Heritage",
        image: "/api/placeholder/500/400",
        timestamp: "6 hours ago"
      },
      interactions: {
        likes: 156,
        comments: 34,
        shares: 19,
        isLiked: false
      }
    }
  ];

  const trendingTopics = [
    { tag: "#ShatterTheDivide", posts: "12.3K posts" },
    { tag: "#RootsToRhythm", posts: "8.7K posts" },
    { tag: "#DiasporaUnity", posts: "15.2K posts" },
    { tag: "#AfricanLiterature", posts: "5.4K posts" },
    { tag: "#BlackExcellence", posts: "23.1K posts" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Feed Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid w-full grid-cols-4 bg-charcoal border border-gold/20">
          <TabsTrigger 
            value="for-you" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Flame className="w-4 h-4 mr-2" />
            For You
          </TabsTrigger>
          <TabsTrigger 
            value="diaspora" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Globe className="w-4 h-4 mr-2" />
            Diaspora
          </TabsTrigger>
          <TabsTrigger 
            value="community" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Users className="w-4 h-4 mr-2" />
            Community
          </TabsTrigger>
          <TabsTrigger 
            value="trending" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </TabsTrigger>
        </TabsList>

        <TabsContent value="for-you" className="space-y-6">
          <CreatePost />
          {samplePosts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </TabsContent>

        <TabsContent value="diaspora" className="space-y-6">
          <CreatePost />
          <Card className="bg-charcoal border-gold/20">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Diaspora Connections</h3>
              <p className="text-gray-400 mb-4">
                Connect with your brothers and sisters across the globe. Share your story, learn from others.
              </p>
              <Button className="bg-gold hover:bg-warm-gold text-black">
                Explore Diaspora Stories
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <CreatePost />
          <Card className="bg-charcoal border-gold/20">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-pan-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community Spaces</h3>
              <p className="text-gray-400 mb-4">
                Join communities based on your interests, location, or heritage.
              </p>
              <Button className="bg-pan-green hover:bg-pan-green/80 text-white">
                Find Your Community
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          <Card className="bg-charcoal border-gold/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-gold" />
                Trending in the Diaspora
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gold/10 cursor-pointer transition-colors">
                    <div>
                      <span className="text-gold font-semibold">{topic.tag}</span>
                      <p className="text-gray-400 text-sm">{topic.posts}</p>
                    </div>
                    <TrendingUp className="w-4 h-4 text-gold" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <Button 
          variant="outline" 
          className="border-gold text-gold hover:bg-gold hover:text-black"
        >
          Load More Posts
        </Button>
      </div>
    </div>
  );
};

export default Feed;

