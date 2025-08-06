import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  Heart, 
  MessageCircle, 
  Star,
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Coffee,
  Music,
  Book
} from 'lucide-react'

export const LovePage = () => {
  const profiles = [
    {
      name: 'Amara Johnson',
      age: 28,
      location: 'New York, USA',
      ancestry: 'Nigerian',
      interests: ['Music', 'Travel', 'Cooking'],
      avatar: 'AJ'
    },
    {
      name: 'Marcus Williams',
      age: 32,
      location: 'London, UK',
      ancestry: 'Ghanaian',
      interests: ['Art', 'History', 'Dancing'],
      avatar: 'MW'
    }
  ]

  const events = [
    {
      title: 'African Heritage Singles Mixer',
      date: 'Saturday, 8:00 PM',
      location: 'Brooklyn, NY',
      attendees: 45
    },
    {
      title: 'Cultural Speed Dating',
      date: 'Friday, 7:00 PM',
      location: 'London, UK',
      attendees: 32
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => window.history.back()} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Love & Dating</h1>
            <p className="text-gray-600">Find meaningful connections within your community</p>
          </div>
        </div>

        <Tabs defaultValue="discover" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="discover">Discover</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="advice">Advice</TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Avatar className="w-20 h-20 mx-auto mb-3">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-pink-400 text-white text-xl">
                          {profile.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold">{profile.name}, {profile.age}</h3>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{profile.location}</span>
                      </div>
                      <Badge variant="secondary" className="mt-2">
                        {profile.ancestry}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Interests</h4>
                        <div className="flex flex-wrap gap-1">
                          {profile.interests.map((interest, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Heart className="mr-2 h-4 w-4" />
                          Like
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Matches</CardTitle>
                <CardDescription>People who liked you back</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No matches yet</p>
                  <p className="text-sm">Keep exploring to find your perfect match</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dating Events</CardTitle>
                <CardDescription>Meet people in person at cultural events</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge variant="outline">{event.attendees} attending</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button size="sm">Join Event</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dating Advice</CardTitle>
                <CardDescription>Tips for meaningful relationships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-gray-500">
                  <Book className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Dating advice coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

