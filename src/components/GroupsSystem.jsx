import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';
import { 
  Users, 
  Plus, 
  Search, 
  Globe, 
  Lock, 
  UserCheck, 
  Settings, 
  Crown, 
  Star,
  MessageCircle,
  Calendar,
  MapPin,
  Hash,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  MoreHorizontal,
  Image,
  Video,
  FileText,
  Send,
  Filter,
  SortAsc,
  UserPlus,
  Flag,
  Shield
} from 'lucide-react';

const GroupsSystem = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Sample groups data
  const groups = [
    {
      id: 1,
      name: "Nigerian Diaspora Professionals",
      description: "Connecting Nigerian professionals worldwide for networking, mentorship, and career opportunities. Share experiences, job openings, and business insights.",
      category: "Professional",
      privacy: "public",
      members: 12456,
      posts: 2847,
      coverImage: "/api/placeholder/400/200",
      avatar: "/api/placeholder/60/60",
      isJoined: true,
      isAdmin: false,
      location: "Global",
      tags: ["Networking", "Career", "Business", "Mentorship"],
      recentActivity: "2 hours ago",
      adminName: "Adaora Okwu",
      diasporaTag: "🇳🇬 Global"
    },
    {
      id: 2,
      name: "Caribbean Culture & Heritage",
      description: "Celebrating and preserving Caribbean culture, traditions, music, and food. Share recipes, stories, and cultural events from across the Caribbean diaspora.",
      category: "Cultural",
      privacy: "public",
      members: 8923,
      posts: 5612,
      coverImage: "/api/placeholder/400/200",
      avatar: "/api/placeholder/60/60",
      isJoined: true,
      isAdmin: true,
      location: "Caribbean Diaspora",
      tags: ["Culture", "Food", "Music", "Traditions"],
      recentActivity: "1 hour ago",
      adminName: "Marcus Baptiste",
      diasporaTag: "🇯🇲 x 🇨🇦"
    },
    {
      id: 3,
      name: "African Tech Innovators",
      description: "African tech entrepreneurs and innovators building solutions for the continent and diaspora. Discuss startups, funding, and technology trends.",
      category: "Technology",
      privacy: "public",
      members: 6734,
      posts: 1923,
      coverImage: "/api/placeholder/400/200",
      avatar: "/api/placeholder/60/60",
      isJoined: false,
      isAdmin: false,
      location: "Africa & Diaspora",
      tags: ["Technology", "Startups", "Innovation", "Funding"],
      recentActivity: "3 hours ago",
      adminName: "Kwame Asante",
      diasporaTag: "🇬🇭 x 🇬🇧"
    },
    {
      id: 4,
      name: "Diaspora Parents Network",
      description: "Supporting parents raising children in the diaspora. Share parenting tips, cultural education resources, and connect with other diaspora families.",
      category: "Family",
      privacy: "private",
      members: 4521,
      posts: 3456,
      coverImage: "/api/placeholder/400/200",
      avatar: "/api/placeholder/60/60",
      isJoined: true,
      isAdmin: false,
      location: "Global Diaspora",
      tags: ["Parenting", "Culture", "Education", "Family"],
      recentActivity: "30 minutes ago",
      adminName: "Amina Hassan",
      diasporaTag: "🇪🇬 x 🇺🇸"
    },
    {
      id: 5,
      name: "African Literature Book Club",
      description: "Monthly book discussions featuring African authors and diaspora literature. Discover new voices and engage in thoughtful literary conversations.",
      category: "Education",
      privacy: "public",
      members: 3287,
      posts: 892,
      coverImage: "/api/placeholder/400/200",
      avatar: "/api/placeholder/60/60",
      isJoined: false,
      isAdmin: false,
      location: "Global",
      tags: ["Literature", "Books", "Authors", "Discussion"],
      recentActivity: "5 hours ago",
      adminName: "Chimamanda Okafor",
      diasporaTag: "🇳🇬 x 🇺🇸"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Professional', label: 'Professional' },
    { value: 'Cultural', label: 'Cultural' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Family', label: 'Family' },
    { value: 'Education', label: 'Education' },
    { value: 'Business', label: 'Business' },
    { value: 'Arts', label: 'Arts & Creative' },
    { value: 'Health', label: 'Health & Wellness' }
  ];

  const myGroups = groups.filter(group => group.isJoined);
  const suggestedGroups = groups.filter(group => !group.isJoined);

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || group.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleJoinGroup = (groupId) => {
    // Handle join group logic
    console.log('Joining group:', groupId);
  };

  const handleLeaveGroup = (groupId) => {
    // Handle leave group logic
    console.log('Leaving group:', groupId);
  };

  const CreateGroupModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-charcoal border-gold/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="w-5 h-5 mr-2 text-gold" />
            Create New Group
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Group Name</label>
            <Input 
              placeholder="Enter group name..."
              className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
            />
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Description</label>
            <Textarea 
              placeholder="Describe your group's purpose and what members can expect..."
              className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold resize-none"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-white text-sm font-medium mb-2 block">Category</label>
              <Select>
                <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-charcoal border-gold/20">
                  {categories.slice(1).map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-white hover:bg-gold/20">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-white text-sm font-medium mb-2 block">Privacy</label>
              <Select>
                <SelectTrigger className="bg-deep-black border-gold/30 text-white">
                  <SelectValue placeholder="Select privacy" />
                </SelectTrigger>
                <SelectContent className="bg-charcoal border-gold/20">
                  <SelectItem value="public" className="text-white hover:bg-gold/20">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>Public - Anyone can join</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="private" className="text-white hover:bg-gold/20">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4" />
                      <span>Private - Approval required</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-white text-sm font-medium mb-2 block">Tags (comma separated)</label>
            <Input 
              placeholder="e.g., networking, culture, business..."
              className="bg-deep-black border-gold/30 text-white placeholder-gray-400 focus:border-gold"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowCreateGroup(false)}
              className="border-gold/30 text-gray-400 hover:text-white"
            >
              Cancel
            </Button>
            <Button className="bg-gold hover:bg-warm-gold text-black">
              Create Group
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const GroupCard = ({ group, showJoinButton = true }) => (
    <Card className="bg-charcoal border-gold/20 hover:border-gold/40 transition-colors cursor-pointer">
      <div className="relative h-32 overflow-hidden rounded-t-lg">
        <img 
          src={group.coverImage} 
          alt={group.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-2 right-2">
          <Badge 
            variant="outline" 
            className={`${
              group.privacy === 'public' 
                ? 'border-pan-green text-pan-green' 
                : 'border-gold text-gold'
            } bg-black/50`}
          >
            {group.privacy === 'public' ? (
              <>
                <Globe className="w-3 h-3 mr-1" />
                Public
              </>
            ) : (
              <>
                <Lock className="w-3 h-3 mr-1" />
                Private
              </>
            )}
          </Badge>
        </div>
        <div className="absolute bottom-2 left-2">
          <Avatar className="w-12 h-12 border-2 border-gold">
            <AvatarImage src={group.avatar} alt={group.name} />
            <AvatarFallback className="bg-pan-green text-white">
              {group.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-1">{group.name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
              <Badge variant="outline" className="border-gold text-gold text-xs">
                {group.category}
              </Badge>
              <span>{group.diasporaTag}</span>
            </div>
          </div>
          {group.isAdmin && (
            <Crown className="w-5 h-5 text-gold" />
          )}
        </div>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {group.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {group.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="border-gold/30 text-gold text-xs">
              #{tag}
            </Badge>
          ))}
          {group.tags.length > 3 && (
            <Badge variant="outline" className="border-gold/30 text-gold text-xs">
              +{group.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{group.members.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-4 h-4" />
              <span>{group.posts.toLocaleString()}</span>
            </div>
          </div>
          <span>Active {group.recentActivity}</span>
        </div>

        {showJoinButton && (
          <div className="flex space-x-2">
            {group.isJoined ? (
              <>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-pan-green text-pan-green hover:bg-pan-green hover:text-white"
                >
                  <UserCheck className="w-4 h-4 mr-2" />
                  Joined
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => handleJoinGroup(group.id)}
                size="sm" 
                className="flex-1 bg-gold hover:bg-warm-gold text-black"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Join Group
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Diaspora Groups</h1>
          <p className="text-gray-400">Connect with communities that share your interests and heritage</p>
        </div>
        <Button 
          onClick={() => setShowCreateGroup(true)}
          className="bg-gold hover:bg-warm-gold text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Group
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-charcoal border border-gold/20">
          <TabsTrigger 
            value="discover" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Search className="w-4 h-4 mr-2" />
            Discover
          </TabsTrigger>
          <TabsTrigger 
            value="my-groups" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Users className="w-4 h-4 mr-2" />
            My Groups ({myGroups.length})
          </TabsTrigger>
          <TabsTrigger 
            value="suggested" 
            className="text-white data-[state=active]:bg-gold data-[state=active]:text-black"
          >
            <Star className="w-4 h-4 mr-2" />
            Suggested
          </TabsTrigger>
        </TabsList>

        {/* Discover Groups */}
        <TabsContent value="discover" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search groups by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-charcoal border-gold/30 text-white placeholder-gray-400 focus:border-gold"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-48 bg-charcoal border-gold/30 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-charcoal border-gold/20">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-white hover:bg-gold/20">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>

          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Groups Found</h3>
              <p className="text-gray-400 mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button 
                onClick={() => setShowCreateGroup(true)}
                className="bg-gold hover:bg-warm-gold text-black"
              >
                Create the First Group
              </Button>
            </div>
          )}
        </TabsContent>

        {/* My Groups */}
        <TabsContent value="my-groups" className="space-y-6">
          {myGroups.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Groups Yet</h3>
              <p className="text-gray-400 mb-4">
                Join groups to connect with communities that share your interests
              </p>
              <Button 
                onClick={() => setActiveTab('discover')}
                className="bg-gold hover:bg-warm-gold text-black"
              >
                Discover Groups
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myGroups.map((group) => (
                <GroupCard key={group.id} group={group} showJoinButton={false} />
              ))}
            </div>
          )}
        </TabsContent>

        {/* Suggested Groups */}
        <TabsContent value="suggested" className="space-y-6">
          <div className="bg-charcoal rounded-lg p-4 border border-gold/20 mb-6">
            <div className="flex items-start space-x-3">
              <Star className="w-5 h-5 text-gold mt-1" />
              <div>
                <h3 className="text-white font-medium mb-1">Personalized Suggestions</h3>
                <p className="text-gray-400 text-sm">
                  Based on your diaspora connections, interests, and activity, we suggest these groups that might interest you.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Create Group Modal */}
      {showCreateGroup && <CreateGroupModal />}
    </div>
  );
};

export default GroupsSystem;

