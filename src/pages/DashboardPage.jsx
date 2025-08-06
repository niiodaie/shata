import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Users, 
  Video, 
  TreePine, 
  Sparkles, 
  Heart, 
  Megaphone, 
  Sun,
  LogOut,
  Settings,
  Bell,
  Search
} from 'lucide-react'
import { toast } from 'sonner'

export const DashboardPage = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
      toast.success('Signed out successfully!')
    } catch (error) {
      toast.error('Error signing out')
    }
  }

  const features = [
    {
      title: 'Profile System',
      description: 'Rich personal profiles with identity tags, privacy settings, and photo galleries',
      icon: User,
      path: '/profile',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Social Features',
      description: 'Community connections, messaging, and social interactions',
      icon: Users,
      path: '/social',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Live Streaming',
      description: 'Real-time video streaming with interactive features',
      icon: Video,
      path: '/live',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Ancestry & Heritage',
      description: 'Explore your roots, family tree, and cultural connections',
      icon: TreePine,
      path: '/ancestry',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Beauty & Wellness',
      description: 'AI hair matching, beauty showcase, and wellness tips',
      icon: Sparkles,
      path: '/beauty',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      title: 'Love & Dating',
      description: 'Diaspora love stories, connections, and relationship building',
      icon: Heart,
      path: '/love',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Activism & Social Impact',
      description: 'Join movements, share your voice, and drive positive change',
      icon: Megaphone,
      path: '/activism',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      title: 'Spirituality & Legacy',
      description: 'Honor ancestors, share wisdom, and spiritual connections',
      icon: Sun,
      path: '/spirituality',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ]

  const handleFeatureClick = (path) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Shata
              </h1>
              <Badge variant="secondary">Dashboard</Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.user_metadata?.first_name || 'Friend'}!
          </h2>
          <p className="text-lg text-gray-600">
            Explore your cultural journey and connect with your diaspora community
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">234</div>
              <p className="text-sm text-gray-600">Connections</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">12</div>
              <p className="text-sm text-gray-600">Communities</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-sm text-gray-600">Live Streams</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">78%</div>
              <p className="text-sm text-gray-600">Profile Complete</p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card 
                  key={index} 
                  className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 ${feature.bgColor}`}
                  onClick={() => handleFeatureClick(feature.path)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Profile updated</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New connection request</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <TreePine className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ancestry match found</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Highlights</CardTitle>
              <CardDescription>What's happening in your diaspora community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium">African Heritage Festival</p>
                  <p className="text-xs text-gray-600">Join the celebration this weekend</p>
                  <p className="text-xs text-gray-500">Brooklyn, NY</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-sm font-medium">Natural Hair Care Workshop</p>
                  <p className="text-xs text-gray-600">Learn traditional hair care techniques</p>
                  <p className="text-xs text-gray-500">Online Event</p>
                </div>
                <div className="p-3 bg-teal-50 rounded-lg">
                  <p className="text-sm font-medium">Community Fundraiser</p>
                  <p className="text-xs text-gray-600">Support education in rural Ghana</p>
                  <p className="text-xs text-gray-500">Goal: $10,000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

