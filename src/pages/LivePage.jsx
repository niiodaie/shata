import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Users, 
  Heart, 
  MessageCircle, 
  Share2,
  Settings,
  ArrowLeft,
  Play,
  Eye,
  Clock,
  Globe,
  MapPin,
  Send,
  Gift,
  Star
} from 'lucide-react'
import { toast } from 'sonner'

export const LivePage = () => {
  const [isLive, setIsLive] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)
  const [chatMessage, setChatMessage] = useState('')
  const [activeTab, setActiveTab] = useState('discover')

  // Mock data for live streams
  const liveStreams = [
    {
      id: 1,
      title: 'Traditional Yoruba Cooking Class',
      streamer: 'Chef Adunni',
      avatar: 'CA',
      viewers: 234,
      duration: '45:23',
      category: 'Culture',
      location: 'Lagos, Nigeria',
      thumbnail: true,
      isLive: true
    },
    {
      id: 2,
      title: 'Afrobeats Dance Tutorial',
      streamer: 'Dance Queen Zara',
      avatar: 'DZ',
      viewers: 567,
      duration: '28:15',
      category: 'Music',
      location: 'London, UK',
      thumbnail: true,
      isLive: true
    },
    {
      id: 3,
      title: 'African History Discussion',
      streamer: 'Prof. Kwame',
      avatar: 'PK',
      viewers: 189,
      duration: '1:12:45',
      category: 'Education',
      location: 'Accra, Ghana',
      thumbnail: true,
      isLive: true
    }
  ]

  const scheduledStreams = [
    {
      id: 4,
      title: 'Ethiopian Coffee Ceremony',
      streamer: 'Meron Tadesse',
      avatar: 'MT',
      scheduledTime: 'Today 8:00 PM',
      category: 'Culture',
      location: 'Addis Ababa, Ethiopia'
    },
    {
      id: 5,
      title: 'West African Drumming Session',
      streamer: 'Master Drummer Kofi',
      avatar: 'MK',
      scheduledTime: 'Tomorrow 3:00 PM',
      category: 'Music',
      location: 'Kumasi, Ghana'
    }
  ]

  const chatMessages = [
    { user: 'Amara_NYC', message: 'This is amazing! Learning so much about our culture 🔥', time: '2m ago' },
    { user: 'Marcus_ATL', message: 'Can you show the spice preparation again?', time: '3m ago' },
    { user: 'Zara_London', message: 'Greetings from London! 🇬🇧', time: '4m ago' },
    { user: 'David_SA', message: 'My grandmother used to cook like this ❤️', time: '5m ago' }
  ]

  const handleStartLive = () => {
    setIsLive(true)
    toast.success('Live stream started!')
  }

  const handleStopLive = () => {
    setIsLive(false)
    toast.success('Live stream ended!')
  }

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      toast.success('Message sent!')
      setChatMessage('')
    }
  }

  const handleJoinStream = (streamTitle) => {
    toast.success(`Joined ${streamTitle}`)
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
            <h1 className="text-3xl font-bold text-gray-900">Live Streaming</h1>
            <p className="text-gray-600">Share your culture in real-time</p>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="mylive">My Live</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Live Stream */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Featured Live Stream</CardTitle>
                        <CardDescription>Most popular stream right now</CardDescription>
                      </div>
                      <Badge variant="destructive" className="animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                        LIVE
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Video Player Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg mb-4 flex items-center justify-center relative">
                      <Play className="h-16 w-16 text-white opacity-80" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge variant="destructive">LIVE</Badge>
                        <Badge variant="secondary">
                          <Eye className="mr-1 h-3 w-3" />
                          234 viewers
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-lg">Traditional Yoruba Cooking Class</h3>
                        <p className="text-sm opacity-90">with Chef Adunni from Lagos</p>
                      </div>
                    </div>

                    {/* Stream Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-400 text-white">
                            CA
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">Chef Adunni</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>Lagos, Nigeria</span>
                            <span>•</span>
                            <Clock className="h-3 w-3" />
                            <span>45:23</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Heart className="mr-2 h-4 w-4" />
                          Like
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                        <Button size="sm">
                          Join Stream
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Chat */}
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Live Chat</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="h-64 overflow-y-auto space-y-3 border rounded-lg p-3 bg-gray-50">
                      {chatMessages.map((msg, index) => (
                        <div key={index} className="text-sm">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-blue-600">{msg.user}</span>
                            <span className="text-xs text-gray-500">{msg.time}</span>
                          </div>
                          <p className="text-gray-800">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button size="sm" onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Gift className="mr-2 h-4 w-4" />
                        Gift
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Star className="mr-2 h-4 w-4" />
                        Super Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Other Live Streams */}
            <Card>
              <CardHeader>
                <CardTitle>Other Live Streams</CardTitle>
                <CardDescription>Discover more cultural content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {liveStreams.slice(1).map((stream) => (
                    <Card key={stream.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        {/* Thumbnail */}
                        <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg mb-3 flex items-center justify-center relative">
                          <Play className="h-8 w-8 text-gray-600" />
                          <Badge variant="destructive" className="absolute top-2 left-2 text-xs">
                            LIVE
                          </Badge>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {stream.duration}
                          </div>
                        </div>

                        {/* Stream Info */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm line-clamp-2">{stream.title}</h4>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-400 text-white text-xs">
                                {stream.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600">{stream.streamer}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              <span>{stream.viewers} viewers</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {stream.category}
                            </Badge>
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full"
                            onClick={() => handleJoinStream(stream.title)}
                          >
                            Join Stream
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Live Tab */}
          <TabsContent value="mylive" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Live Stream</CardTitle>
                <CardDescription>
                  Share your culture, skills, or stories with the community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isLive ? (
                  <>
                    {/* Stream Setup */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Stream Title</label>
                          <Input placeholder="Enter your stream title..." />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Category</label>
                          <select className="w-full p-2 border rounded-lg">
                            <option>Culture</option>
                            <option>Music</option>
                            <option>Education</option>
                            <option>Food</option>
                            <option>Art</option>
                            <option>Language</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Description</label>
                          <textarea 
                            className="w-full p-2 border rounded-lg" 
                            rows={3}
                            placeholder="Describe what you'll be sharing..."
                          />
                        </div>
                      </div>

                      {/* Camera Preview */}
                      <div className="space-y-4">
                        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                          {videoEnabled ? (
                            <div className="text-white text-center">
                              <Video className="h-12 w-12 mx-auto mb-2" />
                              <p>Camera Preview</p>
                            </div>
                          ) : (
                            <div className="text-gray-400 text-center">
                              <VideoOff className="h-12 w-12 mx-auto mb-2" />
                              <p>Camera Off</p>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 justify-center">
                          <Button
                            variant={videoEnabled ? "default" : "outline"}
                            size="sm"
                            onClick={() => setVideoEnabled(!videoEnabled)}
                          >
                            {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                          </Button>
                          <Button
                            variant={audioEnabled ? "default" : "outline"}
                            size="sm"
                            onClick={() => setAudioEnabled(!audioEnabled)}
                          >
                            {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <Button size="lg" onClick={handleStartLive} className="px-8">
                        <Video className="mr-2 h-5 w-5" />
                        Start Live Stream
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Live Stream Controls */}
                    <div className="text-center space-y-4">
                      <Badge variant="destructive" className="text-lg px-4 py-2 animate-pulse">
                        <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
                        YOU ARE LIVE
                      </Badge>
                      <div className="flex items-center justify-center gap-6 text-lg">
                        <div className="flex items-center gap-2">
                          <Eye className="h-5 w-5" />
                          <span>0 viewers</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          <span>00:00:15</span>
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center">
                        <Button
                          variant={videoEnabled ? "default" : "outline"}
                          onClick={() => setVideoEnabled(!videoEnabled)}
                        >
                          {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant={audioEnabled ? "default" : "outline"}
                          onClick={() => setAudioEnabled(!audioEnabled)}
                        >
                          {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                        </Button>
                        <Button variant="destructive" onClick={handleStopLive}>
                          End Stream
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Scheduled Tab */}
          <TabsContent value="scheduled" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Streams</CardTitle>
                <CardDescription>
                  Upcoming live streams from your community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledStreams.map((stream) => (
                    <div key={stream.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                            {stream.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{stream.title}</h4>
                          <p className="text-sm text-gray-600">{stream.streamer}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>{stream.scheduledTime}</span>
                            <span>•</span>
                            <MapPin className="h-3 w-3" />
                            <span>{stream.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Set Reminder
                        </Button>
                        <Button size="sm">
                          Join When Live
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stream History</CardTitle>
                <CardDescription>
                  Your past live streams and recordings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Video className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No stream history yet</p>
                  <p className="text-sm">Start your first live stream to see it here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

