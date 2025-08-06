import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Sun, 
  Moon, 
  Star,
  ArrowLeft,
  Calendar,
  Users,
  BookOpen,
  Heart,
  Compass,
  Candle
} from 'lucide-react'

export const SpiritualityPage = () => {
  const traditions = [
    {
      name: 'Yoruba Spirituality',
      description: 'Ancient wisdom from West Africa',
      practices: ['Orisha worship', 'Divination', 'Ancestral reverence'],
      followers: 1200
    },
    {
      name: 'Ubuntu Philosophy',
      description: 'Southern African humanist philosophy',
      practices: ['Community unity', 'Interconnectedness', 'Compassion'],
      followers: 890
    },
    {
      name: 'Kemetic Wisdom',
      description: 'Ancient Egyptian spiritual teachings',
      practices: ['Ma\'at principles', 'Meditation', 'Sacred geometry'],
      followers: 756
    }
  ]

  const events = [
    {
      title: 'Full Moon Ceremony',
      date: 'Tonight, 8:00 PM',
      type: 'Virtual',
      participants: 45
    },
    {
      title: 'Ancestral Wisdom Circle',
      date: 'Saturday, 7:00 PM',
      type: 'In-person',
      participants: 23
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Spirituality & Wellness</h1>
            <p className="text-gray-600">Connect with ancient wisdom and spiritual practices</p>
          </div>
        </div>

        <Tabs defaultValue="traditions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="traditions">Traditions</TabsTrigger>
            <TabsTrigger value="ceremonies">Ceremonies</TabsTrigger>
            <TabsTrigger value="wisdom">Wisdom</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="traditions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {traditions.map((tradition, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Sun className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{tradition.name}</CardTitle>
                      <CardDescription>{tradition.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Core Practices</h4>
                      <div className="space-y-1">
                        {tradition.practices.map((practice, i) => (
                          <Badge key={i} variant="outline" className="text-xs mr-1 mb-1">
                            {practice}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{tradition.followers} followers</span>
                      </div>
                      <Button size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ceremonies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Ceremonies</CardTitle>
                <CardDescription>Join spiritual gatherings and rituals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                    <Button size="sm">Join Ceremony</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wisdom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ancient Wisdom</CardTitle>
                <CardDescription>Teachings and philosophies from African traditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Wisdom teachings coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Community</CardTitle>
                <CardDescription>Connect with like-minded spiritual seekers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Community features coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

