import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  MapPin, 
  Globe,
  Send,
  Search,
  Filter,
  ArrowLeft,
  UserPlus,
  MessageSquare,
  Calendar,
  Camera
} from 'lucide-react'
import { toast } from 'sonner'

export const SocialPage = () => {
  const [activeTab, setActiveTab] = useState('feed')
  const [newPost, setNewPost] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data for social features
  const posts = [
    {
      id: 1,
      author: 'Amara Johnson',
      avatar: 'AJ',
      location: 'Lagos, Nigeria',
      ancestry: 'Yoruba',
      time: '2 hours ago',
      content: 'Just visited the National Museum in Lagos! The artifacts from our ancestors are breathtaking. Feeling so connected to my roots 🌍✨',
      image: true,
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: 'Marcus Williams',
      avatar: 'MW',
      location: 'Atlanta, USA',
      ancestry: 'Ghanaian',
      time: '4 hours ago',
      content: 'Cooking my grandmother\'s jollof rice recipe today. The smell takes me back to childhood visits to Accra. Food is truly the bridge between generations 🍚❤️',
      likes: 31,
      comments: 12,
      shares: 5
    },
    {
      id: 3,
      author: 'Zara Okafor',
      avatar: 'ZO',
      location: 'London, UK',
      ancestry: 'Nigerian',
      time: '6 hours ago',
      content: 'Attended the African Heritage Festival today. So beautiful to see our diaspora community come together to celebrate our culture, music, and traditions! 🎭🥁',
      likes: 45,
      comments: 18,
      shares: 9
    }
  ]

  const connections = [
    { name: 'Kwame Asante', location: 'Accra, Ghana', ancestry: 'Akan', mutual: 12, status: 'connected' },
    { name: 'Fatima Diallo', location: 'Dakar, Senegal', ancestry: 'Wolof', mutual: 8, status: 'pending' },
    { name: 'David Mbeki', location: 'Cape Town, SA', ancestry: 'Xhosa', mutual: 15, status: 'suggested' },
    { name: 'Aisha Hassan', location: 'Cairo, Egypt', ancestry: 'Egyptian', mutual: 6, status: 'connected' }
  ]

  const communities = [
    { name: 'Nigerian Diaspora Network', members: '12.5K', category: 'Heritage' },
    { name: 'African Entrepreneurs', members: '8.2K', category: 'Business' },
    { name: 'Afrobeats Lovers', members: '25.1K', category: 'Music' },
    { name: 'African Cuisine Masters', members: '6.8K', category: 'Food' }
  ]

  const handlePost = () => {
    if (newPost.trim()) {
      toast.success('Post shared successfully!')
      setNewPost('')
    }
  }

  const handleLike = (postId) => {
    toast.success('Post liked!')
  }

  const handleConnect = (name) => {
    toast.success(`Connection request sent to ${name}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Social Features</h1>
            <p className="text-gray-600">Connect with your diaspora community</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          {/* Feed Tab */}
          <TabsContent value="feed" className="space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle>Share Your Story</CardTitle>
                <CardDescription>
                  Connect with your community by sharing your experiences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="What's on your mind? Share your cultural journey, experiences, or thoughts..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  rows={3}
                />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Camera className="mr-2 h-4 w-4" />
                      Photo
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      Location
                    </Button>
                  </div>
                  <Button onClick={handlePost} disabled={!newPost.trim()}>
                    <Send className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    {/* Post Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-400 text-white">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{post.author}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {post.ancestry}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          <span>{post.location}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <p className="mb-4 text-gray-800">{post.content}</p>

                    {/* Post Image Placeholder */}
                    {post.image && (
                      <div className="mb-4 h-64 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600">Cultural Heritage Photo</span>
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex gap-6">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className="text-gray-600 hover:text-red-600"
                        >
                          <Heart className="mr-2 h-4 w-4" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600">
                          <Share2 className="mr-2 h-4 w-4" />
                          {post.shares}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Connections Tab */}
          <TabsContent value="connections" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Your Network</CardTitle>
                    <CardDescription>
                      Connect with people from your heritage and diaspora
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connections.map((connection, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white">
                            {connection.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{connection.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>{connection.location}</span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              {connection.ancestry}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500">{connection.mutual} mutual connections</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {connection.status === 'suggested' && (
                          <Button 
                            size="sm"
                            onClick={() => handleConnect(connection.name)}
                          >
                            <UserPlus className="mr-2 h-4 w-4" />
                            Connect
                          </Button>
                        )}
                        {connection.status === 'pending' && (
                          <Button size="sm" variant="outline" disabled>
                            Pending
                          </Button>
                        )}
                        {connection.status === 'connected' && (
                          <Button size="sm" variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Communities Tab */}
          <TabsContent value="communities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Communities</CardTitle>
                <CardDescription>
                  Join groups based on your interests and heritage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {communities.map((community, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{community.name}</h4>
                            <p className="text-sm text-gray-600">{community.members} members</p>
                          </div>
                          <Badge variant="secondary">{community.category}</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            Join Community
                          </Button>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  Private conversations with your connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {connections.filter(c => c.status === 'connected').map((contact, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-400 text-white">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold">{contact.name}</h4>
                        <p className="text-sm text-gray-600">Click to start conversation</p>
                      </div>
                      <div className="text-xs text-gray-500">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

